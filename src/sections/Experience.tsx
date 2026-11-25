import { Reveal } from '../components/Reveal'

const wdth = { fontVariationSettings: '"wdth" 100' }

const items = [
  {
    years: '2025 - Now',
    company: 'SIMBIT.ID (MUHAMMADISME)',
    role: 'Product Designer',
    desc: 'Designing complex SaaS platforms with heavy dependencies, data integrations, and multiple user roles.',
    impact: 'Established unified design language implemented across 3 major product lines.',
  },
  {
    years: '2022 - 24',
    company: 'BANK RAYA',
    role: 'Mid Product Designer',
    desc: 'Owned the core workspace experience and collaboration mechanics. Reshaped the real-time multiplayer document framework and streamlined complex sharing flows.',
    impact: 'Drove a 40% increase in active collaboration and reduced daily friction metrics.',
  },
  {
    years: '2021 - 24',
    company: 'GIZALAB',
    role: 'UI Designer',
    desc: 'Spearheaded design engagements for early-stage and high-growth Series A startups. Shipped comprehensive zero-to-one MVPs across fintech, health, and developer tools.',
    impact: 'Successfully launched 12 platforms, helping clients achieve sustainable growth and long-term success.',
  },
]

export function EyebrowPill({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <Reveal y={16} duration={0.6} delay={delay} className="relative flex shrink-0 items-center gap-[8px] rounded-[100px] border border-solid border-[rgba(10,10,11,0.08)] bg-white py-[7px] pr-[14px] pl-[12px]">
      <p className="font-['Archivo:Regular'] text-[14px] font-normal leading-[22px] whitespace-nowrap text-[#0a0a0b]" style={wdth}>
        {children}
      </p>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section className="relative w-full max-w-[1440px] bg-white">
      <div className="flex w-full flex-col items-start gap-[48px] px-5 py-[72px] md:px-10 lg:flex-row lg:gap-[96px] lg:px-[80px] lg:py-[100px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-[20px] lg:sticky lg:top-[40px] lg:w-[400px]">
          <EyebrowPill>Chronology</EyebrowPill>
          <Reveal y={24} delay={0.15} className="w-full max-w-[400px]">
            <h2 className="font-['Archivo:Medium'] text-[clamp(36px,4vw,48px)] font-medium leading-[0] tracking-[-1.92px] text-[#0a0a0a]" style={wdth}>
              <span className="font-['Geist:Regular'] font-normal leading-none tracking-[-0.64px]">{`A decade of crafting `}</span>
              <span className="font-['Instrument_Serif:Italic'] italic leading-none tracking-[-0.64px]">Digital Interfaces</span>
            </h2>
          </Reveal>
        </div>
        <div className="flex w-full min-w-px flex-1 flex-col items-start">
          {items.map((it, i) => (
            <Reveal
              key={it.years}
              y={28}
              delay={i * 0.08}
              className={`group flex w-full flex-col items-start gap-[14px] border-t border-solid border-[#e6e6e6] pt-[32px] pb-[36px] ${i === items.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex w-full flex-wrap items-center justify-between gap-2">
                <p className="font-['Instrument_Serif:Italic'] text-[clamp(34px,3.2vw,44px)] italic leading-[40px] tracking-[-0.88px] whitespace-nowrap text-[#0a0a0a] transition-transform duration-500 group-hover:translate-x-2">
                  {it.years}
                </p>
                <p className="font-['Archivo:Medium'] text-[11px] font-medium leading-[16px] tracking-[0.88px] whitespace-nowrap text-[#6b6b6b]" style={wdth}>
                  {it.company}
                </p>
              </div>
              <p className="w-full font-['Geist:Medium'] text-[clamp(28px,2.6vw,36px)] font-medium leading-[40px] tracking-[-1.08px] text-[#0a0a0a]">{it.role}</p>
              <p className="w-full font-['Archivo:Regular'] text-[16px] font-normal leading-[24px] text-[#6b6b6b]" style={wdth}>
                {it.desc}
              </p>
              <div className="flex w-full flex-col items-start gap-[8px] pt-[6px] sm:flex-row sm:gap-[16px]">
                <p className="font-['Archivo:Medium'] text-[11px] font-medium leading-[16px] tracking-[0.88px] whitespace-nowrap text-[#c75933]" style={wdth}>
                  KEY IMPACT
                </p>
                <p className="min-w-px flex-1 font-['Archivo:Regular'] text-[14px] font-normal leading-[20px] text-[#0a0a0a]" style={wdth}>
                  {it.impact}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
