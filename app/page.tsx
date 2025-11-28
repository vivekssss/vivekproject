import Header from '@/components/Header'
import HomeSlider from '@/components/HomeSlider'
import QualityProducts from '@/components/QualityProducts'
import GoToTop from '@/components/GoToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeSlider />
      <QualityProducts />
      <GoToTop />
    </main>
  )
}

