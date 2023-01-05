describe('Central de Atendimento ao Cliente Great Coffe', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title().should('be.equal', 'Great Coffe')         
    })  
    
    it.only('verifica se o formulário de pedidos abre em outra aba sem a necessidade de um clique', function() {
        cy.visit('./src/index.html')
        cy.get('.buttonHeader').should('have.attr', 'target', '_blank')
    });
  })