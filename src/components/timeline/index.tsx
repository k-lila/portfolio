import { useState } from 'react'
import {
  Spacer,
  TimelineBtn,
  TimelineContainer,
  TimelineStyled
} from './styles'
import { CloseBtn } from '../../containers/choose/styles'
import { discoverDevice } from '../../utils/discoverdevice'
import close from '../../assets/icons/remove.png'

export const Timeline = () => {
  const device = discoverDevice()
  const [open, setOpen] = useState(device != 'cel')

  return (
    <TimelineStyled $open={open}>
      {open ? (
        <TimelineContainer>
          {device == 'cel' ? (
            <CloseBtn onClick={() => setOpen(!open)}>
              <img style={{ filter: 'invert(100%)' }} src={close} alt="close" />
            </CloseBtn>
          ) : null}
          <p>2022/2024</p>
          <p>Full Stack Python</p>
          <Spacer $timer={0.3 * 7} />
          <p>2017/2019</p>
          <p>Mestrado em Filosofia</p>
          <Spacer $timer={0.3 * 6} />
          <p>2009/2014</p>
          <p>Graduação em Filosofia</p>
          <Spacer $timer={0.3 * 5} />
          <p>2013</p>
          <p>Bolsista de iniciação científica</p>
          <Spacer $timer={0.3 * 4} />
          <p>2012</p>
          <p>Professor voluntário</p>
          <Spacer $timer={0.3 * 3} />
          <p>2011</p>
          <p>Bolsista de iniciação científica</p>
          <Spacer $timer={0.3 * 2} />
          <p>2009</p>
          <p>Graduação em Filosofia</p>
          <Spacer $timer={0.3 * 1} />
        </TimelineContainer>
      ) : (
        <TimelineBtn onClick={() => setOpen(!open)}>Timeline</TimelineBtn>
      )}
    </TimelineStyled>
  )
}
