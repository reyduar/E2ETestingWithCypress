describe('Tests para la pagina de Inicio de Sesion', () => {
    it('Navegar al inicio de sesion', () => {

        cy.fixture('datasets').then((data) => {
            cy.visit('/');
            cy.get(data[0].elements.checkbox_label).should('contain', data[0].asserts.login_label);
        })
    });

    it('Iniciar sesion en la aplicación', () => {
        cy.fixture('datasets').then((data) => {
            cy.get(data[0].elements.input_username).type(data[0].data.email);
            cy.get(data[0].elements.input_password).type(data[0].data.password);
            cy.get(data[0].elements.button_login).click();
            cy.get(data[0].elements.home_title).should('contain', data[0].asserts.home_title);
        })
    });

    it('Cerrar Sesion', () => {
        cy.fixture('datasets').then((data) => {
            cy.get(data[0].elements.button_logout).click();
            cy.get(data[0].elements.checkbox_label).should('contain', data[0].asserts.login_label);
        })
    });
});