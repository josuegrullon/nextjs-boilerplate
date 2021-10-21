import { useMediaQuery } from 'react-responsive'

const ResponsiveDetector = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return {
    isBigScreen,
    isPortrait,
    isRetina,
    isTabletOrMobile,
    isDesktopOrLaptop,
    isMobile
  }
}

export default ResponsiveDetector