// As a user, I want to be able to resize, crop and flip horizontally the uploaded images/stickers/text

describe('Can upload images and displays front and back covers', () => {
  it('displays logo on back cover page', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.get('[data-cy=BlankTemplate]').click();
    cy.get('[data-cy=NextButton]').click();
    cy.get('[data-cy=NextDisabledButton]').should('not.be.visible');
    cy.get('[data-cy=NextButton]').click();
    cy.get('img')
      .invoke('attr', 'src')
      .should('include', '/static/media/generic_backpage');
    cy.get('[data-cy=NextButton]').click();
    cy.get('[data-cy=NextDisabledButton]').should('be.visible');
  });

  it('should load cloudinary widget on click', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.get('[data-cy=BlankTemplate').click();
    cy.get('[data-cy="AddPage"]').click();
    cy.url().should('include', '/select-page-template');
    cy.get('[data-cy="Portrait2"]').click();
    cy.get('[data-cy=UploadImg]').click();
    cy.get('iframe').should('exist');
  });
});
