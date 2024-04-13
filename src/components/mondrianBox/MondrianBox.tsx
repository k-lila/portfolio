import Box from '../box/box'
import MGrid from './styles'
import { ReactNode } from 'react'

export type MondrianProps = {
  children?: ReactNode
  $horizontal?: boolean
  $gcol?: string
  $grow?: string
}

const MondrianGrid = ({ children, ...props }: MondrianProps) => {
  return <MGrid {...props}>{children}</MGrid>
}

export const MondrianBoxA = () => {
  return (
    <MondrianGrid $gcol="40% 60%">
      <Box $bright>
        <MondrianGrid $horizontal $grow="30%">
          <Box $bbot />
        </MondrianGrid>
      </Box>
      <Box>
        <MondrianGrid $grow="75% 25%" $horizontal>
          <Box $bbot>
            <MondrianGrid $gcol="70%">
              <Box $bright />
            </MondrianGrid>
          </Box>
          <Box />
        </MondrianGrid>
      </Box>
    </MondrianGrid>
  )
}

export const MondrianBoxB = () => {
  return (
    <MondrianGrid $gcol="80% 20%">
      <Box $bright></Box>
      <Box>
        <MondrianGrid $horizontal $grow="35%">
          <Box $bbot />
          <Box />
        </MondrianGrid>
      </Box>
    </MondrianGrid>
  )
}

export const MondrianBoxC = () => {
  return (
    <MondrianGrid $gcol="65% 35%">
      <Box $bright>
        <MondrianGrid $horizontal $grow="65%">
          <Box $bbot />
          <Box />
        </MondrianGrid>
      </Box>
      <Box></Box>
    </MondrianGrid>
  )
}

export const MondrianBoxD = () => {
  return (
    <MondrianGrid $gcol="40% 60%">
      <Box $bright />
      <Box>
        <MondrianGrid $horizontal $grow="60%">
          <Box $bbot />
        </MondrianGrid>
      </Box>
    </MondrianGrid>
  )
}

export const MondrianBoxE = () => {
  return (
    <MondrianGrid $gcol="45% 55%">
      <Box $bright />
      <Box>
        <MondrianGrid $horizontal $grow="70%">
          <Box $bbot />
        </MondrianGrid>
      </Box>
    </MondrianGrid>
  )
}

export const MondrianBoxF = () => {
  return (
    <MondrianGrid $horizontal $grow="30% 70%">
      <Box $bbot />
      <Box>
        <MondrianGrid $gcol="68%">
          <Box $bright />
        </MondrianGrid>
      </Box>
    </MondrianGrid>
  )
}

export const MondrianBoxG = () => {
  return (
    <MondrianGrid $gcol="10%">
      <Box $bright></Box>
    </MondrianGrid>
  )
}

export const MondrianBoxH = () => {
  return (
    <MondrianGrid $gcol="35%">
      <Box $bright />
    </MondrianGrid>
  )
}

export const MondrianBoxI = () => {
  return (
    <MondrianGrid $horizontal $grow="65%">
      <Box $bbot />
    </MondrianGrid>
  )
}
