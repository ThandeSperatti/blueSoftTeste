class checkoutPage{
    realizarCheckout(){
        cy.get('#top-cart-btn-checkout').click()
        cy.wait(360)
        //Email
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('craig.evans@example.com')
        //First Name
        cy.get('[name="shippingAddress.firstname"]').type('Craig')
        //Last Name
        cy.get('[name="shippingAddress.lastname"]').type('Evans')
        //Company
        cy.get('[name="shippingAddress.company"]').type('BlueSoft')
        //Address
        cy.get('.street > .control > [name="shippingAddress.street.0"]').type('247 Hogan St')
        //City
        cy.get('[name="shippingAddress.city"]').type('Manhattan')
        //State/Province
        cy.get('[name="shippingAddress.region_id"] > .control > .select').select('New York')
        //Zip/Postal Code
        cy.get('[name="shippingAddress.postcode"]').type('10001')
        //Phone Number
        cy.get('[name="shippingAddress.telephone"]').type('(624)658-9914')
        //Shipping Method
        cy.get(':nth-child(2) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.get('#billing-address-same-as-shipping-checkmo').click()
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()

    }
    
    validarCompra(){
        cy.get('.base').should('contains.text', 'Thank you')
        cy.get('.checkout-success').should('contains.text', 'Your order')
    }
}
export default new checkoutPage();
