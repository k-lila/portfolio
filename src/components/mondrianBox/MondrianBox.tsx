import random from 'random'
import Box, { BoxProps } from '../box/box'
import { MGrid } from './styles'
import { ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type MondrianGridProps = {
  children: ReactNode
  $horizontal?: boolean
  $gcol?: string
  $grow?: string
}

type MondrianSimpleProps = {
  childrenA?: ReactNode
  childrenB?: ReactNode
  $horizontal?: boolean
}

type MondrianCompoundProps = {
  $horizontal?: boolean
  $first?: boolean
}

const randNum = (num1: number, num2: number) => {
  return random.int(num1, num2)
}

const randBool = () => {
  return randNum(0, 1) === 1
}

const randGrid = (device: string) => {
  let gridA = 0
  if (device == 'cel') {
    gridA = randNum(40, 60)
  } else {
    gridA = randNum(30, 70)
  }
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
      const durat = randNum(10000, 20000)
      setduration(durat)
    }, duration)

    return () => {
      clearInterval(timer)
    }
  })
  return <Box $bgcolor={background} {...props}></Box>
}

export const MondrianSimple = ({ ...props }: MondrianSimpleProps) => {
  const device = useSelector((state: RootReducer) => state.device.device)
  const [gridSimple, setGridSimple] = useState(randGrid(device))
  const [duration, setduration] = useState(randNum(5000, 10000))
  useEffect(() => {
    const timer = setInterval(() => {
      setGridSimple(randGrid(device))
    }, duration)
    return () => {
      clearInterval(timer)
    }
  })
  useEffect(() => {
    const timer = setInterval(() => {
      const durat = randNum(15000, 30000)
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
      {props.childrenA ? props.childrenA : <MondrianColor />}
      {props.childrenB ? props.childrenB : <MondrianColor />}
    </MGrid>
  )
}

export const MondrianCompound = ({ ...props }: MondrianCompoundProps) => {
  return (
    <MondrianSimple
      $horizontal={props.$horizontal}
      childrenA={
        props.$first ? (
          <MondrianSimple $horizontal={!props.$horizontal} />
        ) : (
          <MondrianColor />
        )
      }
      childrenB={
        !props.$first ? (
          <MondrianSimple $horizontal={!props.$horizontal} />
        ) : (
          <MondrianColor />
        )
      }
    />
  )
}

export const MondrianBlock = () => {
  const horizontal = randBool()
  const compound = randNum(0, 3)
  const first = randBool()
  return (
    <MondrianSimple
      $horizontal={horizontal}
      childrenA={
        <MondrianSimple
          childrenA={
            compound == 0 ? (
              <MondrianCompound $first={first} $horizontal={horizontal} />
            ) : null
          }
          childrenB={
            compound == 1 ? (
              <MondrianCompound $first={first} $horizontal={horizontal} />
            ) : null
          }
          $horizontal={!horizontal}
        />
      }
      childrenB={
        <MondrianSimple
          childrenA={
            compound == 2 ? (
              <MondrianCompound $first={first} $horizontal={horizontal} />
            ) : null
          }
          childrenB={
            compound == 3 ? (
              <MondrianCompound $first={first} $horizontal={horizontal} />
            ) : null
          }
          $horizontal={!horizontal}
        />
      }
    />
  )
}
