describe('Volvo Cars Safety Page', () => {
    it('should have the correct title', () => {
        browser.url('/intl/v/car-safety/a-million-more');
        expect(browser).toHaveTitle('A Million More | Volvo Cars');
    });

    it('should display the correct heading', () => {
        browser.url('/intl/v/car-safety/a-million-more');
        const heading = $('h1');
        expect(heading).toBeDisplayed();
        expect(heading).toHaveTextContaining('A million more');
    });

    it('should have a visible video', () => {
        browser.url('/intl/v/car-safety/a-million-more');
        const video = $('video');
        expect(video).toBeDisplayed();
    });
});