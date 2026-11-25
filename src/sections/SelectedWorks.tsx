import { m } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { EyebrowPill } from './Experience'
import { Reveal } from '../components/Reveal'

const wdth = { fontVariationSettings: '"wdth" 100' }
const ease = [0.22, 1, 0.36, 1] as const

const works = [
  { title: 'Block Builder', desc: 'A mining platform built to operate', tags: ['Mining', 'Operational'], img: 'work-block-builder.webp', w: 1442, h: 1091 },
  { title: 'Raya Bank', desc: 'A digital bank under the BRI group', tags: ['Bank', 'Fintech'], img: 'work-raya-bank.webp', w: 1568, h: 977 },
  { title: 'Mos AR', desc: 'Centralizing operational monitoring into a single connected platform', tags: ['Mining'], img: 'work-mos-ar.webp', w: 1568, h: 1004 },
]

export default function SelectedWorks() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  // Scroll-spy: highlight the index row of the work closest to the viewport centre.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = (i: number) => refs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <section id="works" className="relative flex w-full max-w-[1440px] scroll-mt-4 flex-col items-start gap-[48px] bg-[#f9fafb] px-5 py-[72px] md:px-10 lg:flex-row lg:gap-[72px] lg:p-[80px]">
      <div className="flex w-full min-w-px flex-col items-start gap-[24px] lg:sticky lg:top-[40px] lg:flex-1">
        <EyebrowPill>Selected works</EyebrowPill>
        <Reveal y={24} delay={0.15} className="w-full">
          <h2 className="font-['Archivo:Medium'] text-[0px] font-medium leading-[0] tracking-[-1.92px] text-[#0a0a0b]" style={wdth}>
            <span className="font-['Geist:Regular'] text-[clamp(36px,4vw,48px)] font-normal leading-none">{`Crafted With Purpose, `}</span>
            <span className="font-['Instrument_Serif:Italic'] text-[clamp(36px,4vw,48px)] italic leading-none">Designed</span>
            <span className="font-['Geist:Regular'] text-[clamp(36px,4vw,48px)] font-normal leading-none">{` To `}</span>
            <span className="font-['Instrument_Serif:Italic'] text-[clamp(36px,4vw,48px)] italic leading-none">Inspire</span>
          </h2>
        </Reveal>
        <Reveal y={20} delay={0.35} className="hidden w-full flex-col items-start pt-[32px] whitespace-nowrap text-[#0a0a0b] lg:flex">
          {works.map((w, i) => (
            <button
              key={w.title}
              type="button"
              onClick={() => go(i)}
              aria-current={active === i}
              className={`flex w-full cursor-pointer items-center gap-[20px] border-b border-solid border-[rgba(10,10,11,0.14)] py-[20px] text-left transition-opacity duration-300 hover:opacity-100 ${i === 0 ? 'border-t' : ''} ${active === i ? 'opacity-100' : 'opacity-38'}`}
            >
              <span className="font-['DM_Mono:Regular'] text-[11px] leading-[16px] tracking-[1.6px] uppercase not-italic">{String(i + 1).padStart(2, '0')}</span>
              <span className={`font-['Geist:Medium'] text-[22px] font-medium leading-[28px] tracking-[-0.44px] transition-transform duration-300 ${active === i ? 'translate-x-1' : ''}`}>{w.title}</span>
            </button>
          ))}
        </Reveal>
      </div>

      <div className="flex w-full flex-col items-start gap-[64px] lg:w-[784px] lg:shrink-0 lg:gap-[96px]">
        {works.map((w, i) => (
          <m.article
            key={w.title}
            ref={(el) => {
              refs.current[i] = el
            }}
            data-index={i}
            className="group flex w-full flex-col items-start gap-[28px]"
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="relative aspect-[784/520] w-full overflow-clip rounded-[10px] border border-solid border-[rgba(255,255,255,0.12)] bg-[#e5e7eb]">
              <m.img
                alt={w.title}
                src={`/assets/${w.img}`}
                width={w.w}
                height={w.h}
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[10px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                initial={{ scale: 1.035 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease }}
              />
              <div className="absolute top-[19px] left-[19px] flex items-start gap-[8px]">
                {w.tags.map((t) => (
                  <div key={t} className="flex items-start rounded-[100px] bg-[rgba(0,0,0,0.38)] px-[16px] py-[9px] backdrop-blur-[6px]">
                    <p className="font-['Archivo:Medium'] text-[15px] font-medium leading-[22px] whitespace-nowrap text-white" style={wdth}>
                      {t}
                    </p>
                  </div>
                ))}
              </div>
              <div className="absolute top-[19px] right-[19px] hidden items-start rounded-[100px] bg-[rgba(0,0,0,0.38)] px-[16px] py-[9px] backdrop-blur-[6px] sm:flex">
                <p className="font-['DM_Mono:Regular'] text-[13px] leading-[20px] whitespace-nowrap text-white not-italic">{`${String(i + 1).padStart(2, '0')} / 03`}</p>
              </div>
            </div>
            <div className="flex w-full items-end justify-between gap-4">
              <div className="flex min-w-px flex-1 flex-col items-start gap-[8px]">
                <h3 className="font-['Geist:Medium'] text-[clamp(26px,2.4vw,32px)] font-medium leading-[36px] tracking-[-0.96px] text-[#0a0a0b]">{w.title}</h3>
                <p className="w-full font-['Archivo:Regular'] text-[16px] font-normal leading-[28px] text-[#737880]" style={wdth}>
                  {w.desc}
                </p>
              </div>
              <a
                href="#works"
                onClick={(e) => e.preventDefault()}
                className="group/btn flex shrink-0 items-center gap-[8px] rounded-[100px] bg-[#0a0a0b] py-[13px] pr-[18px] pl-[22px] transition-colors hover:bg-[#2a2a2a]"
              >
                <span className="font-['Archivo:Medium'] text-[15px] font-medium leading-[22px] whitespace-nowrap text-white" style={wdth}>
                  View
                </span>
                <span className="relative size-[9px] shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  <span className="absolute inset-[-8.89%]">
                    <img alt="" className="block size-full max-w-none" src="/assets/d534c.svg" />
                  </span>
                </span>
              </a>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  )
}
