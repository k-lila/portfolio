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
  cel: {
    about: {
      0: <MondrianCompound key={1} gridA="80% 20%" gridB="35%" />,
      2: <MondrianCompound key={2} $first gridA="65% 35%" gridB="65%" />,
      3: <MondrianCompound key={3} gridA="40% 60%" gridB="60%" />,
      5: <MondrianCompound key={4} gridA="45% 55%" gridB="70%" />,
      9: (
        <MondrianBlock
          $grid="40% 60%"
          childrenA={<MondrianSimple $grid="30% 70%" $horizontal />}
          childrenB={
            <MondrianCompound
              $horizontal
              $first
              gridA="75% 25%"
              gridB="70% 30%"
            />
          }
        />
      ),
      12: <MondrianSimple key={6} $grid="10% 90%" />,
      14: <MondrianSimple key={7} $grid="35% 65%" />,
      20: <MondrianCompound key={8} gridA="30% 70%" gridB="68%" $horizontal />
    },
    skills: {
      0: <MondrianCompound key={9} gridA="50% 50%" gridB="35% 65%" />,
      2: <MondrianCompound key={10} $first gridA="65% 35%" gridB="55% 45%" />,
      6: <MondrianCompound key={11} $first gridB="72%" />,
      5: <MondrianCompound key={12} $horizontal $first gridA="60%" />,
      13: <MondrianSimple key={13} />,
      14: <MondrianSimple key={14} $grid="65% 35%" />,
      20: (
        <MondrianCompound key={15} $horizontal $first gridA="80%" gridB="60%" />
      ),
      22: <MondrianCompound key={16} $horizontal gridA="37%" gridB="45%" />
    },
    projects: {
      0: <MondrianCompound key={17} />,
      2: <MondrianCompound key={18} gridA="43% 57%" gridB="70%" />,
      8: <MondrianCompound key={19} $first gridA="65%" gridB="68%" />,
      10: <MondrianCompound key={20} $first gridA="58% 42%" gridB="38%" />,
      14: <MondrianSimple key={21} />,
      18: <MondrianSimple key={22} $horizontal $grid="68%" />,
      20: <MondrianCompound key={23} $horizontal gridA="30%" gridB="65%" />
    }
  },
  tab: {
    about: {
      0: <MondrianCompound key={1} gridA="80% 20%" gridB="35%" />,
      2: <MondrianCompound key={2} $first gridA="65% 35%" gridB="65%" />,
      3: <MondrianCompound key={3} gridA="40% 60%" gridB="60%" />,
      5: <MondrianCompound key={4} gridA="45% 55%" gridB="70%" />,

      9: (
        <MondrianBlock
          $grid="40% 60%"
          childrenA={<MondrianSimple $grid="30% 70%" $horizontal />}
          childrenB={
            <MondrianCompound
              $horizontal
              $first
              gridA="75% 25%"
              gridB="70% 30%"
            />
          }
        />
      ),

      12: <MondrianSimple key={6} $grid="10% 90%" />,
      14: <MondrianSimple key={7} $grid="35% 65%" />,
      20: <MondrianCompound key={8} gridA="30% 70%" gridB="68%" $horizontal />,
      21: <MondrianColor />
    },
    skills: {
      0: <MondrianCompound key={9} gridA="50% 50%" gridB="35% 65%" />,
      2: <MondrianCompound key={10} $first gridA="65% 35%" gridB="55% 45%" />,
      6: <MondrianCompound key={11} $first gridB="72%" />,
      5: <MondrianCompound key={12} $horizontal $first gridA="60%" />,
      11: <MondrianColor />,
      13: <MondrianSimple key={13} />,
      14: <MondrianSimple key={14} $grid="65% 35%" />,
      18: <MondrianColor />,
      20: (
        <MondrianCompound key={15} $horizontal $first gridA="80%" gridB="60%" />
      ),
      22: <MondrianCompound key={16} $horizontal gridA="37%" gridB="45%" />
    },
    projects: {
      0: <MondrianCompound key={17} />,
      2: <MondrianCompound key={18} gridA="43% 57%" gridB="70%" />,
      8: <MondrianCompound key={19} $first gridA="65%" gridB="68%" />,
      10: <MondrianCompound key={20} $first gridA="58% 42%" gridB="38%" />,
      14: <MondrianSimple key={21} />,
      18: <MondrianSimple key={22} $horizontal $grid="68%" />,
      20: <MondrianCompound key={23} $horizontal gridA="30%" gridB="65%" />,
      22: <MondrianColor />
    }
  },
  pc: {
    about: {
      0: <MondrianCompound key={1} gridA="80% 20%" gridB="35%" />,
      2: <MondrianCompound key={2} $first gridA="65% 35%" gridB="65%" />,
      3: <MondrianCompound key={3} gridA="40% 60%" gridB="60%" />,
      5: <MondrianCompound key={4} gridA="45% 55%" gridB="70%" />,
      12: <MondrianSimple key={6} $grid="10% 90%" />,
      14: <MondrianSimple key={7} $grid="35% 65%" />,
      20: <MondrianCompound key={8} gridA="30% 70%" gridB="68%" $horizontal />
    },
    skills: {
      0: <MondrianCompound key={9} gridA="50% 50%" gridB="35% 65%" />,
      2: <MondrianCompound key={10} $first gridA="65% 35%" gridB="55% 45%" />,
      5: <MondrianCompound key={12} $horizontal $first gridA="60%" />,
      6: <MondrianCompound key={11} $first gridB="72%" />,
      13: <MondrianSimple key={13} />,
      14: <MondrianSimple key={14} $grid="65% 35%" />,
      20: (
        <MondrianCompound key={15} $horizontal $first gridA="80%" gridB="60%" />
      ),
      22: <MondrianCompound key={16} $horizontal gridA="37%" gridB="45%" />
    },
    projects: {
      0: <MondrianCompound key={17} />,
      2: <MondrianCompound key={18} gridA="43% 57%" gridB="70%" />,
      8: <MondrianCompound key={19} $first gridA="65%" gridB="68%" />,
      10: <MondrianCompound key={20} $first gridA="58% 42%" gridB="38%" />,
      14: <MondrianSimple key={21} />,
      18: <MondrianSimple key={22} $horizontal $grid="68%" />,
      20: <MondrianCompound key={23} $horizontal gridA="30%" gridB="65%" />
    }
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
