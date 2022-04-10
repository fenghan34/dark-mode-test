import { useCallback, useLayoutEffect, useState } from 'react'

export const DARK_MODE_CLASS = 'dark-mode'

export const useDarkMode = (initial: boolean | (() => boolean) = false) => {
  const [darkMode, setDarkMode] = useState(initial)

  useLayoutEffect(() => {
    const htmlClassList = document.documentElement.classList

    darkMode
      ? htmlClassList.add(DARK_MODE_CLASS)
      : htmlClassList.remove(DARK_MODE_CLASS)
  }, [darkMode])

  const toggleMode = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode])

  return { darkMode, toggleMode }
}
