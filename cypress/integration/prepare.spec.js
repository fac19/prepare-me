describe('Prepare Me Builder', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('should display prepare me website', () => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.title().should('include', 'Prepare Me Builder');
  });

  it('should display story templates after clicking "PICTURE STORY', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.url().should('include', '/select-story-template');
  });
});
