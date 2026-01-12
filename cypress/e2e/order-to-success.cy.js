describe("Order -> Success Flow", () => {
  it("Sipariş verir, POST stub olur, success sayfasına gider ve üstten açılır", () => {
    cy.visit("/order");

    // POST'u stubla (createPizzaOrder dış API'ye gidiyorsa test kırılmasın)
    cy.intercept("POST", "**", {
      statusCode: 200,
      body: { id: 123, status: "ok" },
    }).as("postOrder");

    // Formu valid hale getir
    cy.get('[data-cy="order-name"]').type("Omer");
    cy.get('[data-cy="order-size-m"]').click();
    cy.get('[data-cy="order-dough"]').select("İnce");

    cy.get('[data-cy="ing-Pepperoni"]').click();
    cy.get('[data-cy="ing-Sosis"]').click();
    cy.get('[data-cy="ing-Domates"]').click();
    cy.get('[data-cy="ing-Mısır"]').click();

    cy.get('[data-cy="order-submit"]').should("not.be.disabled").click();

    // POST atıldı mı
    cy.wait("@postOrder");

    // success'e gitti mi
    cy.location("pathname").should("eq", "/success");

    // sayfa üstten mi açıldı
    cy.window().its("scrollY").should("eq", 0);

    // success içerik kontrol (data-cy yoksa text üzerinden)
    cy.contains("SİPARİŞ").should("exist");
  });
});
