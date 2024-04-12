class menuPage{

    acessarSite(){
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.logo > img').should('be.visible')
    }

    consultarShirt(){
        cy.get('#search').wait(360).type('shirt')
        cy.get('#qs-option-7')
        cy.contains('span', 'shirt that blue').click()
        cy.get('.base').should('contains.text', 'Search results for:')
    }
}
export default new menuPage();