import React from 'react'
import Box from '../../components/box/box'
import { genLayoutA, genLayoutB } from './sectionLayouts'

const setAbout = (device: string) => {
  const boxes = genLayoutB()
  const modified = boxes.map((box, index) => {
    if (index === 4 || index === 8 || index === 10 || index === 19) {
      const newProps = { ...box.props, $bgcolor: 'wheat' }
      return React.cloneElement(box, newProps)
    } else {
      return box
    }
  })
  return modified
}

const setSkills = (device: string) => {
  const boxes = genLayoutA()
  const modified = boxes.map((box, index) => {
    if (index === 7 || index === 12 || index === 19 || index == 23) {
      const newProps = { ...box.props, $bgcolor: 'wheat' }
      return React.cloneElement(box, newProps)
    } else {
      return box
    }
  })
  return modified
}

const setProjects = (device: string) => {
  const boxes = genLayoutA()
  const modified = boxes.map((box, index) => {
    if (index === 9 || index === 16 || index === 21) {
      const newProps = { ...box.props, $bgcolor: 'wheat' }
      return React.cloneElement(box, newProps)
    } else {
      return box
    }
  })
  return modified
}

const boxGen = (section: string, device: string) => {
  const boxesA = genLayoutA()
  const boxesB = genLayoutB()

  if (section == 'about') {
    return setAbout(device)
  } else if (section == 'skills') {
    return setSkills(device)
  } else {
    return setProjects(device)
  }
}

export default boxGen
