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

    it("Search product", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get('#latimeSelect').select('185');
        cy.get('#inaltimeSelect').select('65');
        cy.get('#razaSelect').select('15');
        cy.get('#brandSelect').select("DEBICA");
        cy.get('#anotimpuriSelect').select("Vara");
        cy.get('.bucataFiltru.col-sm-12 > #functiiSpecialeSelect > :nth-child(1) > input').check();
        cy.get('.bucataFiltru.col-sm-12 > #functiiSpecialeSelect > :nth-child(2) > input').check();
    

    })

    it("Add product to chart", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get(':nth-child(2) > :nth-child(1) > .title_zone > .mx-auto > .adaugaInCosButton').click();
        cy.get('.hover').should.exist;

    })

    it("Add product to chart then delete it", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get(':nth-child(2) > :nth-child(1) > .title_zone > .mx-auto > .adaugaInCosButton').click();
        cy.get('.elemprod').click();
        cy.get('.hover').should('not.exist');

    })

    it("Add product to chart and order it", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get(':nth-child(2) > :nth-child(1) > .title_zone > .mx-auto > .adaugaInCosButton').click();
        cy.wait(10000)
        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type("Stan Marian");
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .form-control').type("0729248288");
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').type("red.somedayz@gmail.com");
        cy.get('.dropdown > .btn').click();
        cy.get(':nth-child(4) > .dropdown-item').click();
        cy.get('#oraseContainer > .dropdown > .btn').click();
        cy.get(':nth-child(399) > .dropdown-item').click();
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type("str principala nr 375");
        cy.get('.col-lg-12 > .form-control').type("Vreau sa aiba dot 2023, multumesc.");
        cy.get('#contactare_telefonica').check();
        
    })


    it("Visit product specifications", () => {
        cy.visit("https://www.e-roti.ro/");
        cy.get('.col-12.row > :nth-child(2) > :nth-child(2)').click()
    })

} )

