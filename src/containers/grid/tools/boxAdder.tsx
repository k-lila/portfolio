import React from 'react'
import { ReactElement } from 'react'
import {
  MondrianBlock,
  MondrianColor,
  MondrianCompound,
  MondrianSimple
} from '../../../components/mondrianBox/MondrianBox'

type NewBoxes = {
  [key: string]: {
    [key: string]: {
      [key: number]: React.ReactElement
    }
  }
}

const newB: NewBoxes = {
  tab: {
    about: {
      0: <MondrianCompound $gridA="80% 20%" $gridB="35%" />,
      2: <MondrianCompound $first $gridA="65% 35%" $gridB="65%" />,
      3: <MondrianCompound $gridA="40% 60%" $gridB="60%" />,
      5: <MondrianCompound $gridA="45% 55%" $gridB="70%" />,
      9: (
        <MondrianBlock
          $grid="40% 60%"
          childrenA={<MondrianSimple $grid="30% 70%" $horizontal />}
          childrenB={
            <MondrianCompound
              $horizontal
              $first
              $gridA="75% 25%"
              $gridB="70% 30%"
            />
          }
        />
      ),
      12: <MondrianSimple $grid="10% 90%" />,
      14: <MondrianSimple $grid="35% 65%" />,
      20: <MondrianCompound $gridA="30% 70%" $gridB="68%" $horizontal />,
      21: <MondrianColor />
    },
    skills: {
      0: <MondrianCompound $gridA="50% 50%" $gridB="35% 65%" />,
      2: <MondrianCompound $first $gridA="65% 35%" $gridB="55% 45%" />,
      6: <MondrianCompound $first $gridB="72%" />,
      5: <MondrianCompound $horizontal $first $gridA="60%" />,
      11: <MondrianColor />,
      13: <MondrianSimple />,
      14: <MondrianSimple $grid="65% 35%" />,
      18: <MondrianColor />,
      20: <MondrianCompound $horizontal $first $gridA="80%" $gridB="60%" />,
      22: <MondrianCompound $horizontal $gridA="37%" $gridB="45%" />
    },
    projects: {
      0: <MondrianCompound />,
      2: <MondrianCompound $gridA="43% 57%" $gridB="70%" />,
      8: <MondrianCompound $first $gridA="65%" $gridB="68%" />,
      10: <MondrianCompound $first $gridA="58% 42%" $gridB="38%" />,
      14: <MondrianSimple />,
      18: <MondrianSimple $horizontal $grid="68%" />,
      20: <MondrianCompound $horizontal $gridA="30%" $gridB="65%" />,
      22: <MondrianColor />
    }
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
    const dev = device === 'cel' ? 'tab' : device

    const new_box = newB[dev][section][index]
    return new_box
      ? React.cloneElement(
          box,
          { ...box.props, key: `${section}${index}` },
          new_box
        )
      : box
  })
  return modified
}

export default boxAdder
