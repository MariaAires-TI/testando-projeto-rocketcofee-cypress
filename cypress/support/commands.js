// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Criando comando que preenche os campos obrigatórios

Cypress.Commands.add('fillMandatoryFields', function () {    
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
})

Cypress.Commands.add('errorWhenAmountCoffeeIsNotSelected', function (idCoffe, idQuantity, idCheckCoffe) {    
    cy.get(idCoffe).click()
    cy.get(idQuantity).select('0')

    cy.contains('button', 'Enviar').should('be.visible').click()
             
    cy.get(idCheckCoffe).should('be.visible')          
})

Cypress.Commands.add('errorWhenCoffeeIsNotSelected', function (idCoffe, idQuantity, idCheckCoffe) {    
    cy.get(idCoffe)
    cy.get(idQuantity).select('1')
    cy.contains('button', 'Enviar').should('be.visible').click()
     
    cy.get(idCheckCoffe).should('be.visible')        
})



           
