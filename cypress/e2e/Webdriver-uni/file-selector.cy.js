/// <reference types="cypress" />

describe('Test file upload via webdriver uni', ()=>{
    it('Succesfully upload a file', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'File-Upload')
        cy.get('#myFile').selectFile("cypress/fixtures/cat.jpg")
        cy.get('#submit-button').click()
    })

    it.only('Don\'t upload a file', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'File-Upload')
        cy.get('#submit-button').click()
        cy.on('window:alert', (string)=>{
            expect(string).to.eq('You need to select a file to upload!')
        })
    })
})