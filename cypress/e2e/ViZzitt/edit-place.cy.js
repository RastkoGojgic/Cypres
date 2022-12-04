/// <reference types="cypress" />

describe('Test edit functionality on VizZit website', ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    before(function(){
        cy.fixture('vizZitt-user-data').then((data)=>{
            globalThis.data = data
        })
    })

    it('Successfully edit a place via following path home/login/specific place/edit place', ()=>{
        cy.get('.nav').find('a').contains('Login').click()
        cy.populateLoginForm(data.first_name, data.password)
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('.card-title').should('contain', 'Kalemegdanska Tvrđava')
        cy.get('a').contains('Edit Place').click()
        cy.get('#title').clear({force:true}).type('New Random Place', {force:true})
        cy.get('.btn').contains('Save Changes').click()
        cy.get('.alert').should('contain', 'Successfully edited a place')
        cy.get('.card-title').should('contain', 'New Random Place')
        cy.get('a').contains('Edit Place').click()
        cy.get('#title').clear({force:true}).type('Kalemegdanska Tvrđava', {force:true})
        cy.get('.btn').contains('Save Changes').click()
        cy.get('.alert').should('contain', 'Successfully edited a place')
        cy.get('.card-title').should('contain', 'Kalemegdanska Tvrđava')
    })

    it('Try to edit a place with empty title field', ()=>{
        cy.get('.nav').find('a').contains('Login').click()
        cy.populateLoginForm(data.first_name, data.password)
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get('.card-title').should('contain', 'Kalemegdanska Tvrđava')
        cy.get('a').contains('Edit Place').click()
        cy.get('#title').clear({force:true})
        cy.get('.btn').contains('Save Changes').click()
        cy.get('#title').should("have.css", "border-color", "rgb(220, 53, 69)")
    })

    it('Try to edit a place without loging in', ()=>{
        cy.get('.nav').find('a').contains('All Places').click()
        cy.get('.btn, .btn-info').first().click({force:true})
        cy.get("a[href='/places/632adab90395c80016ca6db8/edit']").should('not.exist')
    })

    it('Try to edit a place created by someone else', ()=>{
        cy.get('.nav').find('a').contains('Login').click()
        cy.populateLoginForm(data.first_name, data.password)
        cy.get('.card').contains('Muzej Primenjene Umetnosti').parent().find('a').click({force:true})
        cy.get("a[href='/places/632adab90395c80016ca6db8/edit']").should('not.exist')
    })
})

