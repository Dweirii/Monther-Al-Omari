import { siteUrl, personName } from '@/lib/site'
import { summary, companies, faq } from '@/lib/about'

// The llms.txt convention (llmstxt.org): a plain Markdown brief for AI assistants reading the site.

export const dynamic = 'force-static'

export function GET() {
  const body = [
    `# ${personName}`,
    '',
    `> ${summary}`,
    '',
    '## Companies',
    '',
    ...companies.map((company) => `- [${company.fullName}](${company.url}): ${company.description}`),
    '',
    '## Pages',
    '',
    `- [Home](${siteUrl}/): who ${personName} is, OHG, Brandex and answers to common questions`,
    `- [About ${personName}](${siteUrl}/about): full biography, facts at a glance, awards, investments and books`,
    `- [About ${personName} in Arabic](${siteUrl}/ar): the same profile in Arabic (منذر العمري)`,
    `- [OHG](${siteUrl}/ohg): what OHG does, its figures, sectors, formats, brands reached, case studies and awards`,
    `- [Brandex](${siteUrl}/brandex): the design asset library, its figures and catalogue`,
    `- [Clients and brands](${siteUrl}/clients): every brand OHG's artwork reaches, grouped by sector`,
    `- [OHG & Brandex work](${siteUrl}/gallery): packaging work by OHG and design assets by Brandex`,
    `- [Investments](${siteUrl}/investments): companies ${personName} has invested in`,
    `- [Awards](${siteUrl}/awards): awards won by OHG and its companies`,
    `- [Books](${siteUrl}/books): books by ${personName}`,
    `- [Contact](${siteUrl}/contact)`,
    '',
    '## Questions and answers',
    '',
    ...faq.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
