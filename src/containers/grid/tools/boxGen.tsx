import React from 'react'
import { genLayout } from './sectionLayouts'
import ContactList from '../../contactList/ContactList'
import Presentation from '../../../components/presentation/Presentation'
import Photo from '../../../components/photo/Photo'
import Description from '../../../components/description/Description'
import Skills from '../../../components/skills/Skills'
import MastersD from '../../../components/training/mastersD'
import FullStack from '../../../components/training/fullstack'
import Timeline from '../../../components/timeline/Timeline'
import Menu from '../../menu/Menu'

type BoxComponents = {
  [key: string]: {
    [key: number]: React.ReactElement
  }
}

const boxComponents: BoxComponents = {
  about: {
    1: <Menu />,
    4: <Presentation />,
    8: <Photo />,
    10: <ContactList />,
    19: <Description />
  },
  skills: {
    1: <Menu />,
    7: <Skills />,
    12: <FullStack />,
    19: <MastersD />,
    23: <Timeline />
  },
  projects: {
    1: <Menu />
  }
}

const boxGen = (section: string) => {
  const boxes = genLayout(section === 'about' ? true : false)
  const boxList = boxes.map((box, index) => {
    const component = boxComponents[section][index]
    return component
      ? React.cloneElement(box, { ...box.props }, component)
      : box
  })
  return boxList
}

export default boxGen
