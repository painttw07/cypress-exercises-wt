/// <reference types="cypress" />

describe('OrangeHRM Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Try to Log In ', () => {

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

        cy.wait(2000)

    },
    )
    it('Try to Log In with invalid credentials', () => {

        cy.get('input[placeholder="Username"]')
            .should('be.visible')
            .type('Admin123')

        cy.get('input[placeholder="Password"]')
            .should('be.visible')
            .type('admin123')

        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        cy.get('div[role="alert"]')
            .contains('Invalid credentials')
            .should('be.visible')

        cy.wait(2000)

    },
    )




    //https://buggy.justtestit.org/
    //http://uitestingplayground.com/
});