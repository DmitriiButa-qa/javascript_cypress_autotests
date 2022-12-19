describe('Тестирование Staya', function () {
    it('Проверка авторизации с правильными логином и паролем', function () {
        cy.visit('https://staya.dog/');
        cy.wait(40000);
        cy.get('.Dec2022FamilyDelivertyPromo__closeButton').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('buta.dmitry@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('MisterLit88');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.wait(30000);
        cy.contains('Мои заказы')
    })
})