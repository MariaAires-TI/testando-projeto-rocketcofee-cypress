describe('Central de Atendimento ao Cliente Great Coffe', function() {
    context('testando a página inicial', function() {

        beforeEach( () => {
            cy.visit('./src/index.html')
        })

        it('verifica o título da aplicação', function() {               
            cy.title().should('be.equal', 'Great Coffe')         
        })  
        
        it('verifica se o formulário de pedidos abre em outra aba sem a necessidade de um clique', function() {
            cy.get('.buttonHeader').should('have.attr', 'target', '_blank')        
        });
    });

    context('testando a páginade formulário de pedidos', function() {
        
        beforeEach( () => {
            cy.visit('./src/form.html')
        })

        it('visita formulário de pedidos', function() {
            cy.visit('./src/form.html')
        });
    
        it('verifica se ao clicar no botão home, o usuário é redirecionado para página inicial sem a necessidade de um clique', function() {
            cy.get('.home').should('have.attr', 'target', '_blank')        
        });  
    
        it('verifica o título da aplicação', function() {
            cy.title().should('be.equal', 'Pegar meu café')
        })
    
        // it('preenche os campos obrigatórios e envia', function() {
        //     const longText = 'Adição de calda de chocolate'
            
        // });
    });
    

    

})