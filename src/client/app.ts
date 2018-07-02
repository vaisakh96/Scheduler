import * as angular from 'angular';
import thiefAngular from '@fds/thief-angular';
import thiefAngularGrid from '@fds/thief-angular-grid';
import '@fds/thief-angular/dist/css/thief-angular-quartz.css';
import '@fds/thief-angular-grid/dist/thief-angular-grid-quartz.css';
import appTemplate from './app.tpl.html';
import superman from './domestic.module';
import super2man from './international.module';
import main from './main.module';
import domesComponent from './domestic.component';
import interComponent from './international.component';
import mainComponent from './main.component';

const app = angular.module('angular-training', [ thiefAngular, thiefAngularGrid, superman , super2man , main ]);

// $scope.emitEvent = function(){
//   $scope.$emit('childEvent', {message: 'Hello from Ctrl 3'});

class AppCtrl {
  public veg: boolean = false;
  public nveg: boolean = false;
  public check:boolean = !(this.veg || this.nveg);
  
	$onInit = function() {
      console.log("App Initialization");
 };

}

app.component('mainApp', {
	template: appTemplate,
	controller: AppCtrl
});

app.controller('AppCtrl', AppCtrl)

// Routing
// TODO: example showcase https://github.com/morganster/angularjs-ts-starter/blob/master/app/app.component.html

export default app;
