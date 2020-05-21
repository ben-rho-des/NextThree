/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      cy.get('h1')
        .should('be.visible')
        .should('have.html', 'Prototype <strong>#020</strong>')

      cy.get('h2')
        .should('be.visible')
        .should('have.text', 'Flow')
    });
  })
})
