import { m } from 'motion/react'

// Each tile is a pre-rendered 2x WebP of the corresponding app-screen mockup in the design.
type Tile = readonly [src: string, width: number, alt: string]
type Row = { top: number; start: number; dir: 'left' | 'right'; tiles: readonly Tile[] }

// `start` is the row's left offset in the 1440px design; rows alternate direction.
const rows: Row[] = [
  { top: 0, start: -250, dir: 'left', tiles: [['r1-1', 385, 'Raya transfer screen'], ['r1-2', 401, 'Raya home screen'], ['r1-3', 567, 'Skill House dashboard'], ['r1-4', 574, 'Structural design tool']] },
  { top: 423, start: -54, dir: 'right', tiles: [['r2-1', 385, 'Monitor keuangan screen'], ['r2-2', 567, 'Mentify dashboard'], ['r2-3', 602, 'KPI dashboard']] },
  { top: 846, start: -197, dir: 'left', tiles: [['r3-1', 401, 'Raya transfer screen'], ['r3-2', 567, 'Recruitment overview dashboard'], ['r3-3', 401, 'Crox landing page'], ['r3-4', 401, 'Raya monitor keuangan screen']] },
  { top: 1269, start: -250, dir: 'right', tiles: [['r4-1', 567, 'Beam design tool'], ['r4-2', 401, 'Transfer confirmation screen'], ['r4-3', 401, 'Bills app screen'], ['r4-4', 567, 'Skill House dashboard']] },
]

const GAP = 10
const SPEED = 22 // design px per second

export default function Collage() {
  return (
    <section
      id="gallery"
      aria-label="Product screens"
      className="relative w-full max-w-[1440px] scroll-mt-4 overflow-clip bg-white py-[40px] [--u:0.6px] sm:[--u:0.72px] lg:[--u:1px] [--fade:32px] sm:[--fade:calc(var(--u)*220)]"
    >
      <div className="relative w-full" style={{ height: 'calc(var(--u) * 1682)' }}>
        {rows.map((row, ri) => {
          const copyWidth = row.tiles.reduce((sum, [, w]) => sum + w + GAP, 0)
          return (
            <m.div
              key={ri}
              className="marquee-row absolute"
              style={{ top: `calc(var(--u) * ${row.top})`, left: `calc(var(--u) * ${row.start})` }}
              initial={{ opacity: 0, x: row.dir === 'left' ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Two identical copies; translating by -50% loops seamlessly. */}
              <div className="marquee-track flex w-max" data-dir={row.dir} style={{ animationDuration: `${copyWidth / SPEED}s` }}>
                {[0, 1].map((copy) =>
                  row.tiles.map(([src, w, alt]) => (
                    <div
                      key={`${copy}-${src}`}
                      aria-hidden={copy === 1 || undefined}
                      className="group relative shrink-0 overflow-clip rounded-[10px] bg-[#eaeaea]"
                      style={{ width: `calc(var(--u) * ${w})`, height: 'calc(var(--u) * 413)', marginRight: `calc(var(--u) * ${GAP})` }}
                    >
                      <img
                        src={`/assets/collage/${src}.webp`}
                        alt={copy === 1 ? '' : alt}
                        width={w * 2}
                        height={826}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  )),
                )}
              </div>
            </m.div>
          )
        })}
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-white to-[rgba(255,255,255,0)]" style={{ width: 'var(--fade)' }} />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-r from-[rgba(255,255,255,0)] to-white" style={{ width: 'var(--fade)' }} />
    </section>
  )
}
