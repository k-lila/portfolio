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
      columns: '10vw 12vw 3vw 6vw 8vw 14vw 13vw 14vw 10vw',
      rows: '5svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh'
    },
    tab: {
      columns: '10vw 5vw 2vw 4vw 4vw 6vw 8vw 13svw 15vw',
      rows: '10svh 30svh 20svh 10svh 5svh 21.5svh'
    },
    pc: {
      columns: '10vw 5vw 2vw 4vw 4vw 6vw 8vw 13svw 15vw',
      rows: '10svh 30svh 20svh 10svh 5svh 21.5svh'
    }
  },
  skills: {
    cel: {
      columns: '10vw 20vw 10vw 4vw 5vw 10vw 8vw 13svw 10vw',
      rows: '5svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh'
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
      columns: '10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw',
      rows: '5svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh 10svh'
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
