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
import ProjectC from '../../../components/projects/ProjectC'

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
    16: <ProjectB />,
    21: <ProjectC />
  }
}

export const colorBoxes: ColorBoxes = {
  cel: {
    about: {
      0: <MondrianCompound />,
      2: <MondrianCompound $first />,
      3: <MondrianCompound />,
      5: <MondrianCompound />,
      // 9: ,
      12: <MondrianSimple />,
      14: <MondrianSimple />,
      20: <MondrianCompound $horizontal />,
      21: <MondrianColor />
    },
    skills: {
      0: <MondrianCompound />,
      2: <MondrianCompound $first />,
      6: <MondrianCompound $first />,
      5: <MondrianCompound $horizontal $first />,
      11: <MondrianColor />,
      13: <MondrianSimple />,
      14: <MondrianSimple />,
      18: <MondrianColor />,
      20: <MondrianCompound $horizontal $first />,
      22: <MondrianCompound $horizontal />
    },
    projects: {
      0: <MondrianCompound />,
      2: <MondrianCompound />,
      8: <MondrianCompound $first />,
      10: <MondrianCompound $first />,
      14: <MondrianSimple />,
      18: <MondrianSimple $horizontal />,
      20: <MondrianCompound $horizontal />,
      22: <MondrianColor />
    }
  },
  pc: {
    about: {
      0: <MondrianCompound />,
      2: <MondrianCompound $first />,
      3: <MondrianCompound />,
      5: <MondrianCompound />,
      14: <MondrianSimple />,
      20: <MondrianCompound $horizontal />,
      21: <MondrianColor />
    },
    skills: {
      0: <MondrianCompound />,
      2: <MondrianCompound $first />,
      6: <MondrianCompound $first />,
      5: <MondrianCompound $horizontal $first />,
      11: <MondrianColor />,
      13: <MondrianSimple />,
      14: <MondrianSimple />,
      18: <MondrianColor />,
      20: <MondrianCompound $horizontal $first />,
      22: <MondrianCompound $horizontal />
    },
    projects: {
      0: <MondrianCompound />,
      2: <MondrianCompound />,
      8: <MondrianCompound $first />,
      10: <MondrianCompound $first />,
      14: <MondrianSimple />,
      18: <MondrianSimple $horizontal />,
      20: <MondrianCompound $horizontal />,
      22: <MondrianColor />
    }
  }
}
