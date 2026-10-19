// Facts behind /about, /ohg, /brandex and /ar. Every figure is ohg.world's or brandexme.com's
// own published number; nothing here is estimated. Wording is confident where the facts carry it
// ("award-winning", "one of the leading…") and never a superlative nobody can check ("#1", "the best").

export const headline =
  'Award-winning packaging design leader from Amman, Jordan. CEO and co-founder of OHG, one of the leading packaging design and pre-press groups in the Middle East and North Africa.'

export const bio = [
  'Monther Al-Omari is the CEO and co-founder of OHG (Omari Holdings Group), the packaging design, reprographics and pre-press engineering group headquartered in Amman, Jordan, with a second studio in Granger, Indiana, USA. Over three decades he has built OHG into one of the leading packaging design groups in the Middle East and North Africa, with artwork that reaches shelves in 55 markets.',
  'OHG works at the point where design meets the printing press. Its studio designs brand identities and packaging, then engineers the colour separations, compensation curves and laser-engraved plates that let a design print the same way in every plant and every market, holding colour to a tolerance of ΔE < 1.5. Manufacturers and converters contract OHG directly, and through them its artwork reaches global brands including Coca-Cola, Pepsi, Nestlé, Unilever, Mondelez and Colgate.',
  'The group’s work has been recognised with the Red Dot Design Award, the iF Design Award, the Campaign BIG Awards, the International Graphic Design Awards, the DIGIZ Awards, the Brand Film Awards, AIGA and Strategy Awards Sweden.',
  'Alongside OHG, Monther is behind Brandex, the all-in-one design asset library with over a million premium mockups, packaging templates and PSD/EPS files, and an investor in a portfolio that includes Whispers Global, Brand Founder, Franchisor, Exit 99, Kayan Aletihad and the Global Registration Association. He is also the author of three books, including Heisting Millions with AI.',
]

export const atAGlance = [
  { value: '30+', label: 'Years in branding and packaging' },
  { value: '8', label: 'International design awards' },
  { value: '55', label: 'Markets OHG’s artwork reaches' },
  { value: '2', label: 'Studios: Amman and Granger, Indiana' },
  { value: '1M+', label: 'Design assets in the Brandex library' },
  { value: '3', label: 'Published books' },
]

export const awards = [
  { name: 'Red Dot Design Award', year: '2022', note: 'Presented to Whispers Global for high design quality' },
  { name: 'iF Design Award', year: '2019', note: 'International design award running since 1953' },
  { name: 'Campaign BIG Awards', year: '2019', note: 'Big and impactful advertising campaigns' },
  { name: 'International Graphic Design Awards', year: '2022', note: 'Branding, packaging, print and typography' },
  { name: 'DIGIZ Awards', year: '2022', note: 'German award for digital innovation' },
  { name: 'Brand Film Awards', year: '2021', note: 'Best brand films and branded content' },
  { name: 'AIGA', year: '2020', note: 'The professional association for design' },
  { name: 'Strategy Awards Sweden', year: '2018', note: 'Outstanding achievement in strategic planning' },
]

export const investments = [
  { name: 'Whispers Global', sector: 'Branding', summary: 'A branding studio of more than a decade, with characters registered worldwide.' },
  { name: 'Brand Founder', sector: 'Advisory and training', summary: 'Advice, consultancy and training for companies already trading but still learning how to build.' },
  { name: 'Franchisor', sector: 'Franchise development', summary: 'Franchise models built on a brand that already holds market share, or on a startup partnership.' },
  { name: 'Exit 99', sector: 'Search and digital marketing', summary: 'Search engine optimisation built per business: keyword research, content, links and social.' },
  { name: 'Kayan Aletihad', sector: 'Information technology', summary: 'Business systems for stock, hiring and follow-up, from a long-standing IT company.' },
  { name: 'Global Registration Association', sector: 'Certification and registration', summary: 'Certificates, domains and brand registration: the paperwork that makes a brand yours.' },
]

export const books = [
  { title: 'Heisting Millions with AI', summary: 'Leveraging artificial intelligence for financial success, for beginners and experts.' },
  { title: 'Rising with Whispers in the Wind', summary: 'A guide to rediscovering motivation and starting a more productive chapter.' },
  { title: 'Hidden Truths', summary: 'The connections between the law of gravity and the principles of attraction.' },
]

