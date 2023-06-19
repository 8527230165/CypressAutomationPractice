describe('XPathLocators', ()=>{
    it('Login' , () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
       
        cy.wait(1000)
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()
    })



})