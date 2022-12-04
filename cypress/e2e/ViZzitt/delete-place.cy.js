/// <reference types="cypress" />

describe('Test delete place functionality on VizZit website', ()=>{
    before(function(){
        cy.visit('/')
        cy.get('.nav').find('a').contains('Login').click()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get("a[href='/places/new']").click()
        cy.url().should('contain', 'https://vizzitt.onrender.com/places/new')
        cy.addNewPlacePopulateInputs("New Random Place", "Belgrade", "22", "A place in Belgrade", "cypress/fixtures/Belgrade.jpg")
        cy.logout()
    })

    it('Try to delete a place whilst not logged in', ()=>{
        cy.visit('/')
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get('.card').contains('New Random Place').parent().find('a').click({force:true})
        cy.get('.btn-success').should('not.exist')
    })

    
    it('Try to delete a place created by someone else', ()=>{
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get('.card').contains('Muzej Primenjene Umetnosti').parent().find('a').click({force:true})
        cy.get('.btn-danger').should('not.exist')
    })

    it('Seuccessfully delete a place', ()=>{
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get('.card').contains('New Random Place').parent().find('a').click({force:true})
        cy.get('.btn-danger').contains("Delete").click()
        cy.get('.alert').should('contain', 'Successfully deleted a place')
    })
})