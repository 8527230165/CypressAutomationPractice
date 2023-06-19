import 'cypress-xpath'

describe('Tables Handling', ()=>{

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get("input[name='username']").type('demo')
        cy.get("input[name='password']").type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:nth-child(1)>a").click()
    })
    it('Count Rows & Columns',()=>{
        cy.get(".table-responsive>table>thead>tr>td").should('have.length','7')
        cy.get(".table-responsive>table>tbody>tr").should('have.length','10') 
    })
    it('All Data from Row & Column in first page',()=>{
        
        cy.get(".table-responsive>table>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
    it.only('All Data from Row & Column in pagination',()=>{
        let totalpages=3
        /*cy.get("#form-customer>.row>div:nth-child(2)").then((e)=>{
            let paginationtext=e.text()
            totalpages=paginationtext.substring(paginationtext.indexOf("(")+1,paginationtext.indexOf(" Pages"))
            cy.log("Total pages are : "+totalpages)
        })*/
        
        for(let i=1;i<=totalpages;i++){
            if(totalpages>1){
                cy.log("Active page is : "+i)
                //cy.get(".pagination>li:nth-child("+i+")").click()
                cy.xpath("//ul[@class='pagination']//li//span[contains(text(),'"+i+"')] | // a[contains(text(),'"+i+"')]").click()
                cy.wait(2000)
                cy.get(".table-responsive>table>tbody>tr")
                    .each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })

            }

        }
    })
    
   

})