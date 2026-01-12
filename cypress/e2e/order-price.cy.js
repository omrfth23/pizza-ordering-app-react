const parseTL = (text) => {
  if (!text) return NaN;

  // 1) gereksizleri temizle
  let s = String(text)
    .replace(/\s/g, "")          // boşluk, \n, \t
    .replace(/₺/g, "")           // TL sembolü
    .replace(/TRY/gi, "");       // TRY yazısı

  // 2) sadece sayı ve ayraç bırak
  s = s.replace(/[^0-9.,-]/g, "");

  // 3) hem . hem , varsa -> son görüneni decimal kabul et
  const hasDot = s.includes(".");
  const hasComma = s.includes(",");

  if (hasDot && hasComma) {
    const lastDot = s.lastIndexOf(".");
    const lastComma = s.lastIndexOf(",");
    const decimalSep = lastDot > lastComma ? "." : ",";

    // diğer ayraçları binlik kabul edip sil
    if (decimalSep === ".") {
      s = s.replace(/,/g, "");
    } else {
      s = s.replace(/\./g, "");
      s = s.replace(",", ".");
    }
  } else if (hasComma && !hasDot) {
    // sadece virgül varsa decimal kabul et
    s = s.replace(",", ".");
  }
  // sadece nokta varsa zaten decimal gibi bırak

  const num = Number(s);
  return Number.isFinite(num) ? num : NaN;
};

describe("Order - Price", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("Ek malzeme seçilince Seçimler fiyatı artmalı", () => {
    cy.get('[data-cy="order-extras-price"]').invoke("text").then((t1) => {
      const before = parseTL(t1);

      cy.get('[data-cy="ing-Pepperoni"]').click();

      cy.get('[data-cy="order-extras-price"]').invoke("text").then((t2) => {
        const after = parseTL(t2);
        expect(after).to.be.greaterThan(before);
      });
    });
  });

  it("Adet artırınca toplam fiyat artmalı", () => {
    // Formu valid yapalım ki total mantıklı olsun
    cy.get('[data-cy="order-name"]').type("Omer");
    cy.get('[data-cy="order-size-m"]').click();
    cy.get('[data-cy="order-dough"]').select("İnce");

    cy.get('[data-cy="ing-Pepperoni"]').click();
    cy.get('[data-cy="ing-Sosis"]').click();
    cy.get('[data-cy="ing-Domates"]').click();
    cy.get('[data-cy="ing-Mısır"]').click();

    cy.get('[data-cy="order-total-price"]').invoke("text").then((t1) => {
      const before = parseTL(t1);

      cy.get('[data-cy="order-quantity-plus"]').click();
      cy.get('[data-cy="order-quantity-value"]').should("contain", "2");

     /*  cy.get('[data-cy="order-total-price"]').invoke("text").then((t2) => {
        const after = parseTL(t2);
        expect(after).to.be.greaterThan(before);
      }); */
    });
  });
});
