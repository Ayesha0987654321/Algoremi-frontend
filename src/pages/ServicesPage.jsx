import PageHero   from '../components/shared/PageHero'
import Timeline   from '../components/services/Timeline'
import AltSection from '../components/services/AltSection'
import CtaSection from '../components/home/CtaSection'
import webDev     from '../assets/images/services/webDev.png'
import appDev     from '../assets/images/services/appDev.png'
import cloud      from '../assets/images/services/cloud.png'
import apiDev     from '../assets/images/services/apiDev.png'

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        tag="What We Do"
        title="Services That Drive Real Outcomes"
        subtitle="We don't sell retainers — we solve specific problems with measurable
                  outcomes. Every engagement is scoped around your actual goals."
      />
      <Timeline />

      <AltSection
        tag="Web Development"
        title="Sites That Load Fast and Don't Fall Apart"
        body="We build websites and web apps that perform under real traffic, not just on your laptop."
        image={webDev}
        imageAlt="Web development"
        reverse={false}
        dark={false}
      />

      <AltSection
        tag="App Development"
        title="Mobile Apps People Actually Keep Installed"
        body="We build iOS and Android apps that feel native, respond instantly, and don't drain the battery."
        image={appDev}
        imageAlt="App development"
        reverse={true}
        dark={true}
      />

      {/* Uncomment when you add aiMl image to assets
      <AltSection
        tag="AI & Machine Learning"
        title="AI That Works in Production, Not Just Demos"
        body="We find where AI actually moves the needle in your business, then build it production-ready."
        image={aiMl}
        imageAlt="AI and machine learning"
        reverse={false}
        dark={false}
      /> */}

      {/* Uncomment when you add devops image to assets
      <AltSection
        tag="DevOps & CI/CD"
        title="Deploy Ten Times a Day Without Breaking Things"
        body="We set up pipelines that test, stage, and deploy automatically so your team ships fast."
        image={devops}
        imageAlt="DevOps and CI/CD"
        reverse={true}
        dark={true}
      /> */}

      <AltSection
        tag="Cloud Solutions"
        title="Cloud Infrastructure That Scales and Doesn't Overbill"
        body="We've audited cloud bills with $200k/month in pure waste. Every design we deliver is cost-optimized by default."
        image={cloud}
        imageAlt="Cloud solutions"
        reverse={false}
        dark={false}
      />

      <AltSection
        tag="API Development"
        title="APIs Your Partners Won't Hate Integrating Against"
        body="We build REST and GraphQL APIs that are versioned, documented, and consistent with auth and error handling built in."
        image={apiDev}
        imageAlt="API development"
        reverse={true}
        dark={true}
      />

      <CtaSection
        heading="Not Sure Which Service You Need?"
        body="Start with a 45-minute discovery call. We'll tell you exactly what we'd
              prioritize — even if it means you don't need us yet."
        ctaLabel="Schedule Discovery Call"
        ctaTo="/contact"
        single
      />
    </main>
  )
}