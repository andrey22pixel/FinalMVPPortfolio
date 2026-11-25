import { Reveal } from '../components/Reveal'

const wdth = { fontVariationSettings: '"wdth" 100' }

function Chip({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className={`flex items-center rounded-[1000px] px-[12px] py-[6px] ${dark ? 'bg-[rgba(255,255,255,0.08)]' : 'bg-[rgba(10,10,10,0.08)]'}`}>
      <p className={`font-['Archivo:Regular'] text-[12px] font-normal leading-[normal] whitespace-nowrap ${dark ? 'text-white' : 'text-[#0a0a0a]'}`} style={wdth}>
        {children}
      </p>
    </div>
  )
}

function Pill({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className={`flex items-start rounded-[1000px] border border-solid px-[14px] py-[7px] ${dark ? 'border-[rgba(255,255,255,0.3)]' : 'border-[rgba(10,10,10,0.2)]'}`}>
      <p className={`font-['Archivo:Regular'] text-[13px] font-normal leading-[normal] whitespace-nowrap ${dark ? 'text-white' : 'text-[#0a0a0a]'}`} style={wdth}>
        {children}
      </p>
    </div>
  )
}

function StepHead({ n, title, timing, desc }: { n: string; title: string; timing: string; desc: string }) {
  return (
    <div className="flex w-full flex-col items-start gap-[12px]">
      <div className="flex w-full items-center justify-between">
        <p className="font-['Instrument_Serif:Italic'] text-[56px] italic leading-[0.9] tracking-[-1.12px] whitespace-nowrap text-[#0a0a0a]">{n}</p>
        <Chip>{timing}</Chip>
      </div>
      <p className="font-['Geist:Medium'] text-[28px] font-medium leading-[normal] tracking-[-0.84px] whitespace-nowrap text-[#0a0a0a]">{title}</p>
      <p className="w-full font-['Archivo:Regular'] text-[15px] font-normal leading-[1.5] text-[#615e59]" style={wdth}>
        {desc}
      </p>
    </div>
  )
}

const card = 'rounded-[28px] bg-[#f9fafb] p-[32px] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,10,10,0.25)]'

