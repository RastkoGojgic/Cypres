/// <reference types="cypress" />

describe('Test mouse actions', ()=>{
    it('Scroll element into view', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Actions')
    })

    it('Drag and drop and item', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Actions')
        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    })

    it('Prefrom a double mouse click', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Actions')
        cy.get('#double-click').dblclick()
    })

    it.only('Hold down a left mouse click on a given element', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Actions')
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element)=>{
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})