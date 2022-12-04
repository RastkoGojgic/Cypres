class HomePage_PO{
    visitHomepage(){
        cy.visit(Cypress.env('webdriver_uni_homepage'), {timeout: 6000})
    }

    clickOn_CantactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('contain', "Contact-Us")
    }
    
}

export default HomePage_PO