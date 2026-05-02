import { useNavigate }  from 'react-router-dom'
import FadeIn           from '../ui/FadeIn'
import SectionTag       from '../ui/SectionTag'
import { FadeInStagger, FadeInItem } from '../ui/FadeInStagger'

const services = [
  {
    num:  '01',
    icon: '🤖',
    title: 'AI & Machine Learning Integration',
    desc:  'From LLM fine-tuning to production ML pipelines, we embed intelligence where it creates actual business value.',
    tags:  ['LLM', 'MLOps', 'AutoML'],
  },
  {
    num:  '02',
    icon: '📊',
    title: 'Data Architecture & Analytics',
    desc:  "We design data systems that don't just store information — they surface insights at the speed of decision-making.",
    tags:  ['Lakehouse', 'BI', 'Streaming'],
  },
  {
    num:  '03',
    icon: '☁️',
    title: 'Cloud Infrastructure & DevOps',
    desc:  'Kubernetes, Terraform, multi-cloud — we build resilient infrastructure that scales with your ambition, not against it.',
    tags:  ['AWS', 'GCP', 'K8s'],
  },
  {
    num:  '04',
    icon: '⚙️',
    title: 'Workflow & Process Automation',
    desc:  'Replace manual, error-prone processes with intelligent automation that runs 24/7 without supervision.',
    tags:  ['RPA', 'n8n', 'Zapier+'],
  },
  {
    num:  '05',
    icon: '🔐',
    title: 'Security, Compliance & Zero Trust',
    desc:  'SOC2, GDPR, HIPAA — we design security that protects without creating friction for your users or team.',
    tags:  ['SOC2', 'Zero Trust', 'Audit'],
  },
]

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
        {/* Left accent bar — scales up on hover */}
        <span
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full
                     origin-y scale-y-0 group-hover:scale-y-100
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
            {service.desc}
          </p>
        </div>

        {/* Tags — hidden on small screens */}
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
              What We Do<br />Exceptionally Well
            </h2>
          </div>
          <p className="max-w-[320px] text-[0.9rem] text-muted leading-[1.65] sm:text-right">
            Every engagement is custom-scoped. No packages, no guessing — just
            the right solution for your specific problem.
          </p>
        </FadeIn>

        {/* Stack */}
        <div className="flex flex-col gap-0.5">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} delay={i * 0.05} />
          ))}
        </div>

      </div>
    </section>
  )
}