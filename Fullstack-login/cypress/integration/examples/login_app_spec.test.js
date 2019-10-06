/* eslint-disable no-undef */
describe('Bloglist App Login', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'sarju',
      username: 'sarju',
      password: 'password'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('redirects to login page when user is not logged in', function() {
    cy.url().should('include', '/login')
  })
  it('displays error message when username password are incorrect', function() {
    cy.get('[data-cy=login]')
      .click()
    cy.contains('invalid username/password')
  })
  it('opens bloglist when username passwword are correct', function() {
    cy.get('[data-cy=username]')
      .type('sarju')
    cy.get('[data-cy=password]')
      .type('password')
    cy.get('[data-cy=login]')
      .click()
    cy.contains('logged in')
  })
})