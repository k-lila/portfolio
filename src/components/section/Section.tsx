import { ReactNode } from 'react'
import Plane from '../plane/Plane'

type SectionProps = {
  name: string
  render: boolean
  children: ReactNode
  trigger: string
}

const Section = (props: SectionProps) => {
  if (props.render) {
    return <Plane trigger={props.trigger}>{props.children}</Plane>
  } else {
    return null
  }
}

export default Section
