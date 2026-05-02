import { useNavigate } from 'react-router-dom'

const contactItems = [
  {
    icon:  '✉',
    label: 'Email',
    value: 'reach@algoremi.com',
    href:  'mailto:reach@algoremi.com',
  },
  {
    icon:  '☎',
    label: 'Phone',
    value: '+92 336 0044220',
    href:  'tel:+923360044220',
  },
  {
    icon:  '◎',
    label: 'Location',
    value: 'Pakistan',
    href:  null,
  },
]

const expectations = [
  'No pitch decks, no account managers',
  'Direct access to engineers from day one',
  'Honest scope estimate on the first call',
  'NDA available before any discussion',
]

export default function ContactSidebar() {
  const nav = useNavigate()

  return (
    <div className="flex flex-col gap-4">

      {/* ── Trust banner ── */}
      <div
        className="flex items-start gap-2.5 p-4 rounded-xl
                   bg-[#E1F5EE] border border-[#9FE1CB]"
      >
        {/* Icon */}
        <div
          className="w-8 h-8 rounded-full flex-shrink-0 flex items-center
                     justify-center text-[14px] text-[#085041] mt-px"
          style={{ background: '#5DCAA5' }}
        >
          ⚡
        </div>
        <div>
          <strong className="block text-[13px] font-medium text-[#085041] mb-0.5">
            Under 24 hours, guaranteed
          </strong>
          <span className="text-[12px] text-[#0F6E56] leading-[1.5]">
            Every inquiry gets a direct response from an engineer — not a
            template.
          </span>
        </div>
      </div>

      {/* ── Contact card ── */}
      <div className="bg-card border border-DEFAULT rounded-xl p-5">
        <h4
          className="text-[12px] font-medium tracking-[0.06em] uppercase
                     text-muted mb-3.5"
        >
          Contact
        </h4>

        <div className="flex flex-col">
          {contactItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 py-[7px]
                          ${i < contactItems.length - 1
                            ? 'border-b border-DEFAULT'
                            : ''}`}
            >
              {/* Small icon square */}
              <div
                className="w-7 h-7 flex-shrink-0 rounded-md flex items-center
                           justify-center text-[12px]
                           bg-bg2 border border-DEFAULT"
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-px">
                <span className="text-[11px] text-muted">{item.label}</span>
                {item.href ? (
                   <a
                    href={item.href}
                    className="text-[12px] font-medium text-ink no-underline
                               hover:text-accent transition-colors duration-150"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[12px] font-medium text-ink">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── What to expect card ── */}
      <div className="bg-card border border-DEFAULT rounded-xl p-5">
        <h4
          className="text-[12px] font-medium tracking-[0.06em] uppercase
                     text-muted mb-3.5"
        >
          What to expect
        </h4>

        <div className="flex flex-col gap-2">
          {expectations.map((e) => (
            <div key={e} className="flex items-start gap-2 text-[12px]
                                    text-muted leading-[1.5]">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 flex items-center
                           justify-center text-[9px] text-[#0F6E56] mt-px"
                style={{ background: '#E1F5EE' }}
              >
                ✓
              </div>
              {e}
            </div>
          ))}
        </div>

        <button
          onClick={() => nav('/portfolio')}
          className="mt-4 w-full py-2 rounded-lg border border-DEFAULT
                     bg-transparent text-[12px] font-medium text-muted
                     transition-all duration-150
                     hover:border-strong hover:text-ink hover:bg-bg2
                     cursor-pointer"
        >
          See our work first →
        </button>
      </div>

    </div>
  )
}