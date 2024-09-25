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
          <p>
            Filosofia, tecnologia, arte. Três pala Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Praesentium, enim eum! Accusantium,
            quo ipsum! Cum quasi perspiciatis, vitae non magni corrupti
            deserunt, porro nemo, corporis labore modi ad quibusdam. Eius!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, enim eum! Accusantium, quo ipsum! Cum quasi
            perspiciatis, vitae non magni corrupti deserunt, porro nemo,
            corporis labore modi ad quibusdam. Eius!
          </p>
        </BioContainer>
      ) : (
        <BioBtn onClick={() => setOpen(!open)}>Bio</BioBtn>
      )}
    </BioStyled>
  )
}
