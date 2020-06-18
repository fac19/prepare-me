// As a user, I want to easily create pecs, adding an image and text in a square, on one page from my phone

describe('As a user I want to create pecs', () => {
  it('should navigate to pecs template screen', () => {
    cy.visit('/');
    cy.get('[data-cy=PecsButton]').click();
    cy.url().should('include', '/select-pecs-template');
    cy.get('[data-cy=PecsStoryGrid]').children().should('have.length', 4);
    cy.get('[data-cy=PECS12BLANK]').should('exist');
    cy.get('[data-cy=PECS6BLANK]').should('exist');
    cy.get('[data-cy=PecsDoctor]').should('exist');
  });

  it('should display pecs12 template', () => {
    cy.visit('/');
    cy.get('[data-cy=PecsButton]').click();
    cy.url().should('include', '/select-pecs-template');
    cy.get('[data-cy=PECS12BLANK]').click();
    cy.get('[data-cy=Pecs12Grid]').children().its('length').should('eq', 4);
    cy.get('[data-cy=PecsCard]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard]').contains('Click to edit text');
  });
});
