/// <reference types="cypress" />

describe('Alias and invoke', ()=>{
    it('Validate product thumbnail', ()=>{
        cy.visit('https://automationteststore.com/')

        cy.get('.thumbnail').should('have.length', 16)
        cy.get('a[href="#"]').should('have.attr', 'class', 'productcart')
    })
})