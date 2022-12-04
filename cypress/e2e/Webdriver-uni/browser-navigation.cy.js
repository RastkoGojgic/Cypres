/// <reference types="cypress" />

describe("Preform navigation on webdriver uni page", ()=>{
    it("Succesffully navigate to todolist and go back to the home page", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('a[href="To-Do-List/index.html"]').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
    })
})