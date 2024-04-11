import React from 'react'
import { ReactElement } from 'react'
import MondrianBox from '../../../components/mondrianBox/MondrianBox'

type NewBoxes = {
  [key: string]: {
    [key: string]: {
      [key: number]: React.ReactElement
    }
  }
}

const newB: NewBoxes = {
  cel: {
    about: {},
    skills: {},
    projects: {}
  },
  tab: {
    about: {
      9: <MondrianBox />
    },
    skills: {},
    projects: {}
  },
  pc: {
    about: {},
    skills: {},
    projects: {}
  }
}

const boxAdder = (
  section: string,
  device: string,
  boxes: Array<ReactElement>
) => {
  const modified = boxes.map((box, index) => {
    const new_box = newB[device][section][index]
    return new_box ? React.cloneElement(box, { ...box.props }, new_box) : box
  })
  return modified
}

export default boxAdder
