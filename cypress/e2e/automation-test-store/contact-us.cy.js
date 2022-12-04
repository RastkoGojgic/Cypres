/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Test contact us form Automation Store', ()=>{
    it("Should be able to submit a successful submition via Constact-us form", ()=>{
        cy.visit("https://automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        .then((selectedElement)=>{
            cy.log("Selected the following link: " + selectedElement.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Rastko")
        cy.get('#ContactUsFrm_email').type("rastko90@gmail.com")
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Hello, I would like to make an enquiry")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', "Your enquiry has been successfully sent to the store owner!")
    })
})
