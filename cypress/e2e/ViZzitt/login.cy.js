/// <reference types="cypress" />

describe('Test Login option on VizZit website', ()=>{
    beforeEach(function(){  
        cy.NavigateToLoginPage()
    })

    before(function(){
        cy.fixture('vizZitt-user-data').then((data)=>{
            globalThis.data = data
        })
    })

    it('Successfully Login with username and password', ()=>{
        cy.populateLoginForm(data.first_name, data.password)
        cy.get('.alert').should('contain', 'Welcome back')
        cy.url().should('contain', 'https://vizzitt.onrender.com/places')
    })
    it('Attempt to login with incorrect name or password', ()=>{
        cy.populateLoginForm(data.first_name, 'sasadasddas')
        cy.get('.alert').should('contain', 'Password or username is incorrect')
        cy.url().should('contain', 'https://vizzitt.onrender.com/login')
    })

    it('Attempt to login but leave input fields empty', ()=>{
        cy.get('.btn, btn-success').click()
        cy.get('#username').should("have.css", "border-color", "rgb(220, 53, 69)")
        cy.url().should('contain', 'https://vizzitt.onrender.com/login')
    })
})