import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { siteUrl, portraitImage } from '@/lib/site'
import { awards, investments, books } from '@/lib/profile'

// Arabic profile for searches from Jordan and the wider MENA region. Same facts as /about.

const name = 'منذر العمري'
const title = `${name} | الرئيس التنفيذي والشريك المؤسس لمجموعة OHG`
const description =
  'منذر العمري هو الرئيس التنفيذي والشريك المؤسس لمجموعة العمري القابضة (OHG)، إحدى المجموعات الرائدة في تصميم التغليف وهندسة ما قبل الطباعة في الشرق الأوسط وشمال أفريقيا، ومقرها عمّان، الأردن.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/ar', languages: { en: '/about', ar: '/ar' } },
  openGraph: { type: 'profile', title, description, url: '/ar', images: [portraitImage], locale: 'ar_JO' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/ar#page`,
  url: `${siteUrl}/ar`,
  name: title,
  description,
  inLanguage: 'ar',
  mainEntity: { '@id': `${siteUrl}/#person` },
}

const bio = [
  'منذر العمري هو الرئيس التنفيذي والشريك المؤسس لمجموعة العمري القابضة (OHG)، المجموعة المتخصصة في تصميم التغليف والريبروغرافيك وهندسة ما قبل الطباعة، ومقرها عمّان، الأردن، ولها استوديو ثانٍ في غرانجر بولاية إنديانا الأمريكية. على مدى أكثر من ثلاثة عقود بنى منذر المجموعة لتصبح إحدى المجموعات الرائدة في تصميم التغليف في منطقة الشرق الأوسط وشمال أفريقيا، وتصل أعمالها الفنية إلى رفوف المتاجر في 55 سوقاً.',
  'تعمل OHG عند نقطة التقاء التصميم بآلة الطباعة: فهي تصمّم الهويات البصرية والعبوات، ثم تهندس فصل الألوان ومنحنيات التعويض وألواح الطباعة المحفورة بالليزر، بحيث يُطبع التصميم بالشكل نفسه في كل مصنع وكل سوق، مع الحفاظ على دقة لونية تقل عن ΔE 1.5. تتعاقد المصانع وشركات التحويل مع OHG مباشرةً، ومن خلالها تصل أعمالها إلى علامات عالمية مثل كوكاكولا وبيبسي ونستله ويونيليفر ومونديليز وكولغيت.',
  'حازت أعمال المجموعة على جوائز دولية من بينها Red Dot Design Award وiF Design Award وCampaign BIG Awards وInternational Graphic Design Awards وDIGIZ Awards وBrand Film Awards وAIGA وStrategy Awards Sweden.',
  'إلى جانب OHG، يقف منذر خلف Brandex، مكتبة أصول التصميم المتكاملة التي تضم أكثر من مليون ملف من النماذج (Mockups) وقوالب التغليف وملفات PSD وEPS، وهو مستثمر في محفظة تضم Whispers Global وBrand Founder وFranchisor وExit 99 وKayan Aletihad وGlobal Registration Association. كما أنه مؤلف لثلاثة كتب من بينها Heisting Millions with AI.',
]

const atAGlance = [
  { value: '+30', label: 'عاماً في العلامات التجارية والتغليف' },
  { value: '8', label: 'جوائز تصميم دولية' },
  { value: '55', label: 'سوقاً تصل إليها أعمال OHG' },
  { value: '2', label: 'استوديوهان: عمّان وغرانجر، إنديانا' },
  { value: '+1M', label: 'أصل تصميم في مكتبة Brandex' },
  { value: '3', label: 'كتب منشورة' },
]

const companies = [
  {
    name: 'OHG',
    fullName: 'مجموعة العمري القابضة',
    href: '/ohg',
    url: 'https://ohg.world',
    description:
      'مجموعة تصميم التغليف والريبروغرافيك وهندسة ما قبل الطباعة التي شارك منذر في تأسيسها ويقودها. من عمّان وغرانجر، تأخذ OHG المنتج من هويته إلى لوح الطباعة، وتحافظ على دقة لونية تقل عن ΔE 1.5، وتصل أعمالها إلى 55 سوقاً.',
  },
  {
    name: 'Brandex',
    fullName: 'مكتبة أصول التصميم',
    href: '/brandex',
    url: 'https://brandexme.com',
    description:
      'الشركة الشقيقة لـ OHG، تُدار بشكل مستقل تحت الملكية نفسها. مكتبة أصول تصميم متكاملة تضم أكثر من مليون ملف، وأكثر من 600,000 عملية تحميل، وفريق تصميم جاهز للمشاريع الخاصة.',
  },
]

export default function ArabicProfilePage() {
  return (
    <main className="min-h-screen font-arabic" lang="ar" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <div dir="ltr">
        <Navigation />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium text-sm">نبذة</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight">{name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>
            <p className="text-sm text-muted-foreground">
              <Link href="/about" lang="en" dir="ltr" className="hover:text-primary underline underline-offset-4">
                Read this page in English
              </Link>
            </p>
          </div>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border grayscale hover:grayscale-0 transition-all duration-500 relative justify-self-center">
            <Image src={portraitImage} alt={`${name}، الرئيس التنفيذي والشريك المؤسس لمجموعة OHG`} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {atAGlance.map((item) => (
            <div key={item.label}>
              <p className="text-3xl text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            السيرة
          </h2>
          <div className="space-y-6 text-muted-foreground leading-loose text-lg">
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            الشركات
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company) => (
              <div key={company.name} className="p-8 border border-border rounded-lg">
                <h3 className="text-2xl">{company.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{company.fullName}</p>
                <p className="text-muted-foreground mt-4 leading-loose">{company.description}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href={company.href}>المزيد عن {company.name}</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={company.url} target="_blank" rel="noopener noreferrer" dir="ltr">
                      {company.url.replace('https://', '')}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            الجوائز
          </h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <li key={award.name} className="border-t border-border pt-4">
                <p className="text-primary text-sm font-medium">{award.year}</p>
                <p className="text-lg mt-1" dir="ltr">{award.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Investments and books */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              الاستثمارات
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {investments.map((item) => (
                <li key={item.name} className="border-b border-border pb-3" dir="ltr">{item.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              الكتب
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {books.map((book) => (
                <li key={book.title} className="border-b border-border pb-3" dir="ltr">{book.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl">للتواصل</h2>
          <p className="text-muted-foreground leading-loose">
            للتواصل مع منذر العمري: <a href="mailto:m.omari@ohg.world" dir="ltr" className="text-foreground underline underline-offset-4 hover:text-primary">m.omari@ohg.world</a>
            ، ولأعمال التغليف تواصل مع OHG عبر{' '}
            <a href="https://ohg.world/contact" target="_blank" rel="noopener noreferrer" dir="ltr" className="text-foreground underline underline-offset-4 hover:text-primary">ohg.world/contact</a>.
          </p>
        </div>
      </section>

      <div dir="ltr">
        <Footer />
      </div>
    </main>
  )
}
