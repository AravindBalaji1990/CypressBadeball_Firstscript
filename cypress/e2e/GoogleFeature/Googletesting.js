import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User launches the google website",()=> {
    cy.visit("https://google.com/")
})

When("User gets the title of the page for validation", () =>{
    cy.title().should('eq', 'Google')
})

Then("User checks for the textbox in the page", () =>{
    cy.get("textarea[name='q']").should('be.visible')
})

Then("User validates the url of the page", () =>{
    cy.get("textarea[name='q']").url().should('include','google')
})

When("user input the data {string} in the textbox", function (data) {
    cy.get("textarea[name='q']").type(data)
    });
    
When("user input the data in the textbox", function (dataTable) {
    dataTable.hashes().forEach(row => {
        cy.log('the data from feature file : ', row.data)
        cy.get('#APjFqb').clear();
        cy.get('#APjFqb').type(row.data)
    })
});

When("user input the data from example in the textbox {string} and {string}", function (data1, data2) {
    cy.get("textarea[name='q']").type(data1 +" "+ data2)
    });
    