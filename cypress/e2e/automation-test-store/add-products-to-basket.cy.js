import AutomationStore_HomePage_PO from '../../support/pageObjects/automation-test-store/AutomationStore_HomePage_PO'
import AutomationsStore_HairCarePage_PO from '../../support/pageObjects/automation-test-store/AutomationsStore_HairCarePage_PO'
/// <reference types="Cypress" />

describe('Add products to basket via automation webstore', ()=>{
    const automationTestStoreHomePage_PO = new AutomationStore_HomePage_PO
    const automationsStore_HairCarePage_PO = new AutomationsStore_HairCarePage_PO

    before(function(){
        cy.fixture('products').then((products)=>{
            globalThis.products = products.products
        })
    })
    beforeEach(function(){
        automationTestStoreHomePage_PO.visitHomepage()
        automationTestStoreHomePage_PO.clickOn_HairCare_Link()
    })
    it("Add products", ()=>{
        for(let product of products){
            //cy.addToCart(product)
            automationsStore_HairCarePage_PO.addToCart(product)
        }
        cy.get('.block_7').click()
        for(let product of products){
            //cy.checkCartItem(product)
            automationsStore_HairCarePage_PO.checkCartItem(product)
        }
    })
})