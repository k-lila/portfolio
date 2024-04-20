import React from 'react'
import ContactList from '../../contactList/ContactList'
import Presentation from '../../../components/presentation/Presentation'
import Photo from '../../../components/photo/Photo'
import Description from '../../../components/description/Description'
import Skills from '../../../components/skills/Skills'
import MastersD from '../../../components/training/mastersD'
import FullStack from '../../../components/training/fullstack'
import Timeline from '../../../components/timeline/Timeline'
import Menu from '../../menu/Menu'
import {
  MondrianBlock,
  MondrianColor,
  MondrianCompound,
  MondrianSimple
} from '../../../components/mondrianBox/MondrianBox'
import ProjectA from '../../../components/projects/ProjectA'
import ProjectB from '../../../components/projects/ProjectB'

type componentArrangement = {
  [key: string]: {
    [key: number]: React.ReactElement
  }
}

type ColorBoxes = {
  [key: string]: {
    [key: string]: {
      [key: number]: React.ReactElement
    }
  }
}

export const componentArrangement: componentArrangement = {
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
    1: <Menu />,
    9: <ProjectA />,
    16: <ProjectB />
  }
}

export const colorBoxes: ColorBoxes = {
  cel: {
    about: {
      0: <MondrianCompound $gridA="80% 20%" $gridB="35% 65%" />,
      2: <MondrianCompound $first $gridA="65% 35%" $gridB="65% 35%" />,
      3: <MondrianCompound $gridA="40% 60%" $gridB="60% 40%" />,
      5: <MondrianCompound $gridA="45% 55%" $gridB="70% 30%" />,
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
      20: <MondrianCompound $gridA="30% 70%" $gridB="68% 32%" $horizontal />,
      21: <MondrianColor />
    },
    skills: {
      0: <MondrianCompound $gridA="50% 50%" $gridB="35% 65%" />,
      2: <MondrianCompound $first $gridA="65% 35%" $gridB="55% 45%" />,
      6: <MondrianCompound $first $gridB="72% 28%" />,
      5: <MondrianCompound $horizontal $first $gridA="60% 40%" />,
      11: <MondrianColor />,
      13: <MondrianSimple />,
      14: <MondrianSimple $grid="65% 35%" />,
      18: <MondrianColor />,
      20: (
        <MondrianCompound
          $horizontal
          $first
          $gridA="80% 20%"
          $gridB="60% 40%"
        />
      ),
      22: <MondrianCompound $horizontal $gridA="37% 63%" $gridB="45% 55%" />
    },
    projects: {
      0: <MondrianCompound />,
      2: <MondrianCompound $gridA="43% 57%" $gridB="70% 30%" />,
      8: <MondrianCompound $first $gridA="65% 35%" $gridB="68% 32%" />,
      10: <MondrianCompound $first $gridA="58% 42%" $gridB="38% 62%" />,
      14: <MondrianSimple />,
      18: <MondrianSimple $horizontal $grid="68%" />,
      20: <MondrianCompound $horizontal $gridA="30% 70%" $gridB="65% 35%" />,
      22: <MondrianColor />
    }
  },
  pc: {
    about: {},
    skills: {},
    projects: {}
  }
}
