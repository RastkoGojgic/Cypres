/// <reference types="Cypress" />

describe('Test contact us form form WebdriverUni', ()=>{

    beforeEach(function(){
        cy.visit(Cypress.env('webdriver_uni_homepage') + "/Contact-Us/contactus.html")
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.url().should('eq', "http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    })

    it("Should be able to submit a successful submition via Constact-us form", ()=>{
        //cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type(Cypress.env('first_name'))
        cy.get('[name="last_name"]').type("Cole")
        cy.get('[name="email"]').type("j.cole@gmail.com")
        cy.get('textarea.feedback-input').type("I played for Chelsea")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("Should NOT be able to submit a successful submition via Constact-us form as all fields are required", ()=>{
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Cole")
        cy.get('textarea.feedback-input').type("I played for Chelsea")
        cy.get('[type="submit"]').click()
        cy.get('body').contains("Error: all fields are required")
    })
})