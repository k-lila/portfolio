import React from 'react'
import { ReactElement } from 'react'
import {
  MondrianBoxA,
  MondrianBoxB,
  MondrianBoxC,
  MondrianBoxD,
  MondrianBoxE,
  MondrianBoxF,
  MondrianBoxG,
  MondrianBoxH,
  MondrianBoxI
} from '../../../components/mondrianBox/MondrianBox'

type NewBoxes = {
  [key: string]: {
    [key: string]: {
      [key: number]: React.ReactElement
    }
  }
}

const newB: NewBoxes = {
  cel: {
    about: {
      9: <MondrianBoxA />
    },
    skills: {},
    projects: {}
  },
  tab: {
    about: {
      0: <MondrianBoxB />,
      2: <MondrianBoxC />,
      3: <MondrianBoxD />,
      5: <MondrianBoxE />,
      9: <MondrianBoxA />,
      12: <MondrianBoxG />,
      14: <MondrianBoxH />,
      20: <MondrianBoxF />
    },
    skills: {},
    projects: {}
  },
  pc: {
    about: {
      9: <MondrianBoxA />
    },
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
