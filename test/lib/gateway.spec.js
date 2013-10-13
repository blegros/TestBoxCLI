describe('Gateway to TestBox runner', function () {
    describe('when runner is started', function () {
    });

    describe('when runner receives notice a test has executed', function () {
        it('should show incremental progress');

        describe('and when the test\'s status is known', function () {
            it('should understand a test passing');
            it('should understand a test failing');
            it('should understand a test being ignored/skipped');
        });
    });

    describe('when runner receives notice that all tests have completed', function () {
        it('should show progress completion');

        describe('and when the final test result is known', function () {
            it('should understand all tests passing');
            it('should understand some test failing');
        });
    });
});