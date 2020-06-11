// As a user, I want to have access to both ready-made templates and blank ones so I can make picture stories quickly.

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

  it('should flip though blank templates pages and end at action page', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('Blank Template').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.url().should('include', '/actions-page');
  });

  it('should add a landscape1 page to the school story after page 3', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('School Template').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Add Page').click();
    cy.contains('Default Template').click();
    cy.contains('Click to edit text');
    cy.get('#pic1').should('exist');
    cy.get('#pic2').should('not.exist');
    cy.url().should('include', '/story-page/6');
    cy.contains('6/17').should('exist');
  });

  // Check we can enter text, navigate away, then come back to find the text the same as we left it.

  it('should display /story-page/1 after clicking "School Template"', () => {
    cy.visit('/');
    cy.contains('PICTURE STORY').click();
    cy.contains('School Template').click();
    cy.url().should('include', '/story-page/1');
  });
});