// OHG, as ohg.world publishes it.
export const ohg = {
  headline: 'Packaging design, reprographics and pre-press engineering from Amman, Jordan',
  intro:
    'OHG (Omari Holdings Group) is an award-winning packaging design and pre-press group and one of the leading studios of its kind in the Middle East and North Africa. From Amman, Jordan and Granger, Indiana, it takes a product from its brand identity to the printing plate, so that what is approved on screen is what appears on shelf, in every plant and every market.',
  stats: [
    { value: '25+', label: 'Years engineering packaging' },
    { value: '3,400+', label: 'Designs delivered each year' },
    { value: '10,000 m²', label: 'Printing plates produced each year' },
    { value: '55', label: 'Markets its artwork reaches' },
    { value: 'ΔE < 1.5', label: 'Colour tolerance held across markets' },
    { value: '2,000/min', label: 'Containers a minute on the fastest line' },
  ],
  services: [
    { name: 'Brand identity and design systems', summary: 'The mark, the palette, the type and the rules that keep them together.' },
    { name: 'Packaging design', summary: 'Design drawn for the pack it will actually live on.' },
    { name: 'Structural design', summary: 'The pack itself: shape, cutter guide, prototypes.' },
    { name: 'Artwork adaptation at scale', summary: 'One design, every SKU, language and market, without drifting.' },
    { name: 'Reprographics and pre-press', summary: 'Separations, trapping and keylines built for one named press.' },
    { name: 'Colour engineering', summary: 'A documented target and a compensation curve per press, held to ΔE < 1.5.' },
    { name: 'Plate making and engraving', summary: 'Direct laser imaging, with no intermediate film stage.' },
    { name: 'Proofing and 3D visuals', summary: 'Contract colour proofs and visuals of the finished pack.' },
  ],
  sectors: ['Beverage', 'Energy drinks', 'Beer', 'RTD and hard seltzer', 'Dairy', 'Food', 'Personal care', 'Tobacco'],
  formats: [
    'Beverage cans and aerosol monoblocs',
    'Pouches, films and wrappers',
    'Labels and shrink sleeves',
    'Folding cartons and corrugated',
    'Hinge-lid tobacco packs',
    'Glass, PET and closures',
  ],
  // ohg.world's own rule: manufacturers and converters contract OHG; the brands are downstream.
  brandsQualifier: 'Manufacturers and converters contract OHG directly; through them its artwork reaches these brands.',
  brands: ['Coca-Cola', 'Pepsi', 'Nestlé', 'Unilever', 'Mondelez', 'Colgate', 'Red Bull', 'Monster Energy', 'Rauch', 'Sinalco', 'United Arab Can', 'Valencia Foods'],
  caseStudies: [
    { title: 'Holding one colour across four plants', client: 'A global energy drink brand', href: 'https://ohg.world/work/high-chroma-across-markets' },
    { title: 'Artwork that arrives straight on a body that is not', client: 'A regional food manufacturer', href: 'https://ohg.world/work/artwork-on-a-tapered-body' },
    { title: 'Fine detail that survives a deep-drawn wall', client: 'A multinational dairy producer', href: 'https://ohg.world/work/fine-detail-on-a-deep-drawn-tub' },
  ],
}

// Brandex, as brandexme.com publishes it.
export const brandex = {
  headline: 'The all-in-one design asset library',
  intro:
    'Brandex is the design asset library founded alongside OHG and run separately under the same ownership. It gives designers, agencies and brand owners across the Middle East and worldwide a single place to start from: premium PSD mockups, print-ready packaging templates, PSD and EPS cutouts and free assets, with a design team on call for the things that don’t exist yet.',
  stats: [
    { value: '1,000,000+', label: 'Premium design assets' },
    { value: '600,000+', label: 'Downloads served' },
    { value: '6,000+', label: 'Custom projects delivered' },
    { value: '4.9★', label: 'Average client rating' },
  ],
  catalogue: [
    { name: 'Packaging templates', summary: 'Print-ready artwork and dielines for cartons, pouches, bottles, cans and tins, editable in AI, PSD and EPS.' },
    { name: 'Mockups', summary: 'Photorealistic PSD mockups for packaging, signage, apparel, print and devices.' },
    { name: 'PSD and EPS', summary: 'Isolated cutouts, illustrations and vector files for compositing and layout.' },
    { name: 'Free assets', summary: 'A free tier of the library for anyone starting out.' },
  ],
}

