import { ShaderFill } from '@figma/expressive-components'
import {
  setup as setupCodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310,
  render as renderCodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310,
  manifest as manifestCodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310,
} from '../lib/custom-effects/CodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310'

// Split into its own chunk so the WebGPU runtime never blocks first paint.
export default function ProfileShader() {
  return (
    <ShaderFill
      className="absolute inset-0 size-full"
      shader={{
        setup: setupCodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310,
        render: renderCodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310,
        params: {
          bands: 1.2000000476837158,
          definition: 6,
          color2: { r: 0.7211538553237915, g: 0.8419870734214783, b: 1, a: 1 },
          frequency: 1.3700000047683716,
          speed: 0.550000011920929,
          exposure: 1.409999966621399,
          saturation: 1.8899999856948853,
          contrastAmt: 2.5199999809265137,
          amplitude: 0.6200000047683716,
          color1: { r: 0.125490203499794, g: 0.125490203499794, b: 0.125490203499794, a: 1 },
          color3: { r: 0.8455528616905212, g: 0.8737379908561707, b: 0.9663461446762085, a: 1 },
          grain: 0.11999999731779099,
          color4: { r: 0.8727348446846008, g: 0.9019824266433716, b: 0.9759615659713745, a: 1 },
          featureScale: 0.699999988079071,
          seed: 542,
        },
        manifest: manifestCodeComponentId_c421a4d62d3ef0ba266d0523fef883b785f6ebbc_6310,
      }}
    />
  )
}
