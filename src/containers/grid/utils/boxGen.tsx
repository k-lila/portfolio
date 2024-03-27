import Box from '../../../components/box/box'
import Menu from '../../menu/Menu'

const setAbout = (boxes: Array<any>, device: string) => {
  // const modified_boxes = boxes
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="blue" />
  } else {
    boxes[2] = <Box key={2} $bgcolor="red" />
  }
  return boxes
}

const setSkills = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="black" />
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
  const boxes = Array.from({ length: 100 }, (_, index) => (
    <Box key={index}>{index}</Box>
  ))

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
