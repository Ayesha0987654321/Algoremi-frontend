import PageHero    from '../components/shared/PageHero'
import StorySection from '../components/about/StorySection'
import ValuesGrid  from '../components/about/ValuesGrid'
import TeamGrid    from '../components/about/TeamGrid'
import CtaSection  from '../components/home/CtaSection'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        tag="About Algoremi"
        title="We're Engineers Who Got Tired of Bad Infrastructure"
        subtitle="Founded by engineers who saw too many companies fail not from bad
                  ideas — but from systems that couldn't support them."
      />
      <StorySection />
      <ValuesGrid   />
      <TeamGrid     />
      <CtaSection
        heading="Come Work With People Who Care"
        body="If you want a vendor, there are plenty. If you want a team that
              treats your problems like their own — let's talk."
        ctaLabel="Start a Conversation"
        ctaTo="/contact"
        secondaryLabel="View Our Work"
        secondaryTo="/portfolio"
      />
    </main>
  )
}