import random from 'random'
import { useEffect, useState } from 'react'
import { MBlock } from './styles'
import { randNum } from '../../utils/randgens'

const randColor = () => {
  const palette = ['#314290', '#4A71C0', '#F1F2ED', '#F0D32D', '#AB3A2C']
  return palette[random.int(0, palette.length - 1)]
}

export const MondrianBlock = () => {
  const [background, setbackground] = useState(randColor())
  const [opacity, setOpacity] = useState('0')
  const [duration, setduration] = useState(randNum(200, 2000))
  useEffect(() => {
    const timer = setInterval(() => {
      setbackground(randColor())
      setOpacity(`0.${randNum(40, 90)}`)
    }, duration)
    return () => {
      clearInterval(timer)
    }
  })
  useEffect(() => {
    const timer = setInterval(() => {
      setduration(randNum(6000, 12000))
    }, duration)

    return () => {
      clearInterval(timer)
    }
  })
  return <MBlock $bgcolor={background} $opacity={opacity} />
}
