import React from 'react'
import Box from '../../../components/box/box'
import Menu from '../../menu/Menu'

const setAbout = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="blue" />
  } else {
    boxes[2] = <Box key={2} $bgcolor="red" />
  }
  return boxes
}

const setSkills = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="violet" />
    const modified = boxes.map((box, index) => {
      if (index === 7 || index === 12 || index === 19 || index == 23) {
        const newProps = { ...box.props, $bgcolor: 'wheat' }
        return React.cloneElement(box, newProps)
      } else {
        return box
      }
    })
    return modified
  } else {
    boxes[2] = <Box key={2} $bgcolor="orange" />
  }
  return boxes
}

const setProjects = (boxes: Array<any>, device: string) => {
  if (device == 'cel') {
    boxes[2] = <Box key={2} $bgcolor="yellow" />
    const modified = boxes.map((box, index) => {
      if (index === 9 || index === 16 || index === 21) {
        const newProps = { ...box.props, $bgcolor: 'wheat' }
        return React.cloneElement(box, newProps)
      } else {
        return box
      }
    })
    return modified
  } else {
    boxes[2] = <Box key={2} $bgcolor="green" />
  }
  return boxes
}

const boxGen = (section: string, device: string) => {
  const boxes = Array.from({ length: 24 }, (_, index) => (
    <Box key={index}></Box>
  ))
  boxes[4] = <Box key={4} $gcol="span 6"></Box>
  boxes[5] = <Box key={5} $gcol="span 2" $grow="span 2"></Box>
  boxes[6] = <Box key={6} $gcol="span 2"></Box>
  boxes[7] = <Box key={7} $gcol="span 5"></Box>
  boxes[8] = <Box key={8} $gcol="span 3"></Box>
  boxes[9] = <Box key={9} $gcol="span 3"></Box>
  boxes[10] = <Box key={10} $gcol="span 3"></Box>
  boxes[11] = <Box key={11} $gcol="span 2"></Box>
  boxes[12] = <Box key={12} $gcol="span 5"></Box>
  boxes[13] = <Box key={13} $gcol="span 2"></Box>
  boxes[14] = <Box key={14} $gcol="span 2" $grow="span 3"></Box>
  boxes[16] = <Box key={16} $gcol="span 3"></Box>
  boxes[17] = <Box key={17} $gcol="span 2"></Box>
  boxes[19] = <Box key={19} $gcol="span 5"></Box>
  boxes[20] = <Box key={20} $gcol="span 2" $grow="span 3"></Box>
  boxes[21] = <Box key={21} $gcol="span 5"></Box>
  boxes[22] = <Box key={22} $gcol="span 2" $grow="span 2"></Box>
  boxes[23] = <Box key={23} $gcol="span 5"></Box>
  boxes[24] = <Box key={24} $gcol="span 7"></Box>

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
