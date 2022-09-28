describe("Testing notes app", () => {
    it("Renders properly", () => {
        cy.visit('/').contains("Forget-me-not v2")
    })
})