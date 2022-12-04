/// <reference types="cypress" />

describe('Test comments functionality on VizZit website', ()=>{
    it('Successfully leave a comment on VizZit website', ()=>{
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('[for="first-rate4"]').click()
        cy.get('#body').type('This is great place')
        cy.get('.btn').contains('Submit').click()
        cy.get('form').next().as('commentContainer')
        cy.get('@commentContainer').should('contain', 'rastko')
        cy.get('@commentContainer').should('contain', 'This is great place')
        cy.get('.starability-result').should("have.attr", "data-rating", 4)
    })

    it('Try to delete a comment on VizZit website without loging in', ()=>{
        cy.visit('/')
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('.btn-sm').should('not.exist')
    })

    it('Successfully delete a comment on VizZit website', ()=>{
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('.btn-sm').contains('Delete').click()
        cy.get('.alert').should('contain', 'Successfully deleted a review')

    })

    it('Try to leave a comment on VizZit website without comment body text', ()=>{
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('[for="first-rate4"]').click()
        cy.get('.btn').contains('Submit').click()
        cy.get('#body').should("have.css", "border-color", "rgb(220, 53, 69)")
    })

    it('Try to leave a comment on VizZit website without logging in', ()=>{
        cy.visit('/')
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('.card-title').should('contain', 'Kalemegdanska Tvrđava')
        cy.get('.btn-success').should('not.exist')
    })

    it('Try to delete a comment on VizZit website that was posted by someone else', ()=>{
        cy.NavigateToLoginPage()
        cy.populateLoginForm("rastko", "juventus1")
        cy.get('.card').contains('Dogma Brewery').parent().find('a').click({force:true})
        cy.get('.btn-sm').should('not.exist')
    })
})