export default function Process() {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-col items-start gap-[56px] overflow-clip bg-white px-5 py-[72px] md:px-10 lg:gap-[80px] lg:p-[80px]">
      <div className="flex w-full flex-col items-start justify-between gap-[24px] lg:flex-row lg:items-end">
        <div className="flex flex-col items-start gap-[24px]">
          <Reveal y={16} duration={0.6} className="flex items-center rounded-[1000px] border border-solid border-[rgba(10,10,10,0.18)] px-[14px] py-[7px]">
            <p className="font-['Archivo:Regular'] text-[13px] font-normal leading-[normal] whitespace-nowrap text-[#0a0a0a]" style={wdth}>
              How I work
            </p>
          </Reveal>
          <Reveal y={24} delay={0.12} className="w-full max-w-[900px]">
            <h2 className="font-['Geist:Regular'] text-[clamp(40px,4.45vw,64px)] font-normal leading-[0] tracking-[-0.045em] text-[#0a0a0a]">
              <span className="leading-none">{`A simple process, `}</span>
              <span className="font-['Instrument_Serif:Italic'] italic leading-none">built for clarity</span>
            </h2>
          </Reveal>
        </div>
        <Reveal y={20} delay={0.2} className="w-full max-w-[360px]">
          <p className="font-['Archivo:Regular'] text-[17px] font-normal leading-[1.5] text-[#615e59]" style={wdth}>
            Four steps from first call to shipped product. No black boxes, so you always know what happens next.
          </p>
        </Reveal>
      </div>

      <div className="flex w-full flex-col items-stretch gap-[16px] xl:flex-row">
        <div className="flex min-w-px flex-1 flex-col gap-[16px]">
          <div className="flex w-full flex-col gap-[16px] md:flex-row">
            <Reveal y={40} className="flex min-w-px flex-1">
              <div className={`${card} flex min-h-[390px] w-full flex-col items-start justify-between gap-6`}>
                <StepHead n="01" title="Discover" timing="1 week" desc="Understand business goals, users, and technical constraints through audits and stakeholder talks." />
                <div className="flex flex-wrap items-start gap-[8px]">
                  <Pill>Interviews</Pill>
                  <Pill>Audit</Pill>
                  <Pill>Analytics</Pill>
                </div>
                <p className="font-['Archivo:Regular'] text-[13px] font-normal leading-[normal] text-[#615e59]" style={wdth}>
                  Deliverable · Problem brief, research findings
                </p>
              </div>
            </Reveal>
            <Reveal y={40} delay={0.1} className="flex min-w-px flex-1">
              <div className={`${card} flex min-h-[390px] w-full flex-col items-start justify-between gap-6`}>
                <StepHead n="02" title="Define" timing="1 week" desc="Frame the problem, map user flows, and agree on success metrics before touching pixels." />
                <div className="flex items-center gap-[8px]">
                  {['Goal', 'Flow', 'Metric'].map((s, i) => (
                    <div key={s} className="flex items-center gap-[8px]">
                      {i > 0 && (
                        <p className="font-['Archivo:Regular'] text-[14px] font-normal leading-[normal] text-[#615e59]" style={wdth}>
                          →
                        </p>
                      )}
                      <div className="flex items-start rounded-[12px] bg-[#f4f1eb] px-[16px] py-[10px]">
                        <p className="font-['Archivo:Regular'] text-[13px] font-normal leading-[normal] whitespace-nowrap text-[#0a0a0a]" style={wdth}>
                          {s}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-['Archivo:Regular'] text-[13px] font-normal leading-[normal] text-[#615e59]" style={wdth}>
                  Deliverable · User flows, feature priorities
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal y={40} delay={0.15} className="w-full">
            <div className={`${card} flex min-h-[300px] w-full flex-col items-start gap-[32px] md:flex-row md:items-center md:gap-[56px]`}>
              <div className="w-full min-w-px md:flex-1">
                <StepHead n="04" title="Deliver" timing="Ongoing" desc="Developer handoff, design QA during build, then measure results and iterate." />
              </div>
              <div className="flex w-full shrink-0 flex-col items-start gap-[14px] rounded-[20px] bg-[#f4f1eb] px-[24px] py-[22px] md:w-[280px]">
                {['Developer handoff', 'Design QA during build', 'Metrics & iteration'].map((c) => (
                  <div key={c} className="flex items-center gap-[12px]">
                    <img alt="" className="block size-[10px] shrink-0" src="/assets/508dc.svg" width={10} height={10} />
                    <p className="font-['Archivo:Regular'] text-[15px] font-normal leading-[normal] whitespace-nowrap text-[#0a0a0a]" style={wdth}>
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal y={40} delay={0.2} className="flex w-full shrink-0 xl:w-[480px]">
          <div className="group flex w-full flex-col items-start justify-between gap-8 rounded-[28px] bg-[#0a0a0a] p-[36px]">
            <div className="flex w-full flex-col items-start gap-[12px]">
              <div className="flex w-full items-center justify-between">
                <p className="font-['Instrument_Serif:Italic'] text-[72px] italic leading-[0.9] tracking-[-1.44px] whitespace-nowrap text-white">03</p>
                <Chip dark>2–4 weeks</Chip>
              </div>
              <p className="font-['Geist:Medium'] text-[40px] font-medium leading-[normal] tracking-[-1.2px] whitespace-nowrap text-white">Design</p>
              <p className="w-full font-['Archivo:Regular'] text-[16px] font-normal leading-[1.5] text-[#a8a8ad]" style={wdth}>
                Wireframes to hi-fi, interactive prototypes, and usability testing with real users.
              </p>
            </div>
            <div className="flex w-full items-center justify-center gap-[20px] rounded-[22px] bg-[rgba(255,255,255,0.05)] p-[28px]">
              <div className="relative h-[220px] w-[124px] shrink-0 overflow-clip rounded-[20px] border border-dashed border-[rgba(255,255,255,0.4)] transition-transform duration-500 group-hover:-rotate-3">
                <div className="absolute top-[17px] left-[13px] h-[10px] w-[60px] rounded-[5px] bg-[rgba(255,255,255,0.25)]" />
                <div className="absolute top-[39px] left-[13px] h-[72px] w-[96px] rounded-[12px] bg-[rgba(255,255,255,0.12)]" />
                <div className="absolute top-[123px] left-[13px] h-[8px] w-[80px] rounded-[4px] bg-[rgba(255,255,255,0.25)]" />
                <div className="absolute top-[141px] left-[13px] h-[6px] w-[96px] rounded-[3px] bg-[rgba(255,255,255,0.12)]" />
                <div className="absolute top-[153px] left-[13px] h-[6px] w-[70px] rounded-[3px] bg-[rgba(255,255,255,0.12)]" />
                <div className="absolute top-[175px] left-[13px] h-[30px] w-[96px] rounded-[15px] bg-[rgba(255,255,255,0.2)]" />
              </div>
              <p className="font-['Archivo:Regular'] text-[24px] font-normal leading-[normal] whitespace-nowrap text-white transition-transform duration-500 group-hover:translate-x-1" style={wdth}>
                →
              </p>
              <div className="relative h-[220px] w-[124px] shrink-0 overflow-clip rounded-[20px] bg-white transition-transform duration-500 group-hover:rotate-3">
                <div className="absolute top-0 left-0 h-[10px] w-[124px] bg-white" />
                <div className="absolute top-[18px] left-[14px] h-[10px] w-[60px] rounded-[5px] bg-[rgba(10,10,10,0.9)]" />
                <div className="absolute top-[40px] left-[14px] h-[72px] w-[96px] rounded-[12px] bg-[#21b273]" />
                <div className="absolute top-[124px] left-[14px] h-[8px] w-[80px] rounded-[4px] bg-[rgba(10,10,10,0.8)]" />
                <div className="absolute top-[142px] left-[14px] h-[6px] w-[96px] rounded-[3px] bg-[rgba(10,10,10,0.2)]" />
                <div className="absolute top-[154px] left-[14px] h-[6px] w-[70px] rounded-[3px] bg-[rgba(10,10,10,0.2)]" />
                <div className="absolute top-[176px] left-[14px] h-[30px] w-[96px] rounded-[15px] bg-[#0a0a0a]" />
              </div>
            </div>
            <div className="flex items-start gap-[8px]">
              <Pill dark>Prototype</Pill>
              <Pill dark>Design system</Pill>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
