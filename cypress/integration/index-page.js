describe("Index page", () => {
    context('Page display on large size screen (Large Desktop)', () => {
        /*
* Visits the page before each test
*/
        beforeEach(() => {
            cy.log(`Visiting http://localhost:3000`);
            cy.viewport(1366, 1024)
            cy.visit("/", { timeout: 2000 });
        })

        /**
         * Header section
         */
        it("should have a logo", () => {
            cy.get("nav .flex-shrink-0").find("img").as("logos")
                .should("have.length", 3);

            cy.get("@logos").eq(0)
                .should("not.be.visible");

            cy.get("@logos").eq(1)
                .should("not.be.visible");

            cy.get("@logos").eq(2)
                .should("be.visible")
                .click()
                .location({
                    url: "/"
                });
        });

        it("should have a principal navigation with two links", () => {
            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a").as('Menu links')
                .should("have.length", 2)
                .should("be.visible");

            cy.get("@Menu links").eq(0)
                .contains("Home")
                .click()
                .location({
                    url: "/"
                })
                .url("/");

            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a").eq(0)
                .should("have.class", "bg-gray-900");

            cy.get("@Menu links").eq(1)
                .contains("About Us")
                .click()
                .location({
                    url: "/about"
                });
        });

        it("should have a hamburguer button, but not display it", () => {
            cy.get("nav .mx-auto .flex .flex").find("button svg")
                .should("have.length", 1)
                .should("not.be.visible");
        });

        it("should have a mobile navigation with two links, but not display it", () => {
            cy.get("nav .mx-auto ~ div .items-baseline").find("a")
                .should("have.length", 2)
                .should("not.be.visible");
        });

        /**
         * Hero section
         */
        it("should have a hero section with a title", () => {
            cy.get("h1")
                .should("have.length", 1)
                .should("be.visible")
                .contains("Photos");
        });

        /**
         * Main section
         */
        it("should have a main section with twelve image cards, each one with an image and a figcaption", () => {
            cy.get("figure").should("have.length", 12);
            cy.get("figure div > img").should("have.length", 12);
            cy.get("figure div > figcaption").should("have.length", 12);
        });

        /**
         * Footer section
         */
        it("should have a footer", () => {
            cy.get("footer").should("have.length", 1).contains('Yema');
        });
    })

    context('Page display on large size screen (Desktop)',  () => {
        /*
* Visits the page before each test
*/
        beforeEach(() => {
            cy.log(`Visiting http://localhost:3000`);
            cy.viewport(1024, 768)
            cy.visit("/", { timeout: 2000 });
        })

        /**
         * Header section
         */
        it("should have a logo", () => {
            cy.get("nav .flex-shrink-0").find("img").as("logos")
                .should("have.length", 3);

            cy.get("@logos").eq(0)
                .should("not.be.visible");

            cy.get("@logos").eq(1)
                .should("not.be.visible");

            cy.get("@logos").eq(2)
                .should("be.visible")
                .click()
                .location({
                    url: "/"
                });
        });

        it("should have a principal navigation with two links", () => {
            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .should("have.length", 2)
                .should("be.visible");

            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .eq(0)
                .contains("Home")
                .click()
                .location({
                    url: "/"
                });

            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .eq(1)
                .contains("About Us")
                .click()
                .location({
                    url: "/about"
                });
        });

        it("should have a hamburguer button, but not display it", () => {
            cy.get("nav .mx-auto .flex .flex").find("button svg")
                .should("have.length", 1)
                .should("not.be.visible");
        });

        it("should have a mobile navigation with two links, but not display it", () => {
            cy.get("nav .mx-auto ~ div .items-baseline").find("a")
                .should("have.length", 2)
                .should("not.be.visible");
        });

        /**
         * Hero section
         */
        it("should have a hero section with a title", () => {
            cy.get("h1", { timeout: 10000 })
                .should("have.length", 1)
                .should("be.visible")
                .contains("Photos");
        });

        /**
         * Main section
         */
        it("should have a main section with twelve image cards, each one with an image and a figcaption", () => {
            cy.get("figure").should("have.length", 12);
            cy.get("figure div > img").should("have.length", 12);
            cy.get("figure div > figcaption").should("have.length", 12);
        });

        /**
         * Footer section
         */
        it("should have a footer", () => {
            cy.get("footer").should("have.length", 1).contains('Yema');
        });
    })

    context('Page display on medium size screen (Tablet)', () => {
        /*
         * Visits the page before each test
         */
        beforeEach(() => {
            cy.log(`Visiting http://localhost:3000`);
            cy.viewport(768, 1024)
            cy.visit("/", { timeout: 2000 });
        })

        /**
         * Header section
         */
        it("should have a logo", () => {
            cy.get("nav .flex-shrink-0").find("img")
                .should("have.length", 3);

            cy.get("nav .flex-shrink-0").find("img").eq(0)
                .should("not.be.visible");

            cy.get("nav .flex-shrink-0").find("img").eq(1)
                .should("be.visible")
                .click()
                .location({
                    url: "/about"
                });

            cy.get("nav .flex-shrink-0").find("img").eq(2)
                .should("not.be.visible");
        });

        it("should have a principal navigation with two links", () => {
            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .should("have.length", 2)
                .should("be.visible");

            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .eq(0)
                .contains("Home")
                .click()
                .location({
                    url: "/"
                });

            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .eq(1)
                .contains("About Us")
                .click()
                .location({
                    url: "/about"
                });
        });

        it("should have a hamburguer button, but not display it", () => {
            cy.get("nav .mx-auto .flex .flex").find("button svg")
                .should("have.length", 1)
                .should("not.be.visible");
        });

        it("should have a mobile navigation with two links, but not display it", () => {
            cy.get("nav .mx-auto ~ div .items-baseline").find("a")
                .should("have.length", 2)
                .should("not.be.visible");
        });

        /**
         * Hero section
         */
        it("should have a hero section with a title", () => {
            cy.get("h1")
                .should("have.length", 1)
                .should("be.visible")
                .contains("Photos");
        });

        /**
         * Main section
         */
        it("should have a main section with twelve image cards, each one with an image and a figcaption", () => {
            cy.get("figure").should("have.length", 12);
            cy.get("figure div > img").should("have.length", 12);
            cy.get("figure div > figcaption").should("have.length", 12);
        });

        /**
         * Footer section
         */
        it("should have a footer", () => {
            cy.get("footer").should("have.length", 1).contains('Yema');
        });
    })

    context('Page display on small size screen (Mobile)', () => {
        /*
* Visits the page before each test
*/
        beforeEach(() => {
            cy.log(`Visiting http://localhost:3000`);
            cy.viewport(375, 812)
            cy.visit("/", { timeout: 1000 });
        })

        /**
         * Header section
         */
        it("should have a logo", () => {
            cy.get("nav .flex-shrink-0").find("img")
                .should("have.length", 3);

            cy.get("nav .flex-shrink-0").find("img").eq(0)
                .should("be.visible")
                .click()
                .location({
                    url: "/about"
                });

            cy.get("nav .flex-shrink-0").find("img").eq(1)
                .should("not.be.visible");

            cy.get("nav .flex-shrink-0").find("img").eq(2)
                .should("not.be.visible");
        });

        it("should have a principal navigation with two links, but not display it", () => {
            cy.get("nav .mx-auto .flex .hidden .items-baseline").find("a")
                .should("have.length", 2)
                .should("not.be.visible");
        });

        it("should have a hamburguer button, and display it", () => {
            cy.get("nav .mx-auto .flex .flex").find("button svg").should("have.length", 1);
            cy.get("nav .mx-auto .flex .flex").find("button svg").should("be.visible");
        });

        it("should have a mobile navigation with two links, and display it", () => {
            cy.get("nav .mx-auto ~ div .items-baseline").find("a").should("have.length", 2);

            cy.get("nav .mx-auto .flex .flex").find("button svg").click();
            cy.get("nav .mx-auto ~ div .items-baseline").find("a").should("be.visible");
        });
    })
});
