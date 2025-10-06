/// <reference types="cypress" />

describe('OrangeHRM tests', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]')
            .should('be.visible')
            .type('Admin')
        cy.get('input[placeholder="Password"]')
            .should('be.visible')
            .type('admin123')
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        cy.contains('span', 'Dashboard').should('be.visible')
        cy.contains('span', 'Admin').click()
        cy.url().should('include', '/admin/viewSystemUsers')
    })

    it("Try to add new user, then cancel the operation", () => {
        cy.contains('button', 'Add')
            .should('be.visible')
            .click()

        cy.contains('label', 'User Role')
            .parent()
            .siblings('div')
            .find('.oxd-select-text-input')
            .click();
        cy.contains('.oxd-select-dropdown > *', 'ESS').click();

        cy.get('input[placeholder="Type for hints..."]')
            .should('be.visible')
            .type('test1')

        cy.contains('label', 'Status')
            .parent()
            .siblings('div')
            .find('.oxd-select-text-input')
            .click();
        cy.contains('.oxd-select-dropdown > *', 'Enabled').click();

        cy.contains('label', 'Username')
            .parent()
            .siblings('div')
            .find('input')
            .type('usertestpamela');

        cy.contains('label', 'Password')
            .parent()
            .siblings('div')
            .find('input')
            .type('P234067am!');

        cy.contains('label', 'Confirm Password')
            .parent()
            .siblings('div')
            .find('input')
            .type('P234067am!');

        cy.contains('button', 'Cancel')
            .should('be.visible')
            .click();

        cy.url().should('include', '/admin/viewSystemUsers')
    })

    it("Try to search for a user", () => {
        cy.contains('label', 'Username')
            .parent()
            .siblings('div')
            .find('input', '.oxd-input')
            .type('omkar');

        cy.get('.oxd-button--secondary')
            .eq(1)
            .click();

        cy.wait(4000)

        cy.get('.oxd-table-row')
            .contains('.oxd-table-cell div', 'omkar')
            .parent()
            .siblings()
            .eq(1)
            .should('contain.text', 'omkar');
    })
})