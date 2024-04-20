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
  const [duration, setduration] = useState(random.int(500, 1500))
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

export const MondrianSimple = ({ ...props }: MondrianSimpleProps) => {
  return (
    <MGrid
      $horizontal={props.$horizontal}
      $gcol={!props.$horizontal ? props.$grid : '1fr'}
      $grow={props.$horizontal ? props.$grid : '1fr'}
    >
      <MondrianColor $bbot={props.$horizontal} $bright={!props.$horizontal} />
      <MondrianColor />
    </MGrid>
  )
}

export const MondrianCompound = ({ ...props }: MondrianCompoundProps) => {
  return (
    <MGrid
      $horizontal={props.$horizontal}
      $gcol={props.$horizontal ? '1fr' : props.$gridA}
      $grow={props.$horizontal ? props.$gridA : '1fr'}
    >
      {props.$first ? (
        <MondrianSimple $grid={props.$gridB} $horizontal={!props.$horizontal} />
      ) : (
        <MondrianColor $bbot={props.$horizontal} $bright={!props.$horizontal} />
      )}
      {props.$first ? (
        <MondrianColor $bleft={!props.$horizontal} $btop={props.$horizontal} />
      ) : (
        <MondrianSimple $grid={props.$gridB} $horizontal={!props.$horizontal} />
      )}
    </MGrid>
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
