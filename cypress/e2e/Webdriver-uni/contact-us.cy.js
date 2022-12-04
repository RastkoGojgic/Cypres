import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/ContactUs_PO'

/// <reference types="cypress" />

describe('Test contact-us page via webdriver uni', ()=>{
    const homePage_PO = new HomePage_PO
    const contactUs_PO = new ContactUs_PO

    before(function(){
        cy.fixture('username-data').then((data)=>{
            globalThis.data = data
        })
    })

    beforeEach(function(){
        homePage_PO.visitHomepage()
        //cy.wait(3000)
        homePage_PO.clickOn_CantactUs_Button()
    })

    it('Successfully submit a contact us form', ()=>{
        contactUs_PO.submitForm(data.first_name, data.last_name, data.email, 'Something stupid', 'h1', 'Thank You')
    })

    it('submit a contact us form without all data', ()=>{
        contactUs_PO.submitForm(data.first_name, data.last_name, " ", 'Something stupid', 'body', 'Error')
    })
})