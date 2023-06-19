describe('Tabs Handling', ()=>{

    it('Approach 1 - Remove target attribute' , () =>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr','target').click()
        
        cy.url().should('contain','new')
        cy.go('back')

    })
    it.only('Approach 2 - Getting href attribute' , () =>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((ele)=>{
            let url=ele.prop('href')
            cy.visit(url)
        })
        
        cy.url().should('contain','new')
        cy.go('back')

    })



})