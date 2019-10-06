describe('Bloglist app bloglists', function() {
  let token
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'sarju',
      username: 'sarju',
      password: 'password'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.request('POST', 'http://localhost:3003/api/login/', user)
      .then(resp => {
        console.log('token ******: ', resp.body)
        token = resp.body.token
      })
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=username]')
      .type('sarju')
    cy.get('[data-cy=password]')
      .type('password')
    cy.get('[data-cy=login]')
      .click()
  })

  it('can create a new blog', function() {
    cy.get('[data-cy=createBlog]')
      .click()
    cy.get('[data-cy=title]')
      .type('title1')
    cy.get('[data-cy=author]')
      .type('test author')
    cy.get('[data-cy=url]')
      .type('www.blog.com')
    cy.get('[data-cy=addBlog]')
      .click()
    cy.contains('title1 test author')
  })

  it('clicking blog title displays blog details', function() {
    const blog = {
      title: 'title 1',
      author: 'test author',
      url: 'www.blog.com'
    }
    // cy.window().then(window => console.log('token ******: ', token))
    const options = {
      method: 'POST',
      url: 'http://localhost:3003/api/blogs/',
      auth: {
        bearer: token
      },
      body: blog
    }
    cy.request(options)
    cy.get('[data-cy=blog-header]')
      .click()
    cy.url().should('include', '/blogs/')
    cy.contains('www.blog.com')
  })
})