// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('navigateTo_WebDriverUni_Homepage', ()=>{
    cy.visit("http://www.webdriveruniversity.com/")
})

Cypress.Commands.add('navigateTo_WebDriverUni_Checkbox_Page', ()=>{
    cy.visit("http://www.webdriveruniversity.com" + "/Dropdown-Checkboxes-RadioButtons/index.html")
})


Cypress.Commands.add('addToCart', (productName)=>{
    cy.get('.fixed_wrapper').contains(productName).parent().parent().next().as('productThumbnail')
    cy.get('@productThumbnail').find('.productcart').click()
})

Cypress.Commands.add('checkCartItem', (productName)=>{
    cy.get('.table-bordered').find('td').contains(productName)
})

Cypress.Commands.add('selectProduct', (productName)=>{
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text() === productName){
            cy.wrap($el).click()
        }
      })
})

Cypress.Commands.add('addNewPlacePopulateInputs', (title, place, price, comment, image)=>{
        cy.get('#title').type('New Random Place')
        cy.get('#location').type('Belgrade')
        cy.get('#price').type('22')
        cy.get('#description').type('A place in Belgrade')
        cy.get('#image').selectFile('cypress/fixtures/Belgrade.jpg')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Successfully added a new place')
})

Cypress.Commands.add('populateLoginForm', (name, password)=>{
    cy.get('#username').type(name)
    cy.get("#password").type(password)
    cy.get('.btn, btn-success').click()
})


Cypress.Commands.add('NavigateToLoginPage',()=>{
    cy.visit('/')
    cy.get('.nav').find('a').contains('Login').click()
})

Cypress.Commands.add('logout', ()=>{
    cy.get("a[href='/logout']").click()
    cy.get('.alert').should('contain', 'Goodbye!')
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })