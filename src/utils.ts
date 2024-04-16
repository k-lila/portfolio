export function discoverDevice() {
  if (window.innerWidth < 768) {
    return 'cel'
  } else if (768 <= window.innerWidth && window.innerWidth <= 1024) {
    return 'tab'
  } else {
    return 'pc'
  }
}

export function preLoader() {
  const logos = [
    './logos/add_call_FILL0_wght400_GRAD0_opsz24.png',
    './logos/content_copy_FILL0_wght400_GRAD0_opsz24.png',
    './logos/GitHub_Logo.png',
    './logos/GitHub_Logo_White.png',
    './logos/github-mark.png',
    './logos/github-mark-white.png',
    './logos/home_pin_FILL0_wght400_GRAD0_opsz24.png',
    './logos/LI-In-Bug.png',
    './logos/LI-Logo.png',
    './logos/mail_FILL0_wght400_GRAD0_opsz24.png',
    './logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png'
  ]
  const skills = [
    './foto.jpg',
    './skills/bootstrap-logo.svg',
    './skills/CSS3_logo_and_wordmark.svg',
    './skills/HTML5_logo_and_wordmark.svg',
    './skills/Python-logo-notext.svg',
    './skills/React-icon.svg',
    './skills/reduxlogo.svg',
    './skills/sass-logo-7702.svg',
    './skills/styled-components-1.svg',
    './skills/ts-logo-512.svg',
    './skills/Unofficial_JavaScript_logo_2.svg'
  ]

  const images = [...logos, ...skills]

  images.forEach((image_path) => {
    const img = new Image()
    img.src = image_path
    img.onerror = () => {
      console.log(false, image_path)
    }
  })
}
