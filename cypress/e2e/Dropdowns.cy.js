describe('Dropdown Interaction' , ()=>{

    it.skip('Dropdown selection', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select('Italy').should('have.value','6')


    })

    it.skip('Dropdown select by typing' ,()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('input.select2-search__field').type('Italy').type('{enter}')
    })


    it.skip('Non-Dynamic Autosuggest Dropdown selection' ,()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('input#searchInput').click().type('Delhi')
        cy.get('div.suggestions-dropdown').contains('Delhi University').click()
        
    })

    it('Dynamic Autosuggest Dropdown selection' ,()=>{
        cy.visit('https://google.com/')
        cy.get("textarea[name='q']").click().type('cypress automation')
        //cy.get("div[role='presentation']").contains('cypress automation jobs').click()
        cy.wait(1000)
        cy.get(".wM6W7d>span").should('have.length',12)
        cy.get(".wM6W7d>span").each(($el,index,$list) =>{
            if($el.text()=='cypress automation jobs'){
                cy.wrap($el).click()
            }
        })
        cy.get("textarea[name='q']").should('have.value','cypress automation jobs')
        
    })


})