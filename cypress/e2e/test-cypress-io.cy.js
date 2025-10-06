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
 


