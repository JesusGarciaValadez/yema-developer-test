describe("404 page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit("/random-page", { timeout: 2000, failOnStatusCode: false });
    })

    /**
     * Main section
     */
    it("should have a main section with a title", () => {
        cy.get("h1")
            .should("have.length", 1)
            .contains("404");
    });

    it("should have a main section with a subtitle", () => {
        cy.get("h2").contains("This page could not be found.");
    });
});
