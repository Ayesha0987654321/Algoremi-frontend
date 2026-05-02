import PageHero      from '../components/shared/PageHero'
import Timeline      from '../components/services/Timeline'
import AltSection    from '../components/services/AltSection'
import CtaSection    from '../components/home/CtaSection'

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
        tag="Deep Dive"
        title="AI That Works in Production, Not Just Demos"
        body="We've seen companies spend 6 months on a proof-of-concept that never ships.
              Our approach: build for production from week one. Every model we ship has
              monitoring, fallback logic, and human-in-the-loop where it matters."
        emoji="🧠"
        reverse={false}
      />
      <AltSection
        tag="Infrastructure"
        title="Cloud That Costs What It Should — No More"
        body="We've audited cloud bills with $200k/month in unnecessary spend. Our
              infrastructure designs are cost-optimized by default, auto-scaling by
              design, and observable at every layer."
        emoji="☁️"
        reverse={true}
        dark
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