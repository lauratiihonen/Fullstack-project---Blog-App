describe("Authentication", () => {
  it("should signup", () => {
    cy.visit("localhost:3000");
    cy.contains("SIGN UP").click();
    cy.get("span").should("contain", "Sign up");

    cy.get('input[placeholder="Enter your username.."]').type("test");
    cy.get('input[placeholder="Enter your email.."]').type("test@email.com");
    cy.get('input[placeholder="Enter your password.."]').type("password");

    cy.get("form > button").should("contain", "Sign up").click();
  });

  it("should login,write a post, edit post, and delete post", () => {
    cy.visit("localhost:3000");
    cy.contains("LOGIN").click();
    cy.get("span").should("contain", "Login");

    cy.get('input[placeholder="Enter your username.."]').type("test");
    cy.get('input[placeholder="Enter your password.."]').type("password");

    cy.get('button[class="loginButton"]').click();

    cy.contains("WRITE").click();
    cy.get('input[placeholder="Title"]').type("Frontend Test Title");
    cy.get('textarea[placeholder="Tell your story..."]').type(
      "Today I'm doing frontend testing"
    );
    cy.get("form > button").should("contain", "Publish").click();

    cy.get('i[class="singlePostIcon fa-solid fa-pen-to-square"]').click();
    cy.get('input[class="singlePostTitleInput"]').type(" edit");
    cy.get('textarea[class="singlePostDescInput"]').type(" edit");
    cy.get("button").should("contain", "Update").click();

    cy.get('i[class="singlePostIcon fa-solid fa-trash-can"]').click();
  });
});
