import { lazy, Suspense } from 'react'
import { m } from 'motion/react'
import { WHATSAPP_URL } from '../lib/links'

const ProfileShader = lazy(() => import('../components/ProfileShader'))

const A = '/assets'
const wdth = { fontVariationSettings: '"wdth" 100' }

const lanyardTops = [
  -15.07, -18.54, -22.01, -25.48, -28.95, -32.42, -35.89, -39.36, -42.84, -46.31, -49.78, -53.25, -56.72, -60.19, -63.66, -67.13, -70.6,
  -74.07, -77.54, -81.01, -84.48, -87.95,
]

// Logos are trimmed to their visible bounds (sizes match the design render) so a single
// gap value produces even optical spacing.
const logos = [
  { img: 'logo-261.webp', w: 60.7, h: 15 },
  { img: 'logo-264.webp', w: 45, h: 11.7 },
  { img: 'logo-262.webp', w: 99.7, h: 19.7 },
  { img: 'logo-266.webp', w: 69.7, h: 20 },
  { img: 'logo-267.webp', w: 68.7, h: 16.3 },
  { img: 'logo-268.webp', w: 71.7, h: 13.7 },
  { img: 'logo-269.webp', w: 70, h: 19.3 },
  { img: 'logo-268.webp', w: 71.7, h: 13.7 },
]

