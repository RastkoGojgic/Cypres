/// <reference types="cypress" />

describe('Check cypres checkbox functionality', ()=>{
    beforeEach(function(){
        // cy.navigateTo_WebDriverUni_Homepage()
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        // cy.url().should('include', 'Checkboxes')
        cy.navigateTo_WebDriverUni_Checkbox_Page()
    })
    it('Select checkbox on webdriver uni website', ()=>{
        cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').should('be.checked')
    })

    it('De-select checkbox on webdriver uni website', ()=>{
        cy.get(':nth-child(5) > input').as('Checkbox3')
        cy.get('@Checkbox3').uncheck()
        cy.get('@Checkbox3').should('not.be.checked')
    })

    it('Select multiple checkboxes on webdriver uni website', ()=>{
        cy.get('input[type="checkbox"]').each(($el, index, $list) => {
            cy.wrap($el).check().should('be.checked')
          })
    })

    it('Select multiple checkboxes on webdriver uni website', ()=>{
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
    })
})