// As a user, I want to be able to view my picture story in 'read mode' on the phone

describe('m1.spec', () => {
  it('should show warning when view mode is selected in top nav bar', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('Blank Template').click();
    cy.contains('Next').click();
    cy.url().should('include', '/story-page/2');
    cy.get('[data-cy="VerticalMenu"]').click();
    cy.get('[data-cy="ViewMode"]').click();
  });

  it('should return you to the correct page after clicking cancel in view mode warning', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('Blank Template').click();
    cy.contains('Next').click();
    cy.url().should('include', '/story-page/2');
    cy.get('[data-cy="VerticalMenu"]').click();
    cy.get('[data-cy="ViewMode"]').click();
    cy.get('[ data-cy="ViewModeWarningCancel"]').click();
    cy.url().should('include', '/story-page/2');
  });

  it('should show you View mode when Read Mode is clicked in Top nav bar', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('Blank Template').click();
    cy.contains('Next').click();
    cy.url().should('include', '/story-page/2');
    cy.get('[data-cy="VerticalMenu"]').click();
    cy.get('[data-cy="ViewMode"]').click();
    cy.get('[data-cy="ViewModeWarningOK"]').click();
    cy.url().should('include', '/view-mode');
  });

  it('should show you View mode when Read Mode is clicked on Action page / Final Page', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('Blank Template').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.url().should('include', '/actions-page');
    cy.get('[data-cy=ReadMode]').click();
    cy.url().should('include', '/view-mode');
  });
});
