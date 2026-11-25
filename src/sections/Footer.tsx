import { Reveal } from '../components/Reveal'
import { DRIBBBLE_URL, WHATSAPP_URL } from '../lib/links'

const wdth = { fontVariationSettings: '"wdth" 100' }

export default function Footer() {
  return (
    <footer className="relative w-full max-w-[1440px] bg-white p-[10px]">
      <div className="relative isolate flex w-full flex-col items-start gap-[56px] overflow-clip rounded-[20px] bg-[#0a0a0a] px-6 py-12 md:p-12 lg:gap-[80px] lg:p-[80px]">
        {/* Decorative halftone wave filling the open right-hand area */}
        <img
          aria-hidden
          alt=""
          src="/assets/footer-halftone.webp"
          width={2000}
          height={1120}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute right-0 bottom-0 -z-10 w-full opacity-[0.14] sm:top-[8%] sm:bottom-auto sm:w-[min(1000px,90%)] sm:opacity-[0.22] select-none [mask-image:linear-gradient(to_right,transparent,black_35%)]"
        />
        <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-[4px] rounded-[5px] bg-white px-[8px] py-[3px] shadow-[0px_4px_4px_0px_rgba(23,23,23,0.04)]">
            <div className="relative size-[16px] overflow-clip opacity-30">
              <div className="absolute top-[-0.41px] left-[3px] h-[16px] w-[11px]">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src="/assets/e6563.svg" />
              </div>
            </div>
            <div className="flex h-[18px] w-[76.988px] flex-col justify-center bg-gradient-to-t from-[#1c1917] to-[#605b58] bg-clip-text font-['Geist:Medium'] text-[14px] font-medium leading-[0] tracking-[-0.2px] text-[transparent]">
              <p className="leading-[16px]">Integrations</p>
            </div>
          </div>
          <a href="tel:+6287811046486" className="group flex flex-wrap items-center gap-[16px] leading-[normal] whitespace-nowrap">
            <span className="font-['SF_Pro:Regular'] text-[16px] font-normal text-[#9ea1a6]" style={wdth}>
              Contact me
            </span>
            <span className="font-['SF_Pro:Light'] text-[24px] font-[274.31500244140625] tracking-[-0.24px] text-white underline-offset-4 group-hover:underline" style={wdth}>
              +62 87811046486
            </span>
          </a>
        </div>
        <Reveal y={40} duration={0.9} className="w-full">
          <p className="w-full font-['SF_Pro:Light'] text-[clamp(44px,7.2vw,104px)] font-[274.31500244140625] leading-[0] tracking-[-0.03em] text-white" style={wdth}>
            <span className="leading-none">{`I love working alongside `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-none">ambitious brands</span>
            <span className="leading-none">{` and people`}</span>
          </p>
        </Reveal>
        <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-[1000px] border border-solid border-white bg-white px-[32px] py-[16px] backdrop-blur-[4px] transition-colors hover:bg-transparent [&:hover_p]:text-white"
          >
            <span className="flex items-start px-[10px]">
              <p className="font-['SF_Pro:Regular'] text-[16px] font-normal leading-[1.4] tracking-[-1px] whitespace-nowrap text-[#0a0a0a] transition-colors" style={wdth}>
                Book a Call
              </p>
            </span>
          </a>
          <a href={DRIBBBLE_URL} target="_blank" rel="noreferrer" className="group flex items-center gap-[16px] leading-[normal] whitespace-nowrap">
            <span className="font-['SF_Pro:Regular'] text-[16px] font-normal text-[#9ea1a6]" style={wdth}>
              Follow me
            </span>
            <span className="font-['SF_Pro:Light'] text-[40px] font-[274.31500244140625] tracking-[-0.4px] text-white transition-opacity group-hover:opacity-70" style={wdth}>
              Dribbble ↗
            </span>
          </a>
        </div>
        <div className="h-px w-full bg-[rgba(255,255,255,0.2)]" />
        <p className="font-['SF_Pro:Regular'] text-[16px] font-normal leading-[normal] text-[#9ea1a6]" style={wdth}>
          2024 Made by andrey - All Right Reserved
        </p>
      </div>
    </footer>
  )
}