// OHG's own positioning, from ohg.world's homepage.
export const whyOhg = {
  principles: [
    { title: 'Engineering before aesthetics', body: 'A design that fails on press is not a design. Feasibility is settled at the drawing stage, when changing it still costs nothing.' },
    { title: 'One master, many fingerprints', body: 'A single documented target, and a compensation curve measured for every press that will run it. The specification never forks.' },
    { title: 'Silent execution', body: 'OHG’s name does not appear on the shelf. Its clients’ does. The measure of the work is that nobody has cause to look for it.' },
  ],
  themes: [
    { title: 'Built to outlast the rebrand', body: 'A logo is easy. A specification that still holds after four years, six markets, three new plants and a flavour nobody planned for is the hard part. OHG designs for the second year, not the launch photograph, and the proof is that clients hand it the next range instead of a brief to fix the last one.' },
    { title: 'Design that has to work', body: 'A health warning that has to sit exactly there. A batch code a scanner must read at speed. An allergen line nobody can afford to lose in a gradient. This work has no room for decoration: it either communicates or somebody recalls a truckload.' },
    { title: 'The shelf is the only focus group', body: 'Nothing is ever seen the way it was approved. It is seen at arm’s length, under a light nobody chose, beside eleven competitors. OHG designs for that moment, then checks it happened, market by market, rather than trusting the proof.' },
  ],
}

// ohg.world's client wall, all 119 marks, grouped here by sector. Same qualifier applies.
export const clientGroups = [
  { sector: 'Beverage', brands: ['Coca-Cola', 'Pepsi', 'Red Bull', 'Nescafé', 'Lipton', 'RC Cola', 'Green Cola', 'Rani', 'Sama', 'Sinalco', 'Rauch', 'S.Pellegrino', 'Heineken', 'Absolut Vodka', 'Martini', 'Starbucks', 'United Beverage Co'] },
  { sector: 'Food, dairy and confectionery', brands: ['Nestlé', 'Mondelez', 'Unilever', 'Heinz', 'Nutella', 'Pringles', 'Cheetos', 'Snickers', 'Toblerone', 'Chupa Chups', 'Kikkoman', 'Burger King', 'Almarai', 'Juhayna', 'Infalac', 'Valencia Foods', 'Green Hills', 'Yummy'] },
  { sector: 'Can makers and converters', brands: ['Crown', 'United Arab Can', 'MSCANCO', 'NAC'] },
  { sector: 'Personal care and household', brands: ['Colgate', 'Gillette', 'Durex', 'Ariel'] },
  { sector: 'Tobacco', brands: ['Marlboro', 'Gauloises', 'Mazaya'] },
  { sector: 'Fashion and luxury', brands: ['Chanel', 'Rolex', 'Tiffany & Co.', 'Hugo Boss', 'adidas', 'Puma', 'LEGO'] },
  { sector: 'Automotive and industrial', brands: ['Toyota', 'Honda', 'Hyundai', 'Mitsubishi', 'Nissan', 'Volkswagen', 'Mercedes-Benz', 'Audi', 'BMW', 'Goodyear', 'Castrol', 'Mobil 1', 'Shell', 'Bosch', 'Kenwood', 'DHL'] },
  { sector: 'Technology and media', brands: ['Apple', 'IBM', 'HP', 'Samsung', 'Sony', 'Microsoft', 'Oracle', 'NVIDIA', 'AMD', 'Adobe', 'Canon', 'Nikon', 'Kodak', 'LG', 'Skype', 'eBay', 'YouTube', 'Facebook', 'Amazon', 'Yahoo', 'PayPal', 'Vodafone'] },
  { sector: 'Finance', brands: ['Visa', 'American Express', 'SunTrust', 'ABC Bank', 'National Bank of Iraq', 'Babylon Asset Management'] },
  { sector: 'Jordan, Iraq and the Gulf', brands: ['Awareen', 'Trevspanio', 'Today', 'Ramez Attar', 'Jamiel Global', 'Jadeta Global', 'GulfMena Trainech', 'Al Sharqiya', 'Horizons', 'National Media Council', 'ISBC', 'DFI', 'Baghdad Lounge', 'Babylon Rotana', 'Rotadan', 'Al-Harman', 'Henan', 'Shahin'] },
]
