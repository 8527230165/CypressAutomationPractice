
describe("RadioButtonsAndCheckbox_Handling",  ()=>{

    it("Radio button interaction", ()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#female').click().should('be.checked')
        cy.get('#male').click().should('be.checked')



    })

    it.only("Checkboxes interaction" , ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#monday').check().should('be.checked')

        cy.get('#monday').uncheck().should('not.be.checked')

        //check all checkboxes
        cy.get(".form-check-label input[type='checkbox']").check().should('be.checked')
  
        cy.get(".form-check-label input[type='checkbox']").uncheck().should('not.be.checked')


    })




})