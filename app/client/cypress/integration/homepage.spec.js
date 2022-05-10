/// <reference types="Cypress"/>
describe("Homepage", () => {
  it("should contain 'Blog' and an image", () => {
    cy.visit("localhost:3000");
    cy.get("span").should("contain", "Blog");
  });

  it("should contain posts", () => {
    cy.visit("localhost:3000");
    cy.get("p").should("contain", "test desc");
    cy.get("a > span").should("contain", "test");
  });

  it("should contain sidebar", () => {
    cy.visit("localhost:3000");
    cy.get("span").should("contain", "ABOUT US");
  });

  it("should go through the home- and write- links", () => {
    cy.visit("localhost:3000");
    cy.get("span").should("contain", "ABOUT US");
    cy.contains("WRITE").click();
    cy.url().should("include", "/write");

    cy.contains("HOME").click();
    cy.url().should("include", "/");
  });
});
