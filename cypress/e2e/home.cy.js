describe("Home", () => {
  it("ACIKTIM ile /order sayfasına gider", () => {
    cy.visit("/");

    cy.get('[data-cy="home-page"]').should("exist");
    cy.get('[data-cy="home-cta"]').should("be.visible").click();

    cy.location("pathname").should("eq", "/order");
  });
});
