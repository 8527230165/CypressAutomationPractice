describe('TestSuite',()=>{
    it('DataDrivenTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('orangehrm2.json').then((data)=>{
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()
                if(userdata.username=='Admin' && userdata.password=='admin123'){
                    cy.get('.oxd-topbar-header-title').should('have.text',userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-alert-content').should('have.text',userdata.expected)
                }
                cy.wait(2000)
                cy.log("-------------------")
            });
        })
    })

})