import mustache from 'mustache';
import { appendFileSync, readFileSync, writeFileSync, existsSync } from 'fs';

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

export function appendMdReport({ testName, approach, results }) {
  const template = readFileSync('./utils/axe-reporter/template.md', { encoding: 'utf8' });
  // eslint-disable-next-line max-len
  const mdString = `${mustache.render(template, { testName, approach, results: simplifyResults(results) })} \n\n`;
  const reportPath = './texting/artifacts/axe/axe_report.md';

  if (!existsSync(reportPath)) {
    writeFileSync(reportPath, mdString);
  } else {
    appendFileSync(reportPath, mdString);
  }
}
