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

    context('testando a página de formulário de pedidos', function() {
        
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
    
        it('preenche os campos obrigatórios e envia', function() {
            const longText = 'Adição de calda de chocolate'
            cy.get('#name')
            .type('Ana carla Nogueira')
            .should('have.value', 'Ana carla Nogueira')

            cy.get('#email')
            .type('ana@email.com')
            .should('have.value', 'ana@email.com')

            cy.get('#contact')
            .type('84998989898')
            .should('have.value', '84998989898')

            cy.get('#address')
            .type('Rua Maria Carma - Lagoa do riacho - n 900')
            .should('have.value', 'Rua Maria Carma - Lagoa do riacho - n 900')

            cy.get('#chocollato').click()
            cy.get('#quantityChocollato').select('1')

            cy.get('#comentarios')
            .type(longText)
            .should('have.value', longText)

            cy.contains('button', 'Enviar').should('be.visible').click()          
        });

        it('exibe mensagem de sucesso quando o pedido é realizado', function() {
            
            const longText = 'Adição de calda de chocolate'
            cy.get('#name')
            .type('Ana carla Nogueira')
            .should('have.value', 'Ana carla Nogueira')

            cy.get('#email')
            .type('ana@email.com')
            .should('have.value', 'ana@email.com')

            cy.get('#contact')
            .type('84998989898')
            .should('have.value', '84998989898')

            cy.get('#address')
            .type('Rua Maria Carma - Lagoa do riacho - n 900')
            .should('have.value', 'Rua Maria Carma - Lagoa do riacho - n 900')

            cy.get('#chocollato').click()
            cy.get('#quantityChocollato').select('1')

            cy.get('#comentarios')
            .type(longText)
            .should('have.value', longText)

            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('.order').should('be.visible')
                    
        });

        it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
            cy.get('#chocollato').click()
            cy.get('#quantityChocollato').select('1')

            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('.error').should('be.visible')
        });

        it('exibe mensagem de erro quando a quantidade de café chocolatto não é selecionada', function() {
            cy.fillMandatoryFields()

            cy.get('#chocollato').click()
            cy.get('#quantityChocollato').select('0')

            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('#checkChocollato').should('be.visible')
        });

        it('exibe mensagem de erro quando a quantidade de café chocolatto é selecionada, mas o café não está selecionado', function() {
            cy.fillMandatoryFields()
            cy.get('#chocollato')
            cy.get('#quantityChocollato').select('1')
            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('#checkChocollato').should('be.visible')
        });

        it('exibe mensagem de erro quando a quantidade de café capuccino avelã não é selecionada', function() {
            cy.fillMandatoryFields()

            cy.get('#capuccino').click()
            cy.get('#quantityCapuccino').select('0')

            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('#checkCapuccino').should('be.visible')
        });

        it('exibe mensagem de erro quando a quantidade de café capuccino avelã é selecionada, mas o café não está selecionado', function() {
            cy.fillMandatoryFields()
            cy.get('#capuccino')
            cy.get('#quantityCapuccino').select('1')
            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('#checkCapuccino').should('be.visible')
        });

        it('exibe mensagem de erro quando a quantidade de café espresso não é selecionada', function() {
            cy.fillMandatoryFields()

            cy.get('#espresso').click()
            cy.get('#quantityEspresso').select('0')

            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('#checkEspresso').should('be.visible')
        });

        it('exibe mensagem de erro quando a quantidade de café espresso é selecionada, mas o café não está selecionado', function() {
            cy.fillMandatoryFields()
            cy.get('#espresso')
            cy.get('#quantityEspresso').select('1')
            cy.contains('button', 'Enviar').should('be.visible').click()
             
            cy.get('#checkEspresso').should('be.visible')
        });
        





        // it('exibe mensagem de erro quando a quantidade de café latte macchiato não é selecionada', function() {

        // });

        // it('exibe mensagem de erro quando a quantidade de café latte macchiato é selecionada, mas o café não está selecionado', function() {

        // });


        // it('exibe mensagem de erro quando um email inválido é inserido', function() {

        // });

        // it('Campo telefone continua vazio quando preenchido com valor não numérico', function() {
        //     
        // })
    });
    

    

})