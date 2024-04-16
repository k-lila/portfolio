import { useEffect, useState } from 'react'
import { Img, ImgContainer } from './PhotoStyled.styles'

const Photo = () => {
  const [display, setdisplay] = useState('none')
  useEffect(() => {
    setTimeout(() => {
      setdisplay('block')
    }, 300)
  }, [])
  return (
    <ImgContainer $display={display}>
      <Img src="./foto.jpg" />
    </ImgContainer>
  )
}

export default Photo
