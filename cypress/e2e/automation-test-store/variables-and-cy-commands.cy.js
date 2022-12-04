/// <reference types="Cypress" />


describe("Verifying variables cy commands and jquery commands", ()=>{
    it("Navigating to specific product pages", ()=>{
        cy.visit("https://automationteststore.com/")

        //The following will fail
        // const makeup = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // const skincare = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // makeup.click()
        // skincare.click()
        
        //The following will work
        // const makeup = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // makeup.click()
        // const skincare = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // skincare.click()

        //Recomended approach
        // cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        // cy.get('a[href*="product/category&path="]').contains('Skincare').click()

        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('.maintext').should('have.text', "Makeup")

        cy.get('.maintext').then((mainEl)=>{
            cy.log(mainEl.text())
        })
       
    })
})