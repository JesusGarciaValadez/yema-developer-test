describe("About Us page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit("/about", { timeout: 2000 });
    })

    /**
     * Hero section
     */
    it("should have a hero section with a title", () => {
        cy.get("h1")
            .should("have.length", 1)
            .should("be.visible")
            .contains("About Us");
    });

    /**
     * Main section
     */
    it("should have a main section with six paragraphs and the lorem ipsum text", () => {
        cy.get(".leading-normal").find("p").should("have.length", 6);
        cy.get(".leading-normal").find("p").contains("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    });
});
