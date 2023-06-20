describe('Test Suite',()=>{

    it('Capture screenshot',()=>{
        cy.visit('https://demo.opencart.com/')
       // cy.screenshot("HomePageNew")
        cy.get('.nav > :nth-child(4) > .nav-link').click()
        cy.get('h2').should('have.text','Mobiles')
        //automatic screenshot & video captured when execte through CLI
    })



})