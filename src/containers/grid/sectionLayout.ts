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
      columns: '5vw 20vw 11vw 10vw 5vw 5vw 5vw 24vw 5vw',
      rows: '6svh 2svh 6svh 16svh 6svh 6svh 6svh 6svh 6svh 28svh 6svh'
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
      columns: '5vw 25vw 10vw 4vw 5vw 10vw 8vw 18svw 5vw',
      rows: '6svh 2svh 20svh 6svh 6svh 6svh 6svh 6svh 6svh 6svh 20svh'
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
      rows: '6svh 2svh 10svh 6svh 6svh 6svh 6svh 6svh 6svh 6svh 20svh'
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
