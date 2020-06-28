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
    cy.get('[data-cy=PecsCard1]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard1]').contains('Click to edit text');
  });

  it('should have 12 pecs cards', () => {
    cy.visit('/select-pecs-template');
    cy.get('[data-cy=PECS12BLANK]').click();
    cy.get('[data-cy=Pecs12Grid]').children().its('length').should('eq', 4);
    cy.get('[data-cy=PecsCard1]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard2]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard3]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard4]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard5]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard6]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard7]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard8]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard9]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard10]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard11]').children().should('have.length', 2);
    cy.get('[data-cy=PecsCard12]').children().should('have.length', 2);
  });

  it('can edit text in pecs cards', () => {
    cy.visit('/select-pecs-template');
    cy.get('[data-cy=PECS12BLANK]').click();
    cy.get('[data-cy=PecsCard1]').children().should('have.length', 2);
    cy.get('[data-cy=text1]').contains('Click to edit text');
    cy.get('#text1').type('hello');
    cy.get('[data-cy=text1]').contains('Click to edit texthello');
    cy.get('#text1').type('hello');
    cy.get('[data-cy=text1]').contains('Click to edit texthello');
  });

  it('can upload pictures in pecs cards', () => {
    cy.visit('/select-pecs-template');
    cy.get('[data-cy=PECS12BLANK]').click();
    cy.get('[data-cy=PecsCard1]').children().should('have.length', 2);
    cy.get('#pic1').click();
    cy.get('iframe').should('exist');
  });
});
