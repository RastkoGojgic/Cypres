/// <reference types="cypress" />

describe('Verify autocomplete dropdown lists via webdriver uni', ()=>{
    it('Select specific values via selec dropdown lists', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'autocomplete')
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list').contains('Asparagus').click()
        cy.get('#myInput').should('have.value', 'Asparagus')
        cy.get('#submit-button').click()
        cy.url().should('include', 'Asparagus').then(()=>{
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list').contains('Grapes').click()
            cy.get('#myInput').should('have.value', 'Grapes')
            cy.get('#submit-button').click()
            cy.url().should('include', 'Grapes')
        })
    })
})