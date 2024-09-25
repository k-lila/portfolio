import { useLayoutEffect, useState } from 'react'
import { Modal } from '../modal'
import { discoverDevice } from '../../utils/discoverdevice'
import { ChooseGrid, CloseBtn } from './styles'
import { About } from '../about'
import { Work } from '../work'
import { EntranceStyled } from '../entrance/styles'

export const Modals = () => {
  const [about, setAbout] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [work, setWork] = useState(false)
  const [workVisible, setWorkVisible] = useState(false)
  const [device, setDevice] = useState(discoverDevice())

  useLayoutEffect(() => {
    const resizer = () => {
      setDevice(discoverDevice())
    }
    window.addEventListener('resize', resizer)
    return () => window.removeEventListener('resize', resizer)
  }, [])

  const openWork = () => {
    setWork(true)
    setWorkVisible(true)
  }

  const closeWork = () => {
    setWorkVisible(false)
    setTimeout(() => {
      setWork(false)
    }, 300)
  }

  const openAbout = () => {
    setAbout(true)
    setAboutVisible(true)
  }

  const closeAbout = () => {
    setAboutVisible(false)
    setTimeout(() => {
      setAbout(false)
    }, 300)
  }

  return (
    <>
      {about ? (
        <Modal $open={aboutVisible} $side={device == 'pc' ? 'left' : ''}>
          <CloseBtn onClick={closeAbout}>
            <span className="material-symbols-outlined">close</span>
          </CloseBtn>
          <About />
        </Modal>
      ) : null}
      {work ? (
        <Modal $open={workVisible} $side={device == 'pc' ? 'right' : ''}>
          <CloseBtn onClick={closeWork}>
            <span className="material-symbols-outlined">close</span>
          </CloseBtn>
          <Work />
        </Modal>
      ) : null}
      <ChooseGrid $open className="modals">
        <div
          style={{ gridColumn: `${device == 'pc' ? 'span 5' : 'span 3'}` }}
        />
        <div />
        <EntranceStyled onClick={openAbout}>
          <h1>quem sou</h1>
        </EntranceStyled>
        {device == 'pc' ? (
          <div />
        ) : (
          <>
            <div />
            <div style={{ gridColumn: 'span 3' }} />
            <div />
          </>
        )}
        <EntranceStyled onClick={openWork}>
          <h1>o que faço</h1>
        </EntranceStyled>
        <div />
        <div
          style={{ gridColumn: `${device == 'pc' ? 'span 5' : 'span 3'}` }}
        />
      </ChooseGrid>
    </>
  )
}
