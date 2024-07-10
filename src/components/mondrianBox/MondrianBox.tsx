import random from 'random'
import Box, { BoxProps } from '../box/box'
import { MGrid } from './styles'
import { ReactNode, useEffect, useState } from 'react'

export type MondrianGridProps = {
  children: ReactNode
  $horizontal?: boolean
  $gcol?: string
  $grow?: string
}

type MondrianSimpleProps = {
  children?: ReactNode
  $first?: boolean
  $horizontal?: boolean
}

type MondrianCompoundProps = {
  $horizontal?: boolean
  $first?: boolean
}

type MondrianBlockProps = {
  childrenA?: ReactNode
  childrenB?: ReactNode
  $horizontal?: boolean
  $grid?: string
}

const randNum = (num1: number, num2: number) => {
  return random.int(num1, num2)
}

const randGrid = () => {
  const gridA = randNum(20, 80)
  const gridB = 100 - gridA
  return `${gridA}% ${gridB}%`
}

const randColor = () => {
  const palette = [
    '#314290',
    '#4A71C0',
    'white',
    '#F1F2ED',
    // 'wheat',
    '#F0D32D',
    '#AB3A2C',
    'black'
  ]
  return palette[random.int(0, palette.length - 1)]
}

export const MondrianColor = ({ ...props }: BoxProps) => {
  const [background, setbackground] = useState('white')
  const [duration, setduration] = useState(randNum(500, 1500))
  useEffect(() => {
    const timer = setInterval(() => {
      setbackground(randColor())
    }, duration)
    return () => {
      clearInterval(timer)
    }
  })
  useEffect(() => {
    const timer = setInterval(() => {
      const durat = randNum(5000, 20000)
      setduration(durat)
    }, duration)

    return () => {
      clearInterval(timer)
    }
  })
  return <Box $bgcolor={background} {...props}></Box>
}

export const MondrianSimple = ({ ...props }: MondrianSimpleProps) => {
  const [gridSimple, setGridSimple] = useState(randGrid())
  const [duration, setduration] = useState(randNum(2000, 10000))
  useEffect(() => {
    const timer = setInterval(() => {
      setGridSimple(randGrid())
    }, duration)
    return () => {
      clearInterval(timer)
    }
  })
  useEffect(() => {
    const timer = setInterval(() => {
      const durat = randNum(5000, 20000)
      setduration(durat)
    }, duration)

    return () => {
      clearInterval(timer)
    }
  })
  return (
    <MGrid
      $horizontal={props.$horizontal}
      $gcol={!props.$horizontal ? gridSimple : '1fr'}
      $grow={props.$horizontal ? gridSimple : '1fr'}
    >
      {props.$first ? props.children : <MondrianColor />}
      {!props.$first && props.children ? props.children : <MondrianColor />}
    </MGrid>
  )
}

export const MondrianCompound = ({ ...props }: MondrianCompoundProps) => {
  return (
    <MondrianSimple $horizontal={props.$horizontal} $first={props.$first}>
      <MondrianSimple $horizontal={!props.$horizontal} />
    </MondrianSimple>
  )
}

export const MondrianBlock = ({ ...props }: MondrianBlockProps) => {
  return (
    <MGrid
      $horizontal={props.$horizontal}
      $gcol={!props.$horizontal ? props.$grid : '1fr'}
      $grow={props.$horizontal ? props.$grid : '1fr'}
    >
      {props.childrenA ? (
        <Box $bbot={props.$horizontal} $bright={!props.$horizontal}>
          {props.childrenA}
        </Box>
      ) : (
        <MondrianColor $bbot={props.$horizontal} $bright={!props.$horizontal} />
      )}
      {props.childrenB ? <Box>{props.childrenB}</Box> : <MondrianColor />}
    </MGrid>
  )
}
