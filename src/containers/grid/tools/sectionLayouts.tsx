import Box from '../../../components/box/box'

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
      columns: '5vw 2vw 32vw 3vw 7vw 7vw 27vw 2vw 5vw',
      rows: '6svh 12svh 2svh 30svh 2svh 2svh 2svh 2svh 32svh 3.5svh'
    },
    tab: {
      columns: '10vw 2vw 24vw 6vw 12vw 14vw 10vw 2vw 10vw',
      rows: '8svh 12svh 2svh 34svh 2svh 2svh 2svh 25svh 1svh 4svh'
    },
    pc: {
      columns: '5vw 2vw 32vw 4vw 4vw 4vw 32vw 2vw 5vw',
      rows: '6svh 12svh 2svh 30svh 2svh 2svh 2svh 2svh 33svh 4svh'
    }
  },
  skills: {
    cel: {
      columns: '5vw 2vw 12vw 20vw 20vw 12vw 12vw 2svw 5vw',
      rows: '6svh 2svh 20svh 2svh 14svh 2svh 14svh 3svh 25.5svh 5svh'
    },
    tab: {
      columns: '10vw 3vw 12vw 14vw 16vw 14vw 8vw 3svw 10vw',
      rows: '8svh 2svh 18svh 4svh 12svh 4svh 12svh 4svh 22svh 5svh'
    },
    pc: {
      columns: '5vw 5vw 10vw 20vw 20vw 12vw 8vw 5svw 5vw',
      rows: '6svh 2svh 20svh 4svh 15svh 4svh 15svh 4svh 20svh 5svh'
    }
  },
  projects: {
    cel: {
      columns: '5vw 5vw 5vw 15vw 30vw 15vw 3vw 7vw 5vw',
      rows: '6svh 2svh 2svh 22svh 3svh 22svh 3svh 26svh 5svh 2.5svh'
    },
    tab: {
      columns: '10vw 5vw 3vw 15vw 24vw 15vw 3vw 5vw 10vw',
      rows: '8svh 2svh 2svh 20svh 4svh 20svh 4svh 24svh 5svh 2svh'
    },
    pc: {
      columns: '5vw 5vw 5vw 15vw 30vw 15vw 3vw 7vw 5vw',
      rows: '6svh 2svh 2svh 24svh 3svh 24svh 3svh 24svh 5svh 2svh'
    }
  }
}

export const genLayout = (modify?: boolean) => {
  const common = [
    <Box key={0} />,
    <Box key={1} $gcol="span 7" />,
    <Box key={2} />,
    <Box key={3} />,
    <Box key={4} $gcol="span 6" />,
    <Box key={5} $gcol="span 2" $grow="span 2" />,
    <Box key={6} $gcol="span 2" />,
    <Box key={7} $gcol="span 5" />,
    <Box key={8} $gcol="span 3" />,
    <Box key={9} $gcol="span 3" />,
    <Box key={10} $gcol="span 3" />,
    <Box key={11} $gcol="span 2" />,
    <Box key={12} $gcol="span 5" />,
    <Box key={13} $gcol="span 2" />,
    <Box key={14} $gcol="span 2" $grow="span 3" />,
    <Box key={15} />,
    <Box key={16} $gcol="span 3" />,
    <Box key={17} $gcol="span 2" />,
    <Box key={18} />
  ]

  let tail
  if (modify) {
    tail = [
      <Box key={19} $gcol="span 5" $grow="span 3" />,
      <Box key={20} $gcol="span 2" $grow="span 3" />,
      <Box key={21} $gcol="span 2" $grow="span 2" />,
      <Box key={22} $gcol="span 7" />
    ]
  } else {
    tail = [
      <Box key={19} $gcol="span 5" />,
      <Box key={20} $gcol="span 2" $grow="span 3" />,
      <Box key={21} $gcol="span 5" />,
      <Box key={22} $gcol="span 2" $grow="span 2" />,
      <Box key={23} $gcol="span 5" />,
      <Box key={24} $gcol="span 7" />
    ]
  }
  return [...common, ...tail]
}
