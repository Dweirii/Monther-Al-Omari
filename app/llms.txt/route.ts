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
    `- [Profile](${siteUrl}/): who ${personName} is, OHG, Brandex and answers to common questions`,
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
