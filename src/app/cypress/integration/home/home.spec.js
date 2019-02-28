describe('Tests para la pagina de Inicio (+ Nueva Inscripción)', () => {

    it('Visitar la página de Nueva Inscripción', () => {
        cy.fixture('datasets').then((data) => {
            cy.visit('/');
            cy.get(data[0].elements.input_username).type(data[0].data.email);
            cy.get(data[0].elements.input_password).type(data[0].data.password);
            cy.get(data[0].elements.button_login).click();
            cy.wait(1000)
            cy.get(data[0].elements.home_title).should('contain', data[0].asserts.home_title);
        })
    })
});