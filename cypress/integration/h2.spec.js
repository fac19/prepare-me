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

  it('displays warning when pressing the home button', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.get('[data-cy=BlankTemplate').click();
    cy.get('[data-cy=BackDisabledButton]').should('be.visible');
    cy.get('[data-cy=NextButton]').click();
    cy.get('[data-cy=BackButton]').should('be.visible');
    cy.get('[data-cy=Home]').click();
    cy.get('[data-cy=WarningPage]').children().should('have.length', 4);
    cy.get('[data-cy=WarningNoButton]').should('exist');
    cy.get('[data-cy=WarningYesButton]').should('exist');
    cy.get('[data-cy=WarningYesButton]').click();
    cy.url().should('include', '/');
    cy.get('[data-cy=PictureStoryButton]').should('exist');
  });
});
