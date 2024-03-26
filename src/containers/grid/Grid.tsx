import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Box from '../../components/box/box'
import StyledGrid from './StyledGrid.styles'
import { RootReducer } from '../../store'
import { selectDevice } from '../../store/reducers/selectdevice'
import sectionLayouts from './sectionLayout'
import { discoverDevice } from '../../utils'

const Grid = () => {
  const dispatch = useDispatch()
  const section = useSelector((state: RootReducer) => state.select.section)
  const device = useSelector((dev: RootReducer) => dev.device.device)

  useEffect(() => {
    const handleResize = () => {
      dispatch(selectDevice(discoverDevice()))
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch])

  const cols = sectionLayouts[section][device].columns
  const rows = sectionLayouts[section][device].rows

  const boxes = Array.from({ length: 30 }, (_, index) => (
    <Box key={index}>{index}</Box>
  ))

  boxes[1] = (
    <Box key={1} $grow="span 2">
      1
    </Box>
  )
  boxes[2] = (
    <Box key={2} $gcol="span 2">
      2
    </Box>
  )
  boxes[9] = (
    <Box key={9} $gcol="span 2">
      9
    </Box>
  )

  boxes[20] = (
    <Box key={20} $gcol="span 3" $grow="span 3">
      20
    </Box>
  )

  boxes[14] = (
    <Box key={14} $gcol="span 2">
      14
    </Box>
  )
  if (section == 'about') {
    boxes[7] = (
      <Box key={7} $gcol="span 2" $bgcolor="red">
        7
      </Box>
    )

    boxes[14] = (
      <Box key={14} $gcol="span 1">
        14
      </Box>
    )

    boxes[5] = (
      <Box key={5} $bgcolor="blue">
        5
      </Box>
    )
  }
  if (section == 'projects') {
    boxes[5] = (
      <Box key={5} $bgcolor="red">
        5
      </Box>
    )
  }

  return (
    <StyledGrid $columns={cols} $rows={rows}>
      {boxes}
    </StyledGrid>
  )
}

export default Grid
