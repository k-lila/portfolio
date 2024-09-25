import React, { useState, useEffect, ReactNode } from 'react'
import { MondrianBlock } from '../mondrianBlock'
import { MGrid } from './styles'
import { randNum } from '../../utils/randgens'

const randNumGrid = (type: number) => {
  switch (type) {
    case 3:
      return `${100 - randNum(70, 72)}% 1fr ${100 - randNum(70, 72)}%`
    case 2:
      return `${100 - randNum(30, 70)}% 1fr`
    default:
      return '1fr'
  }
}

export type MondrianGridProps = {
  children?: ReactNode
  $horizontal?: boolean
  $gridtemplate?: string
}

export const MondrianGrid = ({ ...props }: MondrianGridProps) => {
  const childCount = React.Children.count(props.children)
  const [randGrid, setRandGrid] = useState(randNumGrid(childCount))
  const [duration, setduration] = useState(randNum(2500, 5000))

  useEffect(() => {
    const timer1 = setInterval(() => {
      setRandGrid(randNumGrid(childCount))
    }, duration)
    return () => {
      clearInterval(timer1)
    }
  })

  useEffect(() => {
    const timer2 = setInterval(() => {
      const durat = randNum(5000, 12000)
      setduration(durat)
    }, duration)

    return () => {
      clearInterval(timer2)
    }
  }, [duration])

  return (
    <MGrid $gridtemplate={randGrid} $horizontal={props.$horizontal}>
      {props.children ? props.children : <MondrianBlock />}
    </MGrid>
  )
}
