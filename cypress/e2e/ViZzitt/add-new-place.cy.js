/// <reference types="cypress" />

describe('Test Add new place functionality on VizZit website', ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    before(function(){
        cy.fixture('vizZitt-user-data').then((data)=>{
            globalThis.data = data
        })
    })

    it('Successfully add a new place via following route - home/login/add new place', ()=>{
        cy.get('.nav').find('a').contains('Login').click()
        cy.populateLoginForm(data.first_name, data.password)
        cy.get("a[href='/places/new']").click()
        cy.url().should('contain', 'https://vizzitt.onrender.com/places/new')
        cy.addNewPlacePopulateInputs("New Random Place", "Belgrade", "22", "A place in Belgrade", "cypress/fixtures/Belgrade.jpg")
        cy.get('button').contains('Delete Place').click()
    })

    it('Successfully add a new place via following route - home/all/places/add new place/login', ()=>{
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get("a[href='/places/new']").click()
        cy.populateLoginForm(data.first_name, data.password)
        cy.addNewPlacePopulateInputs("New Random Place", "Belgrade", "22", "A place in Belgrade", "cypress/fixtures/Belgrade.jpg")
        cy.get('button').contains('Delete Place').click()
    })

    it('Try to add a new place whilst not logged in', ()=>{
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get("a[href='/places/new']").click()
        cy.get('.alert').should('contain', 'You must be signed in')
    })
})