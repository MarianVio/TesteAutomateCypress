describe("Site-ul anvelomag.ro", () => {

    it("Functionalitate searchbar", () => {
        cy.visit("https://www.anvelomag.ro/");
        cy.get("#searchBox").type("2055516 continental").type("{enter}");
    
    })
    })
