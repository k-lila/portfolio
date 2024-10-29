import { useState } from 'react'
import { BioBtn, BioContainer, BioStyled } from './styles'
import { CloseBtn } from '../../containers/choose/styles'
import { discoverDevice } from '../../utils/discoverdevice'

export const Bio = () => {
  const device = discoverDevice()
  const [open, setOpen] = useState(device != 'cel')
  return (
    <BioStyled $open={open}>
      {open ? (
        <BioContainer>
          {device == 'cel' ? (
            <CloseBtn $top="0" $right="0" onClick={() => setOpen(!open)}>
              <span className="material-symbols-outlined">remove</span>
            </CloseBtn>
          ) : null}
          <p style={{ marginBottom: '1em' }}>
            Sou filho dos anos 90. Acompanhei a evolução do celular para o
            smartfone, a multiplicação do poder de processamento dos
            computadores e a internet tornando o mundo sempre on-line. Hoje, ser
            um desenvolvedor web é uma realidade, não uma possibilidade
            distante.
          </p>
          <p>
            Focado em Python e Javascript, venho explorando as possibilidades do
            desenvolvimento web há alguns anos. Como tenho um desejo constante
            por aprendizado, o ritmo acelerado da tecnologia mantém meu
            interesse pela área sempre animado.
          </p>
        </BioContainer>
      ) : (
        <BioBtn onClick={() => setOpen(!open)}>Bio</BioBtn>
      )}
    </BioStyled>
  )
}
