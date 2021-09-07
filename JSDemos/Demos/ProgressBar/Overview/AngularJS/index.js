const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  let seconds = 10;
  let inProgress = false;
  let intervalId;

  $scope.progressBarValue = 0;
  $scope.buttonText = 'Start progress';

  $scope.progressBarOptions = {
    min: 0,
    max: 100,
    width: '90%',
    bindingOptions: {
      value: 'progressBarValue',
    },
    statusFormat(value) {
      return `Loading: ${value * 100}%`;
    },
    onComplete(e) {
      inProgress = false;
      $scope.buttonText = 'Restart progress';
      e.element.addClass('complete');
    },
  };

  $scope.buttonOptions = {
    width: 200,
    bindingOptions: {
      text: 'buttonText',
    },
    onClick() {
      $('#progressBarStatus').removeClass('complete');
      if (inProgress) {
        $scope.buttonText = 'Continue progress';
        clearInterval(intervalId);
      } else {
        $scope.buttonText = 'Stop progress';
        setCurrentStatus();
        intervalId = setInterval(timer, 1000);
      }
      inProgress = !inProgress;
    },
  };

  function setCurrentStatus() {
    $scope.progressBarValue = (10 - seconds) * 10;
    $('#timer').text((`0${seconds}`).slice(-2));
  }

  function timer() {
    seconds--;
    $scope.$apply(() => {
      setCurrentStatus();
    });
    if (seconds === 0) {
      clearInterval(intervalId);
      seconds = 10;
    }
  }
});
