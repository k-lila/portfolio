import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StyledGrid from './StyledGrid.styles'
import { RootReducer } from '../../store'
import { selectDevice } from '../../store/reducers/selectdevice'
import sectionLayouts from './sectionLayout'
import { discoverDevice } from '../../utils'
import boxGen from './utils/boxGen'

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
  const boxes = boxGen(section, device)

  return (
    <StyledGrid $columns={cols} $rows={rows}>
      {boxes}
    </StyledGrid>
  )
}

export default Grid
