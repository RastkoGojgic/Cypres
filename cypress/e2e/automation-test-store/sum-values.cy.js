/// <reference types="Cypress" />
let totalPrice = 0

describe("Calculate total products price in automation test store items using various commands", ()=>{
    it("Sum of all product prices", ()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('.pricenew, .oneprice').each(($el, index, $list) => {
            let re = /\d+/
            let price = $el.text().match(re).join('')
            console.log(price)
          })
    })
})