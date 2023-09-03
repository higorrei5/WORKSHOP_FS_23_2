describe('Automação de testes -  Saucedemo', () => {
  it('Verificar abertura do site e autenticação', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('button').contains('Add to cart').should('be.visible')

  })
  it('Validar erro no login com credenciais invalidas', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').should('be.visible')

    cy.get('#user-name').type('teste')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('h3').contains('Username and password do not match any user in this service').should('be.visible')

  })

  it('Validar tela de carrinho', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').should('be.visible')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#cart_contents_container').should('be.visible')

  })

  it('Validar inclusão de produto no carrinho e checkout', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').should('be.visible')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item_name').should('be.visible')
    cy.get('button').contains('Add to cart').click()
    cy.get('#remove-sauce-labs-backpack').should('be.visible')

    cy.get('#shopping_cart_container').click()
    cy.get('#cart_contents_container').should('be.visible')
    cy.get('.inventory_item_name').should('be.visible')
    cy.get('#checkout').click()

    cy.get('#first-name').type('Higor')
    cy.get('#last-name').type('Reis')
    cy.get('#postal-code').type('000000')
    cy.get('#continue').click()

    cy.get('#finish').click()

    cy.get('.complete-header').contains('Thank you for your order!').should('be.visible')

  })

  
})