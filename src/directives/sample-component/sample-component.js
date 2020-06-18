export default ngModule => {
    if ( TEST_MODE ) {
        require('./sample-component.test').default(ngModule);
    }
    require('./sample-component.scss');
    ngModule.directive('sampleComponent', ($log) => { 
        return {
            restrict: 'E',
            scope: {},
            // templateUrl: 'src/directives/sample-component.html',
            template: require('./sample-component.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;                
                vm.greeting = 'Hello Webpack';
                $log.info('I have some info...');
            }
        };
    });
}