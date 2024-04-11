import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledGrid, GridContainer } from './StyledGrid.styles'
import { RootReducer } from '../../store'
import { selectDevice } from '../../store/reducers/selectdevice'
import { sectionLayouts } from './tools/sectionLayouts'
import { discoverDevice } from '../../utils'
import boxGen from './tools/boxGen'
import boxAdder from './tools/boxAdder'

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
  let box_list = boxGen(section)
  box_list = boxAdder(section, device, box_list)

  return (
    <GridContainer>
      <StyledGrid $columns={cols} $rows={rows}>
        {box_list}
      </StyledGrid>
    </GridContainer>
  )
}

export default Grid
