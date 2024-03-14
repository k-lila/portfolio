import { ReactNode } from 'react'
import { FirstLayer } from './FirstLayer'
import { BordersStyled } from './BorderStyled.styles'

type PlaneProps = {
  children: ReactNode
  trigger: string
}

const Plane: React.FC<PlaneProps> = ({ children, trigger }) => {
  return (
    <>
      <FirstLayer trigger={trigger}>
        {children}
        <BordersStyled
          trigger={trigger}
          $width="90%"
          $height="90%"
          $zheight="100px"
          $wborder="5px"
        />
        <BordersStyled
          trigger={trigger}
          $width="87%"
          $height="87%"
          $zheight="75px"
          $wborder="2px"
        />
        <BordersStyled
          trigger={trigger}
          $width="85%"
          $height="85%"
          $zheight="50px"
          $wborder="1px"
        />
      </FirstLayer>
    </>
  )
}

export default Plane
