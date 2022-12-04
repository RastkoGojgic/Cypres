/// <reference types="cypress" />
describe('Calculate total of normal and sale products', ()=>{
    it('Positive test case', ()=>{
        cy.visit('https://automationteststore.com/')
        let priceTotal = 0
        cy.get('.oneprice, .pricenew').each(($el, index, $list) => {
            const re = /\d+/
            const itemPrice = Number($el.text().match(re).join(''))
            priceTotal += itemPrice
          }).then((element)=>{
            cy.log('The total price of all item is: ' + priceTotal)
            expect(priceTotal).to.equal(624)
          })
    })
})