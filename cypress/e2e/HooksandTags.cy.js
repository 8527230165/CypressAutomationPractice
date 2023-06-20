//Hooks
//before - executed only once before first it block
//beforeEach -executed mulitple times before every it block
//after - executed only once after last it block
//afterEach - executed mulitple times after every it block


describe('TestSuite',()=>{

    before(()=>{
        cy.log("----  launch application ----")
    })
    beforeEach(()=>{
        cy.log("----  launch URL ----")
    })
    after(()=>{
        cy.log("----  quit browser ----")
    })
    afterEach(()=>{
        cy.log("----  logout application ----")
    })
    it('Search',()=>{
        cy.log("---- seacrh ----")
    })
    it.skip('advanced Search',()=>{
        cy.log("---- advanced seacrh ----")
    })
    it.only('Listing products',()=>{
        cy.log("---- listing products ----")
    })
})