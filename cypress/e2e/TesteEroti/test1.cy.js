describe("Site-ul e-roti.ro", () => {

    it("Login with wrong password or username", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get('.menu > :nth-child(2) > a').click();
        cy.get('#email').type("red.somedayz@gmail.com");
        cy.get('#parola').type("iwkerklje{enter}");
        cy.get(':nth-child(4) > .text-center').should.exist;   

    })

    it("Login with right password or username", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get('.menu > :nth-child(2) > a').click();
        cy.get('#email').type("red.somedayz@gmail.com");
        cy.get('#parola').type("tambur00{enter}");
        cy.get('#siteContent > :nth-child(5)').should.exist;   

    })

    it("Login then logout", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get('.menu > :nth-child(2) > a').click();
        cy.get('#email').type("red.somedayz@gmail.com");
        cy.get('#parola').type("tambur00{enter}");
        cy.get('#siteContent > :nth-child(5) > a').click();
        cy.get('.text-right > .menu > :nth-child(2)').click();
        cy.get('.cardTitle').should.exist;

    })

    it("Cautare produs", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get('#latimeSelect').select('185');
        cy.get('#inaltimeSelect').select('65');
        cy.get('#razaSelect').select('15');
        cy.get('#brandSelect').select("DEBICA");
        cy.get('#anotimpuriSelect').select("Vara");
        cy.get('.bucataFiltru.col-sm-12 > #functiiSpecialeSelect > :nth-child(1) > input').check();
        cy.get('.bucataFiltru.col-sm-12 > #functiiSpecialeSelect > :nth-child(2) > input').check();
        cy.get('.col-lg-4 > .cautaBtn').click();

    })
} )

