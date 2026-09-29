export const siteUrl = 'https://www.montheralomari.com'

export const personName = 'Monther Al-Omari'

export const portraitImage =
  'https://static.wixstatic.com/media/fdd745_b49e25fe2cf74db28d2225b4c35621ff~mv2.png'

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: personName,
      alternateName: ['Monther AlOmari', 'Monther Al Omari', 'Monther Omari', 'منذر العمري'],
      url: siteUrl,
      image: [
        portraitImage,
        'https://static.wixstatic.com/media/fdd745_2db1aa2a18c349e29ae7a1704a19e760~mv2.jpg',
      ],
      jobTitle: 'CEO & Co-Founder of OHG',
      email: 'mailto:m.omari@ohg.world',
      worksFor: { '@id': 'https://ohg.world/#organization' },
      affiliation: { '@id': 'https://brandexme.com/#organization' },
      sameAs: [
        'https://www.facebook.com/p/Monther-Al-Omari-100082675527957/',
        'https://www.instagram.com/montheralomari1',
        'https://www.linkedin.com/in/whispersjo',
      ],
    },
    {
      // Same @id as the Organization in ohg.world's own JSON-LD, so both sites describe one entity.
      '@type': 'Organization',
      '@id': 'https://ohg.world/#organization',
      name: 'OHG',
      legalName: 'Omari Holdings Group',
      url: 'https://ohg.world',
      logo: 'https://ohg.world/brand/ohg-wordmark-dark.png',
      founder: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Organization',
      '@id': 'https://brandexme.com/#organization',
      name: 'Brandex',
      url: 'https://brandexme.com',
      description: 'The all-in-one design asset library. A sister company of OHG.',
    },
  ],
}
