import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

export default function PdProcess({ steps }) {
  return (
    <section className="py-20 px-[5%] bg-card">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionTag>How We Worked</SectionTag>
          <h2 className="font-display text-[2rem] font-extrabold
                         tracking-[-0.025em] text-ink mb-4">
            Our Process
          </h2>
        </FadeIn>

        <div className="flex flex-col mt-4">
          {steps.map((s, i) => (
            <FadeIn
              key={s.title}
              delay={i * 0.08}
            >
              <div
                className="group flex gap-8 py-8 border-b border-DEFAULT last:border-none
                           transition-all duration-300 hover:pl-2"
              >
                {/* Big step number */}
                <span
                  className="font-display text-[3rem] font-extrabold
                             text-bg3 leading-none flex-shrink-0 w-14
                             pt-1 transition-colors duration-300
                             group-hover:text-bg2"
                >
                  0{i + 1}
                </span>

                {/* Text */}
                <div className="flex-1 pt-1 min-w-0">
                  <h3 className="font-display text-[1.1rem] font-bold
                                 text-ink mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[0.875rem] text-muted leading-[1.72]">
                    {s.desc}
                  </p>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-bg border border-DEFAULT
                             flex items-center justify-center text-[1.3rem]
                             flex-shrink-0 self-start mt-1"
                >
                  {s.icon}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}