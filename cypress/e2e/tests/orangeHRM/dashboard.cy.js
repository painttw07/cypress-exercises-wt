/// <reference types="cypress" />

describe('OrangeHRM Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('h5', 'Login')
            .should('be.visible')
        cy.get('input[placeholder="Username"]')
            .should('be.visible')
            .type('Admin')
        cy.get('input[placeholder="Password"]')
            .should('be.visible')
            .type('admin123')
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()
    })

    it('Verify Dashboard Page', () => {
        cy.contains('h6', 'Dashboard').toBeVisible()





    })
})