class accountPage{
    criarConta(){
        cy.get('.panel > .header').contains('Create an Account').click()
        cy.get('.base').should('contains.text', 'Create New Customer Account')
    }
    preencheInfos(){
        const password = () => Cypress._.random(0,1e99)
        const pw = password()
        //First Name
        cy.get('#firstname').type('Earl ')
        //Last Name
        cy.get('#lastname').type('Wade')
        //Email
        const rdEmail = () => Cypress._.random(0,1e6)
        const em = rdEmail()
        cy.get('#email_address').type(em + '@example.com')
        //Password
        cy.get('#password').type(pw)
        //Password confirmation
        cy.get('#password-confirmation').type(pw)
    }

    validaCriacaoConta(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success > div').should('contains.text', 'Thank you for registering with Main Website Store.')
    }
}
export default new accountPage();