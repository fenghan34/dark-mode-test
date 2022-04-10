import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DARK_MODE_CLASS } from 'hooks/useDarkMode'
import {
  darkModeIconName,
  DARK_MODE_ICON_COLOR,
  defaultModeIconName,
  ToggleThemeBtn,
} from '../ToggleThemeBtn'

describe('ToggleThemeBtn', () => {
  test('render ToggleThemeBtn component', () => {
    render(<ToggleThemeBtn />)

    const btn = screen.getByRole('button')
    const iconSvg = btn.firstChild
    const htmlClassList = document.documentElement.classList

    expect(iconSvg).toBeValid()
    expect(iconSvg).toHaveAttribute('data-icon', defaultModeIconName)
    expect(iconSvg).not.toHaveAttribute('color', DARK_MODE_ICON_COLOR)
    expect(htmlClassList).not.toContain(DARK_MODE_CLASS)
  })

  test('click toggle button to change theme', async () => {
    render(<ToggleThemeBtn />)

    const btn = screen.getByRole('button')
    const iconSvg = btn.firstChild
    const htmlClassList = document.documentElement.classList

    await userEvent.click(btn)

    expect(iconSvg).toBeValid()
    expect(iconSvg).toHaveAttribute('data-icon', darkModeIconName)
    expect(iconSvg).toHaveAttribute('color', DARK_MODE_ICON_COLOR)
    expect(htmlClassList).toContain(DARK_MODE_CLASS)

    await userEvent.click(btn)

    expect(iconSvg).toBeValid()
    expect(iconSvg).toHaveAttribute('data-icon', defaultModeIconName)
    expect(iconSvg).not.toHaveAttribute('color', DARK_MODE_ICON_COLOR)
    expect(htmlClassList).not.toContain(DARK_MODE_CLASS)

    await userEvent.click(btn)

    expect(iconSvg).toBeValid()
    expect(iconSvg).toHaveAttribute('data-icon', darkModeIconName)
    expect(iconSvg).toHaveAttribute('color', DARK_MODE_ICON_COLOR)
    expect(htmlClassList).toContain(DARK_MODE_CLASS)
  })
})
