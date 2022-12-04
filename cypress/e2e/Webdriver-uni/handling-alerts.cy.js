/// <reference types="Cypress" />

describe("Testing JS alerts with cypress", ()=>{
    beforeEach(function(){
        cy.navigateTo_WebDriverUni_Homepage()
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Popup-Alerts')
    })
    it('Confirm JS alert box contains the right text value', ()=>{
        cy.get('#button1').click()
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    })


    it('Confirm JS alert box works correctly when clicking ok', ()=>{
        cy.get('#button4').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('Confirm JS alert box works correctly when clicking cancel', ()=>{
        cy.get('#button4').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })


    it('Confirm JS alert box works correctly using a stub', ()=>{ 
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        })

    })
})