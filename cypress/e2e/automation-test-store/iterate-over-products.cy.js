/// <reference types="cypress" />

describe('Test automated test store for iterating over elements', ()=>{

    beforeEach(function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
    })

    it('Test case for successfull iteration over elements and selecting one', ()=>{
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
          })
    })

    it('Test case for successfull iteration over elements and selecting one', ()=>{
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text() === "Seaweed Conditioner"){
        //         cy.wrap($el).click()
        //     }
        //   })
        cy.selectProduct("Seaweed Conditioner")
    })

    it('Test case for successfull iteration over elements and selecting another element using commands', ()=>{
        cy.selectProduct("Eau Parfumee au The Vert Shampoo")
    })
})