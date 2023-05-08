import mustache from 'mustache';
import path from 'path';
import {
  appendFileSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'fs';

function replaceBase64(html) {
  return html.replace(/data:image\/png;base64.+"/, '..."');
}

function simplifyResults(r) {
  return r.violations.map(({
    id, impact, tags, description, helpUrl, nodes,
  }) => ({
    id,
    impact,
    tags,
    description,
    helpUrl,
    nodes: nodes.map(({ html, target, failureSummary }) => ({
      html: replaceBase64(html),
      target,
      failureSummary,
    })),
  }));
}

export function appendMdReport({ testName, results }) {
  const template = readFileSync('./utils/axe-reporter/template.md', { encoding: 'utf8' });
  // eslint-disable-next-line max-len
  const mdString = `${mustache.render(template, { testName, results: simplifyResults(results) })} \n\n`;
  const reportDir = './testing/artifacts/axe';
  const reportFileName = 'axe_report.md';
  const reportPath = path.join(reportDir, reportFileName);

  if (!existsSync(reportPath)) {
    mkdirSync(reportDir, { recursive: true });
    writeFileSync(reportPath, mdString);
  } else {
    appendFileSync(reportPath, mdString);
  }
}
