describe("Site-ul e-roti.ro", () => {

    it("Functionalitate searchbar", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get("#searchBox").type("2055516 continental").type("{enter}");
    

        cy.get(".searchProdus").should("exist");


    })




} )

