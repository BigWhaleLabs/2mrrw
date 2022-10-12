import Root from 'components/Root'
import classnames, {
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'

const title = classnames(
  textColor('text-blue-500'),
  textAlign('text-center'),
  fontSize('text-5xl', 'md:text-9xl'),
  fontFamily('font-display'),
  fontWeight('font-black')
)
const subtitle = classnames(
  textColor('text-blue-300'),
  textAlign('text-center'),
  fontSize('md:text-2xl'),
  fontFamily('font-sans'),
  fontWeight('font-bold')
)
export default function () {
  return (
    <Root>
      <h1 className={title}>Tomorrow</h1>
      <p className={subtitle}>brings us closer together.</p>
    </Root>
  )
}
