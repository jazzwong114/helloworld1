(function() {
  'use strict';

  angular
    .module('helloworld')
    .controller('ClientAccController', ClientAccController)
    .service('ContactService',ContactService);


    //services
    function ContactService($log) {
    	var uid=-1;
    	var contactArray=[];

    	//add new
    	this.save=function(contact){
    		if(contact.id==null)
    		{
    			contact.id=uid++;
    			contactArray.push(contact);
    		}
    		else
    		{
    			for(var i in contactArray)
    			{
    				if(contactArray[i].id==contact.id)
    					contactArray[i] = contact;
    			}
    		}
    	
    	}

    	//retrieve
    	this.get=function(id){
    		for(var i in contactArray)
    		{
    			if(contactArray[i].id == id)
    				return contactArray[i];
    		}
    	}

    	//delete
    	this.delete = function (id) {
	        for (var i in contactArray) {
	            if (contactArray[i].id == id) {
	                contactArray.splice(i, 1);
	            }
	        }
    	}

        //eturns contactArray
	    this.getList = function () {
	        return contactArray;
    	}
	}


	//controller
	function ClientAccController($scope,ContactService,$log) {
		var vm = this;
		vm.saveContact=saveContact;
		$scope.contacts = ContactService.getList();

		function saveContact(){
			ContactService.save(vm.newcontact);
			vm.newcontact={};
			$scope.contacts = ContactService.getList();
		}


		$scope.delete = function (id) {
	        ContactService.delete(id);
	        if (vm.newcontact.id == id) vm.newcontact = {};
	        $scope.contacts = ContactService.getList();
	    }


		$scope.edit = function (id) {
	        vm.newcontact = angular.copy(ContactService.get(id));
	    }

	}

})();
