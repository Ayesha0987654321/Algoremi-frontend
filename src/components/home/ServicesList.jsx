
import { useNavigate } from 'react-router-dom'
import FadeIn from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'
import { FadeInStagger, FadeInItem } from '../ui/FadeInStagger'

const services = [
  {
    num: '01',
    icon: '🚀',
    title: 'Web Development',
    tagline: 'Fast, scalable websites that convert — not just impress.',
    desc: 'We build production-grade web apps and sites from the ground up. React, Next.js, or whatever your stack demands — clean code that performs under real traffic, not just in demos.',
    features: [
      'Custom React / Next.js frontends',
      'Performance-first architecture (Core Web Vitals)',
      'SEO-ready, accessible, and mobile-first',
      'CMS integration (Sanity, Contentful, Strapi)',
    ],
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    num: '02',
    icon: '📱',
    title: 'App Development',
    tagline: 'Mobile apps your users actually keep installed.',
    desc: 'Cross-platform or native — we build apps that feel right on the device, not just functional. From MVP to App Store launch, we handle the full lifecycle.',
    features: [
      'React Native & Flutter cross-platform builds',
      'Native iOS / Android when performance demands it',
      'Offline-first architecture',
      'Push notifications, analytics, crash reporting',
    ],
    tags: ['React Native', 'Flutter', 'Swift'],
  },
  {
    num: '03',
    icon: '☁️',
    title: 'Cloud Services',
    tagline: 'Infrastructure that scales before you need to ask.',
    desc: 'We design, migrate, and manage cloud environments that are resilient, cost-optimised, and actually monitored. No surprise bills, no 3am outages going unnoticed.',
    features: [
      'Multi-cloud architecture (AWS, GCP, Azure)',
      'Kubernetes orchestration & autoscaling',
      'Cost audit & optimisation',
      'Disaster recovery & uptime SLAs',
    ],
    tags: ['AWS', 'GCP', 'K8s'],
  },
  {
    num: '04',
    icon: '🤖',
    title: 'AI & Machine Learning',
    tagline: 'AI that solves a real problem, not a demo problem.',
    desc: 'From LLM fine-tuning to production ML pipelines, we embed intelligence where it creates measurable business value — not where it looks good in a pitch deck.',
    features: [
      'LLM fine-tuning & RAG pipelines',
      'Computer vision & NLP solutions',
      'MLOps & model monitoring in production',
      'Custom AI agents & workflow automation',
    ],
    tags: ['LLMs', 'MLOps', 'LangChain'],
  },
  {
    num: '05',
    icon: '⚙️',
    title: 'DevOps & CI/CD',
    tagline: 'Ship faster without breaking what you already built.',
    desc: 'We set up pipelines that actually work — automated testing, zero-downtime deployments, and monitoring that tells you something broke before your users do.',
    features: [
      'GitHub Actions / GitLab CI pipeline design',
      'Docker containerisation & image optimisation',
      'Blue-green & canary deployments',
      'Observability stack (logs, metrics, traces)',
    ],
    tags: ['Docker', 'GitHub Actions', 'ArgoCD'],
  },
  {
    num: '06',
    icon: '📊',
    title: 'Database Design & API Development',
    tagline: "Data that's queryable at speed. APIs that don't lie.",
    desc: "Badly designed databases and brittle APIs are how good products die slowly. We design schemas that age well and build APIs that are consistent, documented, and fast.",
    features: [
      'Relational & NoSQL schema design',
      'REST & GraphQL API architecture',
      'Query optimisation & indexing strategies',
      'API versioning, auth & rate limiting',
    ],
    tags: ['PostgreSQL', 'GraphQL', 'REST'],
  },
]

// ─── Service row used on the homepage section ────────────────────────────────
function ServiceRow({ service, delay }) {
  const nav = useNavigate()

  return (
    <FadeIn delay={delay}>
      <div
        onClick={() => nav('/services')}
        className="
          group relative flex items-center gap-8 px-8 py-7
          rounded-[14px] border border-DEFAULT bg-card
          cursor-pointer overflow-hidden
          transition-all duration-300
          hover:bg-bg hover:border-strong hover:translate-x-1 hover:shadow-card
        "
      >
        {/* Left accent bar */}
        <span
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full
                     origin-center scale-y-0 group-hover:scale-y-100
                     transition-transform duration-300"
          style={{ background: 'var(--grad)' }}
        />

        {/* Number */}
        <span className="font-display text-[0.75rem] font-extrabold text-bg3 w-8 flex-shrink-0">
          {service.num}
        </span>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center
                     text-[1.3rem] flex-shrink-0 bg-bg2 border border-DEFAULT"
        >
          {service.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-[1rem] font-bold text-ink mb-1">
            {service.title}
          </h3>
          <p className="text-[0.82rem] text-muted leading-[1.5] line-clamp-2">
            {service.tagline}
          </p>
        </div>

        {/* Tags */}
        <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
          {service.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-[0.7rem] border border-strong
                         text-muted bg-bg"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <span
          className="text-[1.1rem] text-muted flex-shrink-0 ml-2
                     transition-all duration-300
                     group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </div>
    </FadeIn>
  )
}

// ─── Homepage services section ────────────────────────────────────────────────
export default function ServicesList() {
  const nav = useNavigate()

  return (
    <section className="py-[100px] px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto">

        {/* Header row */}
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-12">
          <div>
            <SectionTag>Services</SectionTag>
            <h2
              className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold
                         tracking-[-0.03em] text-ink"
            >
              What We Build.<br />Why It Works.
            </h2>
          </div>
          <p className="max-w-[320px] text-[0.9rem] text-muted leading-[1.65] sm:text-right">
            No off-the-shelf templates. Every solution is engineered for your
            stack, your scale, your problem.
          </p>
        </FadeIn>

        {/* Service rows */}
        <div className="flex flex-col gap-0.5">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} delay={i * 0.05} />
          ))}
        </div>

        {/* View All Services button */}
        <FadeIn delay={0.35}>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => nav('/services')}
              className="
                group flex items-center gap-2
                px-8 py-3.5 rounded-[10px]
                border-2 border-ink text-ink
                font-display text-[0.88rem] font-bold tracking-wide
                transition-all duration-300
                hover:bg-ink hover:text-white
              "
            >
              Explore All Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

