import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const investments = [
  { name: 'GRA', subtitle: 'Global Registration Association', image: 'https://static.wixstatic.com/media/fdd745_68f681fdf6de491ea3acb9aea1f246e3~mv2.png' },
  { name: 'EXIT99', subtitle: 'Digital Agency', image: 'https://static.wixstatic.com/media/fdd745_32d62564ae28417d9f0dd79265f493c7~mv2.png' },
  { name: 'Brand Founder', subtitle: 'A king is not born', image: 'https://static.wixstatic.com/media/fdd745_83753750d79c43d2aed21df944919afb~mv2.png' },
  { name: 'Franchisor', subtitle: 'Evolve Your Business', image: 'https://static.wixstatic.com/media/fdd745_fcafd2f01d814a10b5d82fa6a5ba1784~mv2.png' },
  { name: 'Kayan Aletihad', subtitle: 'Information Technology & Consultancy', image: 'https://static.wixstatic.com/media/fdd745_a1b3ae8ff8074cb38dd57cc12b6db3b0~mv2.png' },
  { name: 'Ping Hub', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_2fe1a6cf14ae49e4ab02b47ef19507c4~mv2.png' },
  { name: 'Whispers Global', subtitle: 'WG', image: 'https://static.wixstatic.com/media/fdd745_979d1391d741410cac84054d24e6b7e6~mv2.png' },
  { name: 'WGdashboard', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_d6b4b2de283c4f0eb2a8faaa63422144~mv2.png' },
  { name: 'WIBIVERSE', subtitle: 'Travel Through Future Dimensions', image: 'https://static.wixstatic.com/media/fdd745_a7fe061296944b13a82cd1de8452f050~mv2.png' },
  { name: 'Creative Shop', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_cb7224ceaaf043719d753d27af7ed94a~mv2.png' },
  { name: 'Creative Space', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_25db5fd67815418e9a99d709edc3d5df~mv2.png' },
  { name: 'ISEO', subtitle: 'Your Space Trip', image: 'https://static.wixstatic.com/media/fdd745_70072a0b98a64eca84ce2d0cd8b9717c~mv2.png' },
  { name: 'Prompt Shop', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_1d757bbb79d741248e8b3e54a795c328~mv2.png' },
  { name: 'GoldenJet', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_51a4d5d5d8e34b1ea27c4afeb0a1d1e8~mv2.png' },
  { name: 'HEXATEC', subtitle: 'The Space Eye', image: 'https://static.wixstatic.com/media/fdd745_2df7883480ec4fce93944d255d8e5ef7~mv2.png' },
  { name: 'WGhashtag', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_f8f56b88650d4bf894e6ef3cb7f95316~mv2.png' },
  { name: 'goclick', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_a52ea4bba5f94f1abfccba2275b9eb73~mv2.png' },
  { name: 'wgexpress', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_dfd0d97cca914d1d929a12a4b4dc8a4d~mv2.png' },
  { name: 'MeNFT', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_c68ef4aa8fcb4ee484eb8f05881c045f~mv2.png' },
  { name: 'Ai Community', subtitle: 'Building The Future', image: 'https://static.wixstatic.com/media/fdd745_6706dd07ef2e4223a6d4a97681d9fb9b~mv2.png' },
  { name: 'robotex', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_b3d535bd304745e39b3b0adde95b2221~mv2.png' },
  { name: 'WG-QR', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_0c2bf98815b843aaab350643775bd606~mv2.png' },
  { name: 'ichatgpt', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_cf432b3817094882ab16f70e01a8745c~mv2.png' },
  { name: 'Askegpt', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_f5653693535746c4aa853b7f9c1d0b25~mv2.png' },
  { name: 'robote', subtitle: '', image: 'https://static.wixstatic.com/media/fdd745_5cc7303cfd264d8e9c23c46301761d88~mv2.png' },
]

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                The Journey of<br />
                <span className="text-primary">Monther Al Omari</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Monther Al Omari is a visionary leader who has dedicated his career to building and 
                expanding OHG. With an unwavering commitment to excellence and a deep understanding 
                of the industry, he has achieved remarkable milestones and led OHG to numerous 
                achievements and accolades.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/fdd745_2db1aa2a18c349e29ae7a1704a19e760~mv2.jpg"
                alt="Monther Al Omari"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            The Story
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Monther Al Omari is a remarkable individual known for his outstanding achievements in 
            various fields. He has proven himself as a dedicated and accomplished professional, 
            making significant contributions in his chosen pursuits. From entrepreneurship to 
            philanthropy, Monther has left an indelible mark, demonstrating exceptional leadership 
            and a commitment to positive change. His achievements stand as a testament to his 
            unwavering determination and passion for making a difference in the world.
          </p>
        </div>
      </section>

      {/* Investments Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Investments
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {investments.map((investment, index) => (
              <div 
                key={index}
                className="group relative aspect-video bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
              >
                <Image
                  src={investment.image}
                  alt={investment.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
