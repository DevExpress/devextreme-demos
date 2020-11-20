var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.fileUploaderImages = {
        multiple: true,
        uploadMode: "useButtons",
        uploadUrl: "https://js.devexpress.com/FileUploader/Upload",
        allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"]
    };

    $scope.fileUploaderMaxSize = {
        multiple: true,
        uploadMode: "useButtons",
        uploadUrl: "https://js.devexpress.com/FileUploader/Upload",
        maxFileSize: 4000000
    };
});