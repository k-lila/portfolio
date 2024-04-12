import Box from '../box/box'
import MGrid from './styles'
import { ReactNode } from 'react'

export type MondrianProps = {
  children?: ReactNode
  $horizontal?: boolean
}

const MondrianGrid = ({ children, ...props }: MondrianProps) => {
  return <MGrid {...props}>{children}</MGrid>
}

const MondrianBox = () => {
  return (
    <MondrianGrid $horizontal>
      <Box $bgcolor="white" $bbot />
      <Box $bgcolor="white">
        <MondrianGrid>
          <Box $bright $bgcolor="red" />
          <Box>
            <MondrianGrid $horizontal>
              <Box $bbot />
              <Box>
                <MondrianGrid>
                  <Box $bright $bgcolor="blue" />
                </MondrianGrid>
              </Box>
            </MondrianGrid>
          </Box>
        </MondrianGrid>
      </Box>
    </MondrianGrid>
  )
}

export default MondrianBox
