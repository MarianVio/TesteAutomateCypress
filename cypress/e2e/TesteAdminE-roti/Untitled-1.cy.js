describe("Site e-roti.ro", () => {

    it("Logare e-roti.ro", () => {
        cy.visit("https://www.e-roti.ro");
        cy.get('.menu > :nth-child(2) > a').click();
        cy.get('#email').type("red.somedayz@gmail.com");
        cy.get('#parola').type("tambur00").type("{enter}");
        cy.get('#siteContent > :nth-child(5)').should("exist");
})

it("Verificare url e-roti.ro", () => {
    cy.visit("https://www.e-roti.ro");

    cy.wait(10000);
    cy.get('.text-right > .menu > :nth-child(1)').click();
    cy.url().should("include", "/contact" );

})


})