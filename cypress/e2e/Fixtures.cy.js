describe('TestSuite',()=>{

    it('FixturesDemo - Direct Access',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('orangehrm.json').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get('.oxd-topbar-header-title').should('have.text',data.expected)
        })  
    })
    let userdata
    before(()=>{
        cy.fixture('orangehrm.json').then((data)=>{
           userdata=data
        })  
    })
    it.only('FixturesDemo - Access through Hooks',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-title').should('have.text',userdata.expected)

    })


})