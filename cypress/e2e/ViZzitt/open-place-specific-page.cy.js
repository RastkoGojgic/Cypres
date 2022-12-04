/// <reference types="cypress" />

describe('Test view button functionality on VizZit website', ()=>{
    it('Successfully open a place-specific page using view button', ()=>{
        cy.visit('/')
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('.card-title').should('contain', 'Kalemegdanska Tvrđava')
    })
})