import 'cypress-xpath'
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'


describe('Mouse Operations Handling', ()=>{
    it('Mouse Hover',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get('.nav > :nth-child(1) > .dropdown-menu').should('be.visible')
        
    })
    it('Right Click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
       //approach 1
       // cy.get('.context-menu-one').trigger('contextmenu')
        //approach 2
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-list').should('be.visible')
    })
    it('Double Click',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')
        //approach 1
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        //approach 2
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()

        cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World!')
       
    })
    it('Drag and Drop using plugin',()=>{
        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106',{force:true})
    })
    it.only('Scrolling Page',()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration:2000})
    })
})
