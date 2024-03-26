type Layouts = {
  [key: string]: {
    [key: string]: {
      columns: string
      rows: string
    }
  }
}

const sectionLayouts: Layouts = {
  about: {
    cel: {
      columns: '32vw 10vw 10vw 10vw 10vw 10vw 10vw',
      rows: '10svh 30svh 20svh 10svh 5svh 21.5svh'
    },
    tab: {
      columns: '32vw 10vw 10vw 10vw 10vw 10vw 10vw',
      rows: '10svh 30svh 20svh 10svh 5svh 21.5svh'
    },
    pc: {
      columns: '32vw 10vw 10vw 10vw 10vw 10vw 10vw',
      rows: '10svh 30svh 20svh 10svh 5svh 21.5svh'
    }
  },
  skills: {
    cel: {
      columns: '10vw 10vw 32vw 10vw 10vw 10vw 10vw',
      rows: '10svh 30svh 21.5svh 20svh 10svh 5svh'
    },
    tab: {
      columns: '10vw 10vw 32vw 10vw 10vw 10vw 10vw',
      rows: '10svh 30svh 21.5svh 20svh 10svh 5svh'
    },
    pc: {
      columns: '10vw 10vw 32vw 10vw 10vw 10vw 10vw',
      rows: '10svh 30svh 21.5svh 20svh 10svh 5svh'
    }
  },
  projects: {
    cel: {
      columns: '10vw 10vw 10vw 10vw 10vw 10vw 32vw',
      rows: '10svh 21.5svh 30svh 20svh 10svh 5svh'
    },
    tab: {
      columns: '10vw 10vw 10vw 10vw 10vw 10vw 32vw',
      rows: '10svh 21.5svh 30svh 20svh 10svh 5svh'
    },
    pc: {
      columns: '10vw 10vw 10vw 10vw 10vw 10vw 32vw',
      rows: '10svh 21.5svh 30svh 20svh 10svh 5svh'
    }
  }
}

export default sectionLayouts
