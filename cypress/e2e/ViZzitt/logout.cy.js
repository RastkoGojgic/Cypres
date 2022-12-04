/// <reference types="cypress" />

describe('Test Logout option on VizZit website', ()=>{
    beforeEach(function(){  
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
    })

    it('Successfully logout from the VizZit website', ()=>{
        cy.logout()
    })
})