
describe('Login Validation Tests', () => {

    it('Valid Login Test', () => {
        cy.visit('https://sridharbandi.github.io/forms/')
        cy.get('#email').type('test@test.com')
        cy.get('#password').type('Test@123')
        cy.contains('Login').click()
        cy.contains('Logout').should('be.visible')
    })

});