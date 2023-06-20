describe('Custom Commands',()=>{

    it('Handling Links',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        //cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()
        //cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')

        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')
    })
    it('Overwriting existing commands',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.wait(1000)
        cy.clickLink('APPLE MACBOOK PRO 13-inch')
        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')
    })
   
})