import { PhotoStyled } from './styles'
import photo from '../../assets/foto.png'

export const Photo = () => {
  return (
    <PhotoStyled>
      <img src={photo} alt="Foto pessoal" />
    </PhotoStyled>
  )
}
