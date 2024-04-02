import React from 'react'
import { genLayoutA, genLayoutB } from './sectionLayouts'
import ContactList from '../../components/contactList/ContactList'
import Presentation from '../../components/presentation/Presentation'
import Photo from '../../components/photo/Photo'
import Description from '../../components/description/Description'

const setAbout = (device: string) => {
  const boxes = genLayoutB()
  if (device === 'cel') {
    const modified = boxes.map((box, index) => {
      if (index === 19) {
        const newProps = { ...box.props, $bgcolor: 'wheat' }
        return React.cloneElement(box, newProps, <Description />)
      } else if (index === 4) {
        return React.cloneElement(
          box,
          { ...box.props, $bgcolor: 'wheat' },
          <Presentation />
        )
      } else if (index === 8) {
        return React.cloneElement(box, { ...box.props }, <Photo />)
      } else if (index === 10) {
        return React.cloneElement(
          box,
          { ...box.props, $bgcolor: 'wheat' },
          <ContactList />
        )
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
