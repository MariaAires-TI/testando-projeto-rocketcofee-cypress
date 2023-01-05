describe('Central de Atendimento ao Cliente Great Coffe', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title().should('be.equal', 'Great Coffe')
  
    })    
  })