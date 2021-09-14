const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.fileUploaderOptions = {
    selectButtonText: 'Select photo',
    labelText: '',
    accept: 'image/*',
    uploadMode: 'useForm',
  };
  $scope.buttonOptions = {
    text: 'Update profile',
    type: 'success',
    onClick() {
      DevExpress.ui.dialog.alert('Uncomment the line to enable sending a form to the server.', 'Click Handler');
      // $("#form").submit();
    },
  };
});
