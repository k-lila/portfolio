import random from 'random'
import Box, { BoxProps } from '../box/box'
import { MGrid } from './styles'
import { ReactNode, useEffect, useState } from 'react'

export type MondrianProps = {
  children?: ReactNode
  $horizontal?: boolean
  $gcol?: string
  $grow?: string
}

type MondrianSimpleProps = {
  children?: ReactNode
  $first?: boolean
  $horizontal?: boolean
  $grid?: string
}

type MondrianCompoundProps = {
  $horizontal?: boolean
  $first?: boolean
  $gridA?: string
  $gridB?: string
}

type MondrianBlockProps = {
  childrenA?: ReactNode
  childrenB?: ReactNode
  $horizontal?: boolean
  $grid?: string
}

export const MondrianColor = ({ ...props }: BoxProps) => {
  const [background, setbackground] = useState('white')
  const [duration, setduration] = useState(random.int(500, 2000))
  const palette = [
    '#314290',
    '#4A71C0',
    'white',
    '#F1F2ED',
    'wheat',
    '#F0D32D',
    '#AB3A2C',
    'black'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setbackground(palette[random.int(0, palette.length - 1)])
    }, duration)
    return () => {
      clearInterval(timer)
    }
  })
  useEffect(() => {
    const timer = setInterval(() => {
      const durat = random.int(5000, 20000)
      setduration(durat)
    }, duration)

    return () => {
      clearInterval(timer)
    }
  })
  return <Box $bgcolor={background} {...props}></Box>
}

const MondrianGrid = ({ children, ...props }: MondrianProps) => {
  return <MGrid {...props}>{children}</MGrid>
}

export const MondrianSimple = ({ children, ...props }: MondrianSimpleProps) => {
  if (props.$horizontal) {
    return (
      <MondrianGrid $horizontal $grow={props.$grid}>
        <MondrianColor $bbot>{props.$first ? children : null}</MondrianColor>
        <MondrianColor>{!props.$first ? children : null}</MondrianColor>
      </MondrianGrid>
    )
  }

  return (
    <MondrianGrid $gcol={props.$grid}>
      <MondrianColor $bright>{props.$first ? children : null}</MondrianColor>
      <MondrianColor>{!props.$first ? children : null}</MondrianColor>
    </MondrianGrid>
  )
}

export const MondrianCompound = ({ ...props }: MondrianCompoundProps) => {
  return (
    <MondrianSimple
      $first={props.$first}
      $horizontal={props.$horizontal}
      $grid={props.$gridA}
    >
      <MondrianSimple $horizontal={!props.$horizontal} $grid={props.$gridB} />
    </MondrianSimple>
  )
}

//  ============================

export const MondrianBlock = ({ ...props }: MondrianBlockProps) => {
  return (
    <MondrianGrid
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
    </MondrianGrid>
  )
}
