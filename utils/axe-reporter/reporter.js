import mustache from 'mustache';
import path from 'path';
import {
  appendFileSync,
  readFileSync,
  mkdirSync,
  existsSync,
} from 'fs';

const reportDir = './testing/artifacts/axe';
const reportFileName = `${process.env.CONSTEL ? process.env.CONSTEL.replace(/[()/]/g, '_') : ''}axe_report.md`;
const template = readFileSync(path.join(__dirname, 'template.md'), { encoding: 'utf8' });

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
  // eslint-disable-next-line max-len
  const mdString = `${mustache.render(template, { testName, results: simplifyResults(results) })} \n\n`;
  const reportPath = path.join(reportDir, reportFileName);

  if (!existsSync(reportPath)) {
    mkdirSync(reportDir, { recursive: true });
  }

  appendFileSync(reportPath, mdString);
}
