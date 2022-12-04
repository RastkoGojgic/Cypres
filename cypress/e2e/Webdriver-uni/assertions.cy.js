/// <reference types="cypress" />

describe("Preform assertion on webdriver uni page", ()=>{
    it("Use .document and chai assertions to check charset property", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.a.property', 'charset', 'UTF-8')
        cy.title().should('contain', "WebDriver")
    })
})