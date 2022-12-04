/// <reference types="cypress" />

describe('Interact with table data via webdriver uni', ()=>{
    it('Validate age colum total of the table', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'Data-Table')
        let ageSum = 0 
        cy.get('#thumbnail-1').find('td').each(($el)=>{
            const re = /\d+/
            let age = Number($el.text().match(re))
            if(age !==0){
                console.log(age)
                ageSum += age
            }
        }).then(()=>{
            expect(ageSum).to.equal(322)
        })
    })

    it.only('Validate user age by searhing for last name', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'Data-Table')
        cy.get('#thumbnail-1').find('td').contains('Jackson').next().should('have.text', '94')
    })
})