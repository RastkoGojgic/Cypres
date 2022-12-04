/// <reference types="cypress" />

describe('Check cypres radiobutton functionality', ()=>{
    beforeEach(function(){
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'RadioButtons')
    })
    it('Select redio button on webdriver uni website', ()=>{
        cy.get("#radio-buttons").find('input[type="radio"]').first().check()
        cy.get("#radio-buttons").find('input[type="radio"]').eq(2).check()
    })

    it('Validate the states of specific radio buttons', ()=>{
        cy.get('input[value="lettuce"]').should('not.be.checked')
        cy.get('input[value="pumpkin"]').should('be.checked')
        cy.get('input[value="cabbage"]').should('be.disabled')

        cy.get('input[value="lettuce"]').check()
        cy.get('input[value="lettuce"]').should('be.checked')
        cy.get('input[value="pumpkin"]').should('not.be.checked')
    })
})