import { ToggleBtnStyled } from './styles'

type ToggleBtnProps = {
  btnNum: number
  toggle: number
  className?: string
  setToggle: (btnNumber: number) => void
  resetToggle: () => void
}

const ToggleBtn = ({
  btnNum,
  toggle,
  className,
  setToggle,
  resetToggle
}: ToggleBtnProps) => {
  return (
    <>
      {toggle == btnNum ? (
        <ToggleBtnStyled
          className={className}
          $toggle={toggle == btnNum}
          onClick={() => resetToggle()}
        >
          <i className="bi bi-dash"></i>
        </ToggleBtnStyled>
      ) : (
        <ToggleBtnStyled
          className={className}
          $toggle={toggle == btnNum}
          onClick={() => setToggle(btnNum)}
        >
          <i className="bi bi-plus"></i>
        </ToggleBtnStyled>
      )}
    </>
  )
}

export default ToggleBtn
