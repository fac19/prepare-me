//As a user I want to be able to print and download my stories
describe('As a user I want to print and download', () => {
  it('should see a print loading page', () => {
    cy.visit('/');
    cy.get('[data-cy=PictureStoryButton]').click();
    cy.url().should('include', '/select-story-template');
    cy.get('[data-cy=SchoolTemplate]').click();
    cy.url().should('include', '/story-page/1');
    cy.get('[data-cy=VerticalMenu]').click();
    cy.get('[data-cy=Print]').click();
    cy.url().should('include', '/print');
  });

  it('should have a Download button', () => {
    cy.visit('/');
    cy.get('[data-cy=PictureStoryButton]').click();
    cy.url().should('include', '/select-story-template');
    cy.get('[data-cy=SchoolTemplate]').click();
    cy.url().should('include', '/story-page/1');
    cy.get('[data-cy=VerticalMenu]').click();
    cy.get('[data-cy=Download]').should('exist');
  });
});
