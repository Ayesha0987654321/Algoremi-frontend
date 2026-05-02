import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

// Exact service data from original Algoremi HTML
const items = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning Integration',
    body: 'We map where AI creates leverage in your business — not where it looks impressive. Then we build production-ready pipelines, not demos.',
    tags: ['LLM Fine-tuning', 'RAG Systems', 'MLOps', 'Computer Vision'],
  },
  {
    icon: '📊',
    title: 'Data Architecture & Business Intelligence',
    body: 'Lakehouse design, streaming pipelines, semantic layers — we build data infrastructure your team can actually use to make decisions.',
    tags: ['Data Lakehouse', 'Streaming ETL', 'BI Dashboards', 'dbt'],
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure & DevOps',
    body: 'Multi-cloud architecture, Kubernetes, Terraform IaC, CI/CD pipelines. Infrastructure that scales automatically, costs what it should.',
    tags: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    icon: '⚙️',
    title: 'Workflow & Business Process Automation',
    body: 'Map every manual process costing your team hours. Then automate it intelligently — with exception handling and audit trails built in.',
    tags: ['RPA', 'API Orchestration', 'Event-driven'],
  },
  {
    icon: '🔐',
    title: 'Security, Zero Trust & Compliance',
    body: 'SOC2 Type II, HIPAA, GDPR — security frameworks that protect without becoming a wall between your team and their work.',
    tags: ['Zero Trust', 'SOC2', 'Penetration Testing'],
  },
]

function TimelineItem({ item, index }) {
  return (
    <FadeIn delay={index * 0.1} className="flex gap-8 mb-14 last:mb-0">
      {/* Dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-16 h-16 rounded-full bg-card border border-strong
                     flex items-center justify-center text-[1.3rem]
                     shadow-card z-10 relative
                     transition-all duration-300
                     hover:border-accent hover:shadow-[0_0_20px_rgba(0,102,255,0.15)]"
        >
          {item.icon}
        </div>
        {/* Connector line — hidden on last item */}
        {index < items.length - 1 && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-accent-g/60 to-accent/20" />
        )}
      </div>

      {/* Content */}
      <div className="pt-3 pb-2 flex-1">
        <h3 className="font-display text-[1.2rem] font-bold text-ink mb-2">
          {item.title}
        </h3>
        <p className="text-[0.875rem] text-muted leading-[1.72] mb-4">
          {item.body}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-[0.72rem] font-medium
                         border border-accent/20 text-accent bg-accent/[0.05]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default function Timeline() {
  return (
    <section className="py-[100px] px-[5%] bg-bg">
      <div className="max-w-[900px] mx-auto">

        {/* Section header */}
        <FadeIn className="mb-14">
          <SectionTag>Our Approach</SectionTag>
          <h2
            className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold
                       tracking-[-0.03em] text-ink"
          >
            How We Deliver
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative pl-0">
          {items.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}