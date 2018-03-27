describe("Base application", () => {

    it("clicks the button '' ", () => {
        cy.visit("http://localhost:3000");
        cy.get(".search").click();
      });

    it("clicks some movies...", () => {
        cy.wait(3000);
        cy.get('.Image').click();
  
        cy.wait(3000);
        cy.get('.Image2').click();

        cy.wait(3000);
        cy.get('.Image').click();
    })

    
})