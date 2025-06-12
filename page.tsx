import { HeroBanner } from '@/components/home/HeroBanner'
import { QuickGameSelect } from '@/components/home/QuickGameSelect'
import { TopSellingAccounts } from '@/components/home/TopSellingAccounts'
import { UserReviews } from '@/components/home/UserReviews'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
            Ömür Baba Siker
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            En güvenilir oyun hesabı ve item alım satım platformu
          </p>
        </div>
      </div>
      <HeroBanner />
      <QuickGameSelect />
      <TopSellingAccounts />
      <UserReviews />
      <WhyChooseUs />
    </main>
  )
} 