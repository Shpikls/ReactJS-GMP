describe('Test App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:9000/')
	})

	it('Test', () => {
		cy.viewport(1920, 1080)
		cy.contains('Fifty Shades Freed')
		cy.contains('Star Wars: The Last Jedi')
		cy.contains('Tomb Raider')
		cy.contains('The Shape of Water')

		cy.get('[placeholder="What do you want to watch?"]').click().type('Avengers{Enter}')

		cy.contains('The Avengers')
		cy.contains('Avengers: Age of Ultron')
		cy.contains('Avengers: Infinity War')
		cy.contains('Untitled Avengers').click()

		cy.contains('The culmination of the Marvel Cinematic Universe.')
	})
})
