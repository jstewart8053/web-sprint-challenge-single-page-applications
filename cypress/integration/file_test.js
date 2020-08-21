describe('React Form', () => {


    describe('sprint test', () => {
  
      it('Navigate to site', () => {
        cy.visit('http://localhost:3000/');
      })
  
      it('Input a special info', () => {
        cy.visit('http://localhost:3000/pizza');
        cy.get('textarea[name=specialInstructions]')
          .type('Jen')
          .should('have.value', 'Jen')
      })
      
      it('Can click checbox', () => {
        cy.get('[type="checkbox"][name=bacon]').check()
        cy.get('[type="checkbox"][name=mushrooms]').check()
        cy.get('[type="checkbox"][name=sausage]').check()
      })
  
      it('Can submit form with data', () => {
        cy.get('[name=submit]')
          .click();
      })
    })
  
  })