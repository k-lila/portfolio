import Box from '../box/box'
import MBox from './styles'

const MondrianBox = () => {
  return (
    <MBox>
      <Box $bgcolor="red !important" />
      <Box />
      <Box />
    </MBox>
  )
}

export default MondrianBox
