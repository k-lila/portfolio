import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledGrid, GridContainer } from './styles'
import { RootReducer } from '../../store'
import { selectDevice } from '../../store/reducers/selectdevice'
import { sectionLayouts } from './tools/layouts'
import { discoverDevice } from '../../utils'
import boxGen from './tools/boxes'

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
  const box_list = boxGen(section, device)

  return (
    <GridContainer>
      <StyledGrid $columns={cols} $rows={rows}>
        {box_list}
      </StyledGrid>
    </GridContainer>
  )
}

export default Grid
