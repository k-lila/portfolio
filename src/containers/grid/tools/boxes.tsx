import React from 'react'
import { genLayout } from './layouts'
import { colorBoxes, componentArrangement } from './arrangements'

const boxGen = (section: string, device: string) => {
  const boxes = genLayout(section === 'about' ? true : false)
  const dev = device === 'tab' ? 'cel' : device
  const boxList = boxes.map((box, index) => {
    const component = componentArrangement[section][index]
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
