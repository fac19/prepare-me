describe('Prepare.spec', () => {
  it('should display prepare me website', () => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.title().should('include', 'Prepare Me Builder');
  });

  it('should display /select-story-template after clicking "PICTURE STORY', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.url().should('include', '/select-story-template');
  });

  it('should display /story-page/1 after clicking "Blank Template"', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('Blank Template').click();
    cy.url().should('include', '/story-page/1');
  });

  it('should display /story-page/1 after clicking "School Template"', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('School Template').click();
    cy.url().should('include', '/story-page/1');
  });
});
