import 'cypress-iframe'

describe('Frames Handling', ()=>{

    it('Approach 1' , () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        let iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe.clear().type("Welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })
    it('Approach 2 - By using Custom commands' , () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr')
        .clear().type("Welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })
    it.only('Approach 3 - By using Cypress-Iframe plugin' , () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })

})