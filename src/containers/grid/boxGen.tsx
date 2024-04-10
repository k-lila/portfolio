import React from 'react'
import { genLayout } from './sectionLayouts'
import ContactList from '../contactList/ContactList'
import Presentation from '../../components/presentation/Presentation'
import Photo from '../../components/photo/Photo'
import Description from '../../components/description/Description'
import Skills from '../../components/skills/Skills'
import MastersD from '../../components/training/mastersD'
import FullStack from '../../components/training/fullstack'
import Timeline from '../../components/timeline/Timeline'

const setAbout = () => {
  const boxes = genLayout(true)
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
}

const setSkills = () => {
  const boxes = genLayout()
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
}

const setProjects = () => {
  const boxes = genLayout()
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

const boxGen = (section: string) => {
  if (section == 'about') {
    return setAbout()
  } else if (section == 'skills') {
    return setSkills()
  } else {
    return setProjects()
  }
}

export default boxGen
