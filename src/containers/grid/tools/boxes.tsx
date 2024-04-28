import React from 'react'
import { genLayout } from './layouts'
import { colorBoxes, componentArrangement } from './arrangements'

const boxGen = (section: string, device: string) => {
  const boxes = genLayout(section === 'about' ? true : false)
  const dev = device === 'tab' ? 'cel' : device
  const boxList = boxes.map((box, index) => {
    let component = componentArrangement[section][index]
    if (device == 'pc' && section == 'about') {
      if (index == 9) {
        component = componentArrangement[section][19]
      } else if (index == 19) {
        component = <p>asdasdasdasdasd</p>
      }
    }

    const color_box = colorBoxes[dev][section][index]
    return component
      ? React.cloneElement(box, { ...box.props }, component)
      : color_box
        ? React.cloneElement(
            box,
            { ...box.props, key: `${section}${index}` },
            color_box
          )
        : box
  })
  return boxList
}

export default boxGen
