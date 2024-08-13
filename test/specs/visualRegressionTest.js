describe('Visual Regression Testing', () => {
    it('should compare the home page with a baseline', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const screenshot = browser.checkElement('.main-content');
        expect(screenshot).toEqual(0); // 0 means no difference
    });
});