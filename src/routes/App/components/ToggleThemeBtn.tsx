import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'hooks/useDarkMode'

export const darkModeIconName = faSun.iconName
export const defaultModeIconName = faMoon.iconName

export const DARK_MODE_ICON_COLOR = '#FFA500'

export const ToggleThemeBtn = () => {
  const { darkMode, toggleMode } = useDarkMode()

  return (
    <button
      className="app__dark-mode-btn icon level-right"
      onClick={toggleMode}
    >
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        color={darkMode ? DARK_MODE_ICON_COLOR : undefined}
      />
    </button>
  )
}
