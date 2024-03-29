import Box from '../../components/box/box'
import Menu from '../menu/Menu'

type Layouts = {
  [key: string]: {
    [key: string]: {
      columns: string
      rows: string
    }
  }
}

export const sectionLayouts: Layouts = {
  about: {
    cel: {
      columns: '5vw 2vw 32vw 4vw 4vw 4vw 32vw 2vw 5vw',
      rows: '6svh 12svh 2svh 30svh 2svh 2svh 2svh 2svh 33svh 4svh'
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

export const genLayoutA = () => {
  const boxes = Array.from({ length: 24 }, (_, index) => (
    <Box key={index}></Box>
  ))
  boxes[1] = (
    <Box key={1} $gcol="span 7">
      <Menu />
    </Box>
  )
  boxes[4] = <Box key={4} $gcol="span 6"></Box>
  boxes[5] = <Box key={5} $gcol="span 2" $grow="span 2"></Box>
  boxes[6] = <Box key={6} $gcol="span 2"></Box>
  boxes[7] = <Box key={7} $gcol="span 5"></Box>
  boxes[8] = <Box key={8} $gcol="span 3"></Box>
  boxes[9] = <Box key={9} $gcol="span 3"></Box>
  boxes[10] = <Box key={10} $gcol="span 3"></Box>
  boxes[11] = <Box key={11} $gcol="span 2"></Box>
  boxes[12] = <Box key={12} $gcol="span 5"></Box>
  boxes[13] = <Box key={13} $gcol="span 2"></Box>
  boxes[14] = <Box key={14} $gcol="span 2" $grow="span 3"></Box>
  boxes[16] = <Box key={16} $gcol="span 3"></Box>
  boxes[17] = <Box key={17} $gcol="span 2"></Box>
  boxes[19] = <Box key={19} $gcol="span 5"></Box>
  boxes[20] = <Box key={20} $gcol="span 2" $grow="span 3"></Box>
  boxes[21] = <Box key={21} $gcol="span 5"></Box>
  boxes[22] = <Box key={22} $gcol="span 2" $grow="span 2"></Box>
  boxes[23] = <Box key={23} $gcol="span 5"></Box>
  boxes[24] = <Box key={24} $gcol="span 7"></Box>
  return boxes
}

export const genLayoutB = () => {
  const boxes = Array.from({ length: 23 }, (_, index) => (
    <Box key={index}></Box>
  ))
  boxes[1] = (
    <Box key={1} $gcol="span 7">
      <Menu />
    </Box>
  )
  boxes[4] = <Box key={4} $gcol="span 6"></Box>
  boxes[5] = <Box key={5} $gcol="span 2" $grow="span 2"></Box>
  boxes[6] = <Box key={6} $gcol="span 2"></Box>
  boxes[7] = <Box key={7} $gcol="span 5"></Box>
  boxes[8] = <Box key={8} $gcol="span 3"></Box>
  boxes[9] = <Box key={9} $gcol="span 3"></Box>
  boxes[10] = <Box key={10} $gcol="span 3"></Box>
  boxes[11] = <Box key={11} $gcol="span 2"></Box>
  boxes[12] = <Box key={12} $gcol="span 5"></Box>
  boxes[13] = <Box key={13} $gcol="span 2"></Box>
  boxes[14] = <Box key={14} $gcol="span 2" $grow="span 3"></Box>
  boxes[16] = <Box key={16} $gcol="span 3"></Box>
  boxes[17] = <Box key={17} $gcol="span 2"></Box>
  boxes[19] = <Box key={19} $gcol="span 5" $grow="span 3"></Box>
  boxes[20] = <Box key={20} $gcol="span 2" $grow="span 3"></Box>
  boxes[21] = <Box key={22} $gcol="span 2" $grow="span 2"></Box>
  boxes[22] = <Box key={24} $gcol="span 7"></Box>
  return boxes
}
