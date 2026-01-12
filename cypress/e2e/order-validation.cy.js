describe("Order - Validations", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("Form geçersizken sipariş butonu disabled olmalı", () => {
    cy.get('[data-cy="order-submit"]').should("be.disabled");
  });

  it("Zorunlu alanlar tamamlanınca sipariş butonu enabled olmalı", () => {
    // name >= 3
    cy.get('[data-cy="order-name"]').type("Omer");

    // size seç
    cy.get('[data-cy="order-size-m"]').click();

    // dough seç
    cy.get('[data-cy="order-dough"]').select("İnce");

    // en az 4 ingredient
    cy.get('[data-cy="ing-Pepperoni"]').click();
    cy.get('[data-cy="ing-Sosis"]').click();
    cy.get('[data-cy="ing-Domates"]').click();
    cy.get('[data-cy="ing-Mısır"]').click();

    cy.get('[data-cy="order-submit"]').should("not.be.disabled");
  });

  it("10'dan fazla ek malzeme seçilememeli (limit davranışı)", () => {
    cy.get('[data-cy="order-name"]').type("Omer");
    cy.get('[data-cy="order-size-m"]').click();
    cy.get('[data-cy="order-dough"]').select("İnce");

    const toClick = [
      "ing-Pepperoni",
      "ing-Sosis",
      "ing-Kanada-Jambonu",
      "ing-Tavuk-Izgara",
      "ing-Soğan",
      "ing-Domates",
      "ing-Mısır",
      "ing-Sucuk",
      "ing-Jalapeno",
      "ing-Sarımsak",
    ];

    toClick.forEach((id) => cy.get(`[data-cy="${id}"]`).click());

    // 11. seçim denemesi (disabled olmalı ya da click etkisiz kalmalı)
    cy.get('[data-cy="ing-Biber"]').then(($el) => {
      if ($el.is(":disabled")) {
        cy.wrap($el).should("be.disabled");
      } else {
        cy.wrap($el).click();
        // disabled değilse bile seçili sayısı 10’u geçmemeli
        cy.get('[data-cy="ingredients-grid"] input:checked').should(
          "have.length",
          10
        );
      }
    });
  });
});
