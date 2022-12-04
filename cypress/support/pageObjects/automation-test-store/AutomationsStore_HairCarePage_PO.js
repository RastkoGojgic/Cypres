class AutomationsStore_HairCarePage_PO{
    addToCart(productName){
        cy.get('.fixed_wrapper').contains(productName).parent().parent().next().as('productThumbnail')
        cy.get('@productThumbnail').find('.productcart').click()
    }

    checkCartItem(productName){
        cy.get('.table-bordered').find('td').contains(productName)
    }
}

export default AutomationsStore_HairCarePage_PO