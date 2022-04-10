import { DARK_MODE_CLASS } from 'hooks/useDarkMode'

describe('Dark mode', () => {
  it('changes HTML class when clicking the toggle button', () => {
    cy.visit('/')

    cy.get('html').should('not.have.class', DARK_MODE_CLASS)

    cy.get('.app__dark-mode-btn').click()
    cy.get('html').should('have.class', DARK_MODE_CLASS)

    cy.get('.app__dark-mode-btn').click()
    cy.get('html').should('not.have.class', DARK_MODE_CLASS)

    cy.get('.app__dark-mode-btn').click()
    cy.get('html').should('have.class', DARK_MODE_CLASS)
  })
})
