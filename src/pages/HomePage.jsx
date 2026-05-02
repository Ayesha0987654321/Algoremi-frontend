import Hero              from '../components/home/Hero'
import Marquee           from '../components/home/Marquee'
import SplitSection      from '../components/home/SplitSection'
import ServicesList      from '../components/home/ServicesList'
import StatementSection  from '../components/home/StatementSection'
import PortfolioPreview  from '../components/home/PortfolioPreview'
import CtaSection        from '../components/home/CtaSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <SplitSection />
      <ServicesList />
      <StatementSection />
      <PortfolioPreview />
      <CtaSection />
    </main>
  )
}