const ease = [0.22, 1, 0.36, 1] as const

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-col items-start overflow-clip bg-white">
      {/* Column guides */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden h-[1007px] overflow-clip lg:block">
        {[80, 240, 400, 560, 720, 880, 1040, 1200, 1360].map((l) => (
          <div
            key={l}
            className="absolute top-0 h-[1007px] w-px bg-gradient-to-b from-[rgba(10,10,10,0.07)] to-[rgba(255,255,255,0.07)]"
            style={{ left: `${(l / 1440) * 100}%` }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="relative flex w-full items-center justify-between gap-4 px-5 py-6 md:px-10 lg:px-[80px] lg:py-[32px]">
        <p className="font-['Geist:Regular'] text-[24px] font-normal leading-[0] tracking-[-0.6px] whitespace-nowrap text-[#0a0a0a]">
          <span className="leading-[normal]">Port</span>
          <span className="font-['Instrument_Serif:Italic'] italic leading-[normal]">Folio.</span>
        </p>
        <div className="hidden items-center gap-[8px] sm:flex">
          <span className="relative size-[8px]">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#21b273] opacity-50" />
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={`${A}/1da2b.svg`} width={8} height={8} />
          </span>
          <p className="font-['Archivo:Regular'] text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#615e59]" style={wdth}>
            Available for new projects
          </p>
        </div>
        <button type="button" onClick={() => scrollToId('works')} className="group flex cursor-pointer items-center gap-[12px]">
          <p className="font-['Archivo:Medium'] text-left text-[14px] font-medium leading-[normal] whitespace-nowrap text-[#0a0a0a]" style={wdth}>
            Works
          </p>
          <span className="flex size-[44px] items-center justify-center rounded-[1000px] border border-solid border-[#0a0a0a] transition-colors duration-300 group-hover:bg-[#0a0a0a]">
            <span
              className="font-['Archivo:Medium'] text-[16px] font-medium leading-[normal] text-[#0a0a0a] transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-white"
              style={wdth}
            >
              ↓
            </span>
          </span>
        </button>
      </nav>

      {/* Main */}
      <div className="relative flex w-full flex-col items-start gap-[40px] px-5 pt-[24px] pb-[56px] md:px-10 lg:flex-row lg:px-[80px] lg:pt-[40px] lg:pb-[72px]">
        <div className="flex min-w-px flex-1 flex-col items-start gap-[32px]">
          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-['Archivo:Medium'] text-[14px] font-medium leading-[normal] tracking-[0.28px] whitespace-pre text-[#615e59]"
            style={wdth}
          >{`(01) —  Product Designer`}</m.p>
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="w-full font-['Geist:Regular'] text-[clamp(48px,6.4vw,92px)] font-normal leading-[0] tracking-[-0.05em] text-[#0a0a0a]"
          >
            <span className="leading-[0.98]">{`Harmonize Things Through `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-[0.98]">Human Design</span>
            <span className="leading-[0.98]">{` Interaction`}</span>
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="flex w-full flex-col items-start gap-[24px] sm:flex-row sm:items-end sm:gap-[48px]"
          >
            <p className="w-full max-w-[300px] font-['Archivo:Regular'] text-[18px] font-normal leading-[1.5] text-[#615e59]" style={wdth}>
              A decade of crafting digital interfaces and leading product teams.
            </p>
            <div className="flex shrink-0 flex-wrap items-start gap-[12px]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-[8px] rounded-[1000px] bg-[#0a0a0a] px-[32px] py-[17px] font-['Archivo:Medium'] text-[15px] font-medium leading-[normal] whitespace-nowrap text-white transition-colors hover:bg-[#2a2a2a]"
              >
                <span style={wdth}>Book a Call</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" style={wdth}>
                  →
                </span>
              </a>
              <button
                type="button"
                onClick={() => scrollToId('gallery')}
                className="flex cursor-pointer items-center justify-center rounded-[1000px] border border-solid border-[#0a0a0a] px-[32px] py-[17px] transition-colors hover:bg-[#0a0a0a] [&:hover>span]:text-white"
              >
                <span className="font-['Archivo:Medium'] text-[15px] font-medium leading-[normal] whitespace-nowrap text-[#0a0a0a] transition-colors" style={wdth}>
                  View Work
                </span>
              </button>
            </div>
          </m.div>
        </div>

        {/* Card stage */}
        <m.div
          initial={{ opacity: 0, y: 32, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto h-[530px] w-full max-[419px]:[zoom:0.86] sm:h-[557px] max-w-[468px] shrink-0 lg:mx-0 lg:w-[468px]"
        >
          <div className="absolute top-[30px] right-1/2 h-[481px] w-[364px] translate-x-1/2 sm:right-0 sm:translate-x-0">
            <div className="absolute top-[calc(50%-0.28px)] left-[calc(50%-0.11px)] h-[481.08px] w-[363.521px] -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-[30.366px] bg-black shadow-[8.242px_10.845px_19.087px_0px_rgba(0,0,0,0.25)]">
              {/* Dotted animated shader */}
              <div
                className="absolute top-0 left-[-21.26px] h-[507.541px] w-[406.033px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-33.59px_0px] mask-size-[473.216px_507.542px]"
                style={{ maskImage: `url("${A}/shader-mask.webp")` }}
              >
                <Suspense fallback={null}>
                  <ProfileShader />
                </Suspense>
              </div>
              <div className="absolute top-[calc(50%+69.51px)] left-1/2 h-[666.093px] w-[443.34px] -translate-x-1/2 -translate-y-1/2">
                <img
                  alt="Lalu Andrey"
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={`${A}/profile.webp`}
                  width={888}
                  height={1334}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <p className="absolute top-[85.71px] left-[calc(50%-0.3px)] -translate-x-1/2 font-['Geist:Medium'] text-center text-[28.587px] font-medium leading-[normal] tracking-[-1.7152px] whitespace-nowrap text-white mix-blend-lighten [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Lalu Andrey
              </p>
              <p className="absolute top-[114.3px] left-[calc(50%+0.11px)] -translate-x-1/2 font-['Geist:Medium'] text-center text-[12.197px] font-medium leading-[normal] tracking-[-0.3659px] whitespace-nowrap text-[#b1b1b1] mix-blend-lighten [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Product Designer
              </p>
              <div className="absolute top-[16.48px] left-[calc(50%+0.19px)] h-[19.546px] w-[91.477px] -translate-x-1/2">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={`${A}/51a2f.svg`} />
              </div>
              <div className="absolute top-[16.11px] left-1/2 h-[19.546px] w-[91.477px] -translate-x-1/2">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={`${A}/0e2f2.svg`} />
              </div>
            </div>
            {lanyardTops.map((t) => (
              <div
                key={t}
                aria-hidden
                className="absolute left-[177.55px] flex h-[1.735px] w-[7.375px] items-center justify-center mix-blend-overlay"
                style={{ top: `${t}px` }}
              >
                <div className="flex-none rotate-[13.24deg] skew-x-[-3.58deg]">
                  <div className="relative h-0 w-[7.576px]">
                    <div className="absolute inset-[-0.43px_0_0_0]">
                      <img alt="" className="block size-full max-w-none" src={`${A}/35ea5.svg`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[64px] left-[calc(50%-168px)] flex flex-col items-start gap-[2px] overflow-clip rounded-[10px] bg-[rgba(255,255,255,0.3)] pt-[14px] pr-[24px] pb-[16px] pl-[20px] leading-[normal] whitespace-nowrap sm:left-[118px]">
            <p className="font-['Geist:Medium'] text-[36px] font-medium tracking-[-1.44px] text-white">4+</p>
            <p className="font-['Archivo:Regular'] text-[13px] font-normal text-[#d2d6dc]" style={wdth}>
              Years crafting interfaces
            </p>
          </div>
        </m.div>
      </div>

      {/* Logo strip */}
      <div className="relative flex w-full flex-col items-center gap-[20px] border-t border-solid border-[rgba(10,10,10,0.15)] px-5 pt-[32px] pb-[40px] md:px-10 lg:px-[80px]">
        <p className="font-['Archivo:Regular'] text-[14px] font-normal leading-[18px] whitespace-nowrap text-[#6b6b6b]" style={wdth}>
          Helping 2000+ marketing teams grow
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-[32px] gap-y-[20px] sm:gap-x-[48px]">
          <div className="h-[18.4px] w-[41.7px] shrink-0 overflow-clip opacity-70 transition-opacity hover:opacity-100">
            <div className="relative -mt-[3.24px] -ml-[3.63px] h-[24.925px] w-[49.02px] overflow-clip">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={`${A}/72f46.svg`} />
              <div className="absolute inset-[57.7%_8.75%_13%_40.83%]">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={`${A}/c992c.svg`} />
              </div>
              <div className="absolute inset-[13%_7.41%_43.81%_7.4%]">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={`${A}/55c6d.svg`} />
              </div>
            </div>
          </div>
          {logos.map((l, i) => (
            <img
              key={i}
              alt=""
              loading="lazy"
              decoding="async"
              src={`${A}/${l.img}`}
              style={{ width: l.w, height: l.h }}
              className="pointer-events-none shrink-0 opacity-70 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
