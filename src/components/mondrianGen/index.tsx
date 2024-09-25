import React, { useRef, useEffect, useState } from 'react'
import { MGen } from './styles'
import { MondrianCompose } from '../mondrianCompose'

export type MondrianGenProps = {
  $gridcolumns?: string
  $gridrows?: string
}

export const MondrianGen = ({ ...props }: MondrianGenProps) => {
  const [horizontal, setHorizontal] = useState(Boolean)
  const [divisions, setDivisions] = useState(Number)
  const [steps, setSteps] = useState(Number)
  const elementRef = useRef<HTMLDivElement | null>(null)

  const setup = () => {
    if (elementRef.current) {
      const clientWidth = elementRef.current.clientWidth
      const clientHeight = elementRef.current.clientHeight
      setHorizontal(clientWidth / clientHeight < 1)
      setDivisions(clientWidth >= 1000 ? 3 : clientWidth < 100 ? 1 : 2)
      setSteps(
        clientWidth >= 300 && clientHeight >= 300
          ? 3
          : clientWidth < 250 || clientHeight < 100
          ? 1
          : 2
      )
    }
  }
  useEffect(() => {
    setup()
  }, [])

  return (
    <MGen
      ref={elementRef}
      $gridcolumns={props.$gridcolumns}
      $gridrows={props.$gridrows}
    >
      <MondrianCompose
        $horizontal={horizontal}
        $divisions={divisions}
        $steps={steps}
      />
    </MGen>
  )
}
