import 'cypress-file-upload'
import 'cypress-xpath'

describe('File Upload Handling', ()=>{
    it('Single File Upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.xlsx')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')


    })
    it(' File Upload - Upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.xlsx',fileName:'newfile.xlsx'})
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')

    })
    it(' File Upload - Drag and Drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test1.xlsx',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.xlsx')

    })
    it('Mulitple Files Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test1.xlsx','example.json'])
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
        

    })
    it.only(' File Upload - Shadow DOM',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
       
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('test1.xlsx')
        cy.wait(2000)
        cy.get(".smart-item-name",{includeShadowDom:true}).should('contain.text','test1.xlsx')
    })
})