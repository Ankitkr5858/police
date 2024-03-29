  var app = angular.module("addrBook",[]);
        app.controller("myCtrl",function($scope){
            $scope.info = [
                {name:"Robert",city:"Bangalore"},
                {name:"Sam",city:"Delhi"},
                {name:"Bill",city:"Mumbai"}
            ];
           
            $scope.addMe = function(){
                return {
                    name: $scope.newName,
                    city: $scope.newCity
                }
            }
            $scope.addItem = function(){
             for(var i=0;i<$scope.info.length;i++){
               
                 if(($scope.info[i].name == $scope.addMe().name)||
                    ($scope.info[i].city == $scope.addMe().city)){
                     alert("name was repeated");
                     return false;
                 }
             }
             $scope.info.push($scope.addMe());
              }
                
           
            $scope.removeItem = function(){
                $scope.info.splice(this.$index,1)
            }
              
            $scope.change = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return true;                 
                  }
              }    
            }
            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;                 
                  }
              }    
            }            
        })