describe('Prepare Me Builder', () => {
  it('should display prepare me website', () => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000/');
    cy.title().should('include', 'WELCOME TO OUR STORY BUILDER');
  });
});
