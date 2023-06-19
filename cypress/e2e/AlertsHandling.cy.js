describe('Alert Handling', ()=>{

    it.skip('JS ALert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        cy.get("#result").should('have.text','You successfully clicked an alert')
    })
    it('JS Confirm ALert - Ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.get("#result").should('have.text','You clicked: Ok')
    })
    it('JS Confirm ALert - Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
       
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false)

        cy.get("#result").should('have.text','You clicked: Cancel')
    })
    it('JS Prompt ALert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        
        cy.get("button[onclick='jsPrompt()']").click()
       // cy.on('window:prompt',()=> false)
       
        cy.get("#result").should('contain','You entered:')
    })
    it.only('Authenticated ALert',()=>{
       
       // first approach
       // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}})
               

       //second approach
       cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get(".example>p").should('have.contain',"Congratulations")
    })


})