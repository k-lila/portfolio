import React from 'react'
import { genLayoutA, genLayoutB } from './sectionLayouts'
import ContactList from '../contactList/ContactList'
import Presentation from '../../components/presentation/Presentation'
import Photo from '../../components/photo/Photo'
import Description from '../../components/description/Description'
import Skills from '../../components/skills/Skills'
import MastersD from '../../components/training/mastersD'
import FullStack from '../../components/training/fullstack'
import Timeline from '../../components/timeline/Timeline'

const setAbout = (device: string) => {
  const boxes = genLayoutB()
  if (device === 'cel') {
    const modified = boxes.map((box, index) => {
      if (index === 19) {
        return React.cloneElement(box, { ...box.props }, <Description />)
      } else if (index === 4) {
        return React.cloneElement(box, { ...box.props }, <Presentation />)
      } else if (index === 8) {
        return React.cloneElement(box, { ...box.props }, <Photo />)
      } else if (index === 10) {
        return React.cloneElement(box, { ...box.props }, <ContactList />)
      } else {
        return box
      }
    })
    return modified
  } else {
    return boxes
  }
}

const setSkills = (device: string) => {
  const boxes = genLayoutA()

  if (device === 'cel') {
    const modified = boxes.map((box, index) => {
      if (index === 7) {
        return React.cloneElement(box, { ...box.props }, <Skills />)
      } else if (index === 12) {
        return React.cloneElement(box, { ...box.props }, <FullStack />)
      } else if (index === 19) {
        return React.cloneElement(box, { ...box.props }, <MastersD />)
      } else if (index === 23) {
        return React.cloneElement(box, { ...box.props }, <Timeline />)
      } else {
        return box
      }
    })
    return modified
  } else {
    return boxes
  }
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
