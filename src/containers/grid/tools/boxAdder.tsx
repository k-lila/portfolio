import React from 'react'
import { ReactElement } from 'react'
import {
  MondrianComplexI,
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
      0: <MondrianComplexI key={1} gridA="80% 20%" gridB="35%" />,
      2: <MondrianComplexI key={2} $first gridA="65% 35%" gridB="65%" />,
      3: <MondrianComplexI key={3} gridA="40% 60%" gridB="60%" />,
      5: <MondrianComplexI key={4} gridA="45% 55%" gridB="70%" />,

      // 9: <MondrianBoxA />,

      12: <MondrianSimple key={6} $grid="10% 90%" />,
      14: <MondrianSimple key={7} $grid="35% 65%" />,
      20: <MondrianComplexI key={8} gridA="30% 70%" gridB="68%" $horizontal />
    },
    skills: {
      0: <MondrianComplexI key={9} gridA="50% 50%" gridB="35% 65%" />,
      2: <MondrianComplexI key={10} $first gridA="65% 35%" gridB="55% 45%" />,
      6: <MondrianComplexI key={11} $first gridB="72%" />,
      5: <MondrianComplexI key={12} $horizontal $first gridA="60%" />,
      13: <MondrianSimple key={13} />,
      14: <MondrianSimple key={14} $grid="65% 35%" />,
      20: (
        <MondrianComplexI key={15} $horizontal $first gridA="80%" gridB="60%" />
      ),
      22: <MondrianComplexI key={16} $horizontal gridA="37%" gridB="45%" />
    },
    projects: {
      0: <MondrianComplexI key={17} />,
      2: <MondrianComplexI key={18} gridA="43% 57%" gridB="70%" />,
      8: <MondrianComplexI key={19} $first gridA="65%" gridB="68%" />,
      10: <MondrianComplexI key={20} $first gridA="58% 42%" gridB="38%" />,
      14: <MondrianSimple key={21} />,
      18: <MondrianSimple key={22} $horizontal $grid="68%" />,
      20: <MondrianComplexI key={23} $horizontal gridA="30%" gridB="65%" />
    }
  },
  tab: {
    about: {
      0: <MondrianComplexI key={1} gridA="80% 20%" gridB="35%" />,
      2: <MondrianComplexI key={2} $first gridA="65% 35%" gridB="65%" />,
      3: <MondrianComplexI key={3} gridA="40% 60%" gridB="60%" />,
      5: <MondrianComplexI key={4} gridA="45% 55%" gridB="70%" />,

      // 9: <MondrianBoxA />,

      12: <MondrianSimple key={6} $grid="10% 90%" />,
      14: <MondrianSimple key={7} $grid="35% 65%" />,
      20: <MondrianComplexI key={8} gridA="30% 70%" gridB="68%" $horizontal />
    },
    skills: {
      0: <MondrianComplexI key={9} gridA="50% 50%" gridB="35% 65%" />,
      2: <MondrianComplexI key={10} $first gridA="65% 35%" gridB="55% 45%" />,
      6: <MondrianComplexI key={11} $first gridB="72%" />,
      5: <MondrianComplexI key={12} $horizontal $first gridA="60%" />,
      13: <MondrianSimple key={13} />,
      14: <MondrianSimple key={14} $grid="65% 35%" />,
      20: (
        <MondrianComplexI key={15} $horizontal $first gridA="80%" gridB="60%" />
      ),
      22: <MondrianComplexI key={16} $horizontal gridA="37%" gridB="45%" />
    },
    projects: {
      0: <MondrianComplexI key={17} />,
      2: <MondrianComplexI key={18} gridA="43% 57%" gridB="70%" />,
      8: <MondrianComplexI key={19} $first gridA="65%" gridB="68%" />,
      10: <MondrianComplexI key={20} $first gridA="58% 42%" gridB="38%" />,
      14: <MondrianSimple key={21} />,
      18: <MondrianSimple key={22} $horizontal $grid="68%" />,
      20: <MondrianComplexI key={23} $horizontal gridA="30%" gridB="65%" />
    }
  },
  pc: {
    about: {
      0: <MondrianComplexI key={1} gridA="80% 20%" gridB="35%" />,
      2: <MondrianComplexI key={2} $first gridA="65% 35%" gridB="65%" />,
      3: <MondrianComplexI key={3} gridA="40% 60%" gridB="60%" />,
      5: <MondrianComplexI key={4} gridA="45% 55%" gridB="70%" />,

      // 9: <MondrianBoxA />,

      12: <MondrianSimple key={6} $grid="10% 90%" />,
      14: <MondrianSimple key={7} $grid="35% 65%" />,
      20: <MondrianComplexI key={8} gridA="30% 70%" gridB="68%" $horizontal />
    },
    skills: {
      0: <MondrianComplexI key={9} gridA="50% 50%" gridB="35% 65%" />,
      2: <MondrianComplexI key={10} $first gridA="65% 35%" gridB="55% 45%" />,
      6: <MondrianComplexI key={11} $first gridB="72%" />,
      5: <MondrianComplexI key={12} $horizontal $first gridA="60%" />,
      13: <MondrianSimple key={13} />,
      14: <MondrianSimple key={14} $grid="65% 35%" />,
      20: (
        <MondrianComplexI key={15} $horizontal $first gridA="80%" gridB="60%" />
      ),
      22: <MondrianComplexI key={16} $horizontal gridA="37%" gridB="45%" />
    },
    projects: {
      0: <MondrianComplexI key={17} />,
      2: <MondrianComplexI key={18} gridA="43% 57%" gridB="70%" />,
      8: <MondrianComplexI key={19} $first gridA="65%" gridB="68%" />,
      10: <MondrianComplexI key={20} $first gridA="58% 42%" gridB="38%" />,
      14: <MondrianSimple key={21} />,
      18: <MondrianSimple key={22} $horizontal $grid="68%" />,
      20: <MondrianComplexI key={23} $horizontal gridA="30%" gridB="65%" />
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
