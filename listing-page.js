/// <reference types="cypress" />

export class ListingPage {

    productListFirstProductAddToCart() {
        cy.get("[class*='moria-ProductCard'] > a").first().trigger('mouseover').invoke("removeAttr","target").click();
       
        return this;
    }
