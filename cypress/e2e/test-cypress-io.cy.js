/// <reference types="cypress" />

describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('https://www.cypress.io/')

    })

    it('Site home page elements', () => {
        cy.contains('button', 'Aceitar').then($btn => {
            if ($btn.is(':visible')) {      
                cy.wrap($btn).click()       
            }
        })

        cy.wait(3000)
        cy.contains('li', 
            'Product',
            'Docs',
            'Community',
            'Company',
            'Pricing'
        )
    })
});
 


/*cy.contains('div.card-body', 'Forms')
            .should('be.visible')
            .click();

        cy.url().should('include', '/forms')
        cy.wait(2000)
        cy.contains('div.header-text', 'Elements')
            .should('be.visible')
            .click();

        cy.wait(2000)
        cy.contains('Text Box')
            .should('be.visible')
            .click();*/