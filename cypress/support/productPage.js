class productPage{
    validarCarrinho(){
        cy.get('#product-addtocart-button').click()
        cy.wait(3600)
        cy.get('.showcart').click()
        cy.get('.block-content').should('contains.text', 'Proceed to Checkout')
    }

    selecionarItem(){
        cy.get('.name').contains('Balboa Persistence Tee').click()
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#option-label-color-93-item-53').click()
    }

    selecionaProdutoMasc(){
        cy.get('#ui-id-5 > .ui-menu-icon').wait(100).trigger('mouseover')
        cy.get('#ui-id-18').wait(100).trigger('mouseover')
        cy.get('#ui-id-24').wait(100).click()
        cy.get('.name').contains('Arcadio Gym Short').click()
        cy.get('#option-label-size-143-item-178').click()
        cy.get('#option-label-color-93-item-49').click()
    }

    adicionarComentario(){
        cy.get('#tab-label-reviews-title').click()
        
        cy.get('#Rating_4_label').click({force:true})
        
        cy.get('.review-field-nickname').type('Evans')
        cy.get('.review-field-summary').type('Review')
        cy.get('.review-field-text').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
        cy.get('.actions-primary > .action').click()
    }
}
export default new productPage();