describe('CSSLocators', ()=>{
    it('Login' , () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
       
        cy.wait(500)
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.url().should('contain','dashboard').
        and('not.contain','auth')
    })



})