export function discoverDevice() {
  if (window.innerWidth < 768) {
    return 'cel'
  } else if (768 <= window.innerWidth && window.innerWidth <= 1024) {
    return 'tab'
  } else {
    return 'pc'
  }
}
