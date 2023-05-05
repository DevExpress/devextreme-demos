import mustache from 'mustache';
import { appendFileSync, readFileSync } from 'fs';

function replaceBase64(html) {
  return html.replace(/data:image\/png;base64.+"/, '..."');
}

const simplifyResults = (r) => r.violations.map(({
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

export function appendMdReport({ testName, approach, results }) {
  const template = readFileSync('./utils/axe-reporter/template.md', { encoding: 'utf8' });
  const mdString = mustache.render(template, { testName, approach, results: simplifyResults(results) });
  appendFileSync('./texting/artifacts/axe/axe_report.md', `${mdString} \n\n`);
}
