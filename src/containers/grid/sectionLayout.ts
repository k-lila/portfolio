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
      columns: '5vw 40vw 2vw 3vw 4vw 2vw 5vw 24vw 5vw',
      rows: '6svh 2svh 30svh 3svh 6svh 6svh 6svh 6svh 6svh 6svh'
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
      columns: '5vw 5vw 10vw 20vw 20vw 12vw 8vw 5svw 5vw',
      rows: '6svh 2svh 20svh 4svh 15svh 4svh 15svh 4svh 20svh 5svh'
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
      columns: '5vw 5vw 5vw 15vw 30vw 15vw 3vw 7vw 5vw',
      rows: '6svh 2svh 2svh 24svh 3svh 24svh 3svh 24svh 5svh 2svh'
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
