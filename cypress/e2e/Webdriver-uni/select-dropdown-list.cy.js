/// <reference types="cypress" />

describe('Interact with dropdown lists via webdriver uni', ()=>{
    it('Select specific values via selec dropdown lists', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Dropdown')

        cy.get("#dropdowm-menu-1").select('c#').should('have.value', 'c#')
        cy.get("#dropdowm-menu-2").select('testng').contains('TestNG')
        cy.get("#dropdowm-menu-3").select('jquery')

        cy.get("#dropdowm-menu-2").select('testng').contains('TestNG')
        cy.get("#dropdowm-menu-2").select('Maven').should('have.value', 'maven')
    })
})