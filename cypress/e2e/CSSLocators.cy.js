describe('CSSLocators', ()=>{
    it('Login' , () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.waitUntil(() => {
            cy.get("input[placeholder='Username']").should('be.visible');
          }, { timeout: 900 });
     
        //cy.wait(1000)
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    })



})