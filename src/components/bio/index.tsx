import { useState } from 'react'
import { BioBtn, BioContainer, BioStyled } from './styles'
import { CloseBtn } from '../../containers/choose/styles'
import { discoverDevice } from '../../utils/discoverdevice'
import close from '../../assets/icons/remove.png'

export const Bio = () => {
  const device = discoverDevice()
  const [open, setOpen] = useState(device != 'cel')
  return (
    <BioStyled $open={open}>
      {open ? (
        <BioContainer>
          {device == 'cel' ? (
            <CloseBtn $top="0" $right="0" onClick={() => setOpen(!open)}>
              <img style={{ filter: 'invert(100%)' }} src={close} alt="close" />
            </CloseBtn>
          ) : null}
          <p style={{ marginBottom: '1em' }}>
            Sou filho dos anos 90. Acompanhei a evolução do celular para o
            smartfone, a multiplicação do poder de processamento dos
            computadores e a internet tornando o mundo sempre on-line. Ser um
            desenvolvedor deixou de ser uma realidade distante para ser meu
            cotidiano.
          </p>
          <p>
            Focado em Python e Javascript, venho explorando as possibilidades do
            desenvolvimento web há alguns anos. Tenho um desejo constante por
            aprendizado, e o ritmo acelerado da tecnologia mantém meu interesse
            pela área sempre desperto.
          </p>
        </BioContainer>
      ) : (
        <BioBtn onClick={() => setOpen(!open)}>Bio</BioBtn>
      )}
    </BioStyled>
  )
}
