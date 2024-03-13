import { ReactNode } from 'react'

import { FirstLayer } from './FirstLayer'
import { BordersStyled } from './BorderStyled.styles'

const Plane: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <FirstLayer trigger={'animationIn'}>
        {children}
        <BordersStyled
          $width="90%"
          $height="90%"
          $zheight="25px"
          $wborder="5px"
        />
        <BordersStyled
          $width="87%"
          $height="87%"
          $zheight="17px"
          $wborder="2px"
        />
        <BordersStyled
          $width="85%"
          $height="85%"
          $zheight="10px"
          $wborder="1px"
        />
      </FirstLayer>
    </>
  )
}

export default Plane
