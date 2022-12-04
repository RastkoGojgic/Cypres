class AutomationStore_HomePage_PO{
    visitHomepage(){
        cy.visit("https://automationteststore.com/")
    }

    clickOn_HairCare_Link(){
        cy.get('.categorymenu').find('a').contains("Hair Care").click()
    }
    
}

export default AutomationStore_HomePage_PO