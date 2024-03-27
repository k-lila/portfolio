import Box from '../../../components/box/box'
import Menu from '../../menu/Menu'

const setAbout = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="blue" />
    // picture
    boxes[7] = <Box key={7} $gcol="span 4" $grow="span 5" />
  } else {
    boxes[2] = <Box key={2} $bgcolor="red" />
  }
  return boxes
}

const setSkills = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="violet" />
  } else {
    boxes[2] = <Box key={2} $bgcolor="orange" />
  }
  return boxes
}

const setProjects = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="yellow" />
  } else {
    boxes[2] = <Box key={2} $bgcolor="green" />
  }
  return boxes
}

const boxGen = (section: string, device: string) => {
  const boxes = Array.from({ length: 50 }, (_, index) => (
    <Box key={index}>{index}</Box>
  ))

  boxes[3] = <Box key={3} $grow="span 4" />
  boxes[4] = <Box key={4} $gcol="span 6" />
  boxes[8] = <Box key={8} $gcol="span 4" />
  boxes[11] = <Box key={11} $grow="span 4" />
  boxes[12] = <Box key={12} $grow="span 8" />

  if (device == 'cel') {
    boxes[1] = (
      <Box key={1} $gcol="span 7">
        <Menu />
      </Box>
    )
  }

  if (section == 'about') {
    return setAbout(boxes, device)
  } else if (section == 'skills') {
    return setSkills(boxes, device)
  } else {
    return setProjects(boxes, device)
  }
}

export default boxGen
