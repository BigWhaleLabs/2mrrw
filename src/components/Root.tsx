import {
  alignItems,
  classnames,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  padding('pb-10', 'py-4'),
  height('h-screen'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  flexDirection('flex-col'),
  gap('gap-4', 'md:gap-8')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
