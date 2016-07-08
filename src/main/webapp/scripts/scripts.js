		angular.module("yapp", [ "ui.router", "ngAnimate"]).config(
				[
						"$stateProvider",
						"$urlRouterProvider",
						function(r, t) {
							t.when("/dashboard", "/dashboard/configure"), t
									.otherwise("/login"), r.state("base", {
								"abstract" : !0,
								url : "",
								data : {
									requireLogin : true
								},
								templateUrl : "views/base.html"
							}).state("login", {
								url : "/login",
								data : {
									requireLogin : false
								},
								parent : "base",
								templateUrl : "views/login.html",
								controller : "LoginCtrl"
							}).state("logout", {
								url : "/logout",
								data : {
									requireLogin : false
								},
								parent : "base",
								templateUrl : "views/login.html",
								controller : "LogoutCtrl"
							}).state("dashboard", {
								url : "/dashboard",
								parent : "base",
								templateUrl : "views/dashboard.html",
								controller : "DashboardCtrl"
							}).state("configure", {
								url : "/configure",
								data : {
									requireLogin : true
								},
								parent : "dashboard",
								templateUrl : "views/dashboard/configure.html"
							}).state("addScreens", {
								url : "/addscreens",
								data : {
									requireLogin : true
								},
								parent : "dashboard",
								templateUrl : "views/dashboard/addscreens.html"
							}).state("changePassword", {
								url : "/changePassword",
								data : {
									requireLogin : true
								},
								parent : "dashboard",
								templateUrl : "views/dashboard/changepassword.html"
							})
						} ]),
						angular.module("yapp").service("UserService", function() {
							var loggedInUser;
							return {
								getLoggedInUser : function () {
									return loggedInUser;
								},
							
								setLoggedInUser : function (userName) {
									loggedInUser = userName;
								}
							}
						}),
						angular
						.module("yapp")
						.controller(
								"LoginCtrl",
								[
										"$scope",
										"$location",
										"$http",
										"$rootScope",
										"UserService",
										function(r, s, t, p, u) {
											
											r.submit = function() {

												if (r.userName == undefined
														|| r.passwd == undefined) {
													alert("Please enter username and password to login.");
													return;
												}


												if (r.userName.trim() == ""
														|| r.passwd.trim() == "") {
													alert("User name or password cannot contain spaces");
													return;
												}

												var request = t({
													method : "post",
													url : "/reservationstatus/rest/validateUser/"
															+ r.userName
															+ "/"
															+ r.passwd
												});

												request
														.success(function(response) {

															if (response.code == 502) {
																alert("User Validation Failed. Either the username or the password doesnt match our records");
																return;
															}
															u.setLoggedInUser(r.userName);
															r.loggedInUser = r.userName;
															return s.path("/dashboard"), !1
														});

											}
											

											
											
										} ]),
						angular
						.module("yapp")
						.controller(
								"LogoutCtrl",
						[
								"$location",
								"$http",
								"UserService",
								function( s, t, u) {
									
									u.setLoggedInUser(null);
									
									var request = t({
										method : "post",
										url : "/reservationstatus/rest/logoutuser/admin/"
									});
									
									request
									.success(function(response) {
										return s.path("/login"), !1
									});										
									
								} ]),
								angular
								.module("yapp")
								.controller(
										"ChangePwdCtrl",
								[		"$scope",
										"$location",
										"$http",
										"UserService",
										function(r, s, t, u) {
											
											if(u.getLoggedInUser() == null) {
												alert ("User not logged in");
												return s.path("/login"), !1
											}											
											
											r.changePassword = function () {
												
												
												
												if (r.currentPasswd == undefined || r.newPasswd == undefined || r.confirmPasswd == undefined) {
													alert("Passwords cannot be null");
													return;
												}
												
												if (r.newPasswd != r.confirmPasswd) {
													alert("The new passwords does not match");
													return;
												}
												

												var request = t({
													method : "post",
													url : "/reservationstatus/rest/changePassword/admin/"
															+ r.currentPasswd
															+ "/"
															+ r.newPasswd

												});

												
												
												request
														.success(function(response) {

															if (response.code == 502) {
																alert("The current password does not match with the password stored in the DB for the user");
																return;
															}

															alert("Password was changed successfully. Please login using new password")
															return s.path("/login"), !1
														});										
												
											}
											
									
											
										} ]),										
		angular.module("yapp").controller("DashboardCtrl",
				[ "$scope", "$state", function(r, t) {
					r.$state = t
				} ]),
		angular
				.module("yapp")
				.controller(
						"PlatformConfigController",
						function($scope, $http, $location,UserService) {
							
							
							$scope.hideTrainInfo = true;
							$scope.hideAddForm = true;

							
							if(UserService.getLoggedInUser() == null) {
								alert ("User not logged in");
								return $location.path("/login"), !1
							}
							

							$scope.getPlatformInfo = function() {
								var wsUrl = "/reservationstatus/rest/getPlatforms";

								// blockUI.start();
								$http.get(wsUrl, {
									timeout : 15000
								}).then(function(response) {
									$scope.platforms = response.data;

								});
							};

							$scope.getPlatformInfo();

							$scope.selectPlatform = function() {
								$scope.getTrainInfo();
								$scope.hideAddForm = true;
							};

							$scope.getTrainInfo = function() {
								var wsUrl = "/reservationstatus/rest/getTrainInfo/"
										+ $scope.selectedPlatform.screenIdentifier;
								$http.get(wsUrl).then(function(response) {

									$scope.trainInfo = response.data;

									$scope.hideTrainInfo = false;

								});
							};

							$scope.showAddForm = function() {
								$scope.hideAddForm = false;
								$scope.trainNumber = "";
								$scope.trainName = "";
								$scope.stationCode = "";
								$scope.journeyClass = "";
								$scope.journeyDate  = "";

							};

							$scope.removeTrainConf = function() {

								var wsAddDataUrl = "/reservationstatus/rest/removePlatformConf/"
										+ $scope.selectedPlatform.screenIdentifier;

								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data removed successfully");
											$scope.hideAddForm = true;
											$scope.getTrainInfo();
										});
							}

							$scope.updateTrainInfo = function() {

								$scope.trainNumberMsg = "";
								$scope.stationMsg = "";
								$scope.classMsg = "";
								$scope.dateMsg = "";

								if ($scope.trainNumber == undefined
										|| $scope.trainNumber == "") {
									console
											.log("Train Number is mandatory field");
									$scope.trainNumberMsg = "Train Number is mandatory field";
									alert("Error occured while processing the data");
									return;
								}

								if ($scope.journeyClass == undefined
										|| $scope.journeyClass == "") {
									$scope.classMsg = "Class is mandatory field";
									alert("Error occured while processing the data");
									return;
								}

								if ($scope.stationCode == undefined
										|| $scope.stationCode == "") {
									$scope.stationMsg = "Station Code is mandatory field";
									alert("Error occured while processing the data");
									return;
								}

								if ($scope.journeyDate == undefined
										|| $scope.journeyDate == "") {
									$scope.dateMsg = "Date of Journey is mandatory";
									alert("Error occured while processing the data");
									return;
								}

								var jsDate = new Date($scope.journeyDate);
								var dateOfJourney = zeroPadNumber(jsDate
										.getDate())
										+ "-"
										+ zeroPadNumber((jsDate.getMonth() + 1))
										+ "-" + jsDate.getFullYear();
								var wsAddDataUrl = "/reservationstatus/rest/configurePlatform/"
										+ $scope.selectedPlatform.screenIdentifier
										+ "/"
										+ $scope.trainNumber
										+ "/"
										+ $scope.trainName
										+ "/"
										+ $scope.journeyClass
										+ "/"
										+ dateOfJourney
										+ "/"
										+ $scope.stationCode;
								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data added successfully");
											$scope.hideAddForm = true;
											$scope.getTrainInfo();
										});

							};

							$scope.getTrainInfoByNumber = function() {

								if ($scope.trainNumber != undefined) {
									var wsUrl = "/reservationstatus/rest/getTrainInfoByNumber/"
											+ $scope.trainNumber;
									$scope.trainNameMsg = "Loading train information .....";
									// blockUI.start();
									$http
											.get(wsUrl, {
												timeout : 15000
											})
											.then(
													function(response) {
														$scope.trainNameMsg = "";
														// blockUI.stop();
														$scope.trainInfoByNumber = response.data;
														$scope.trainName = $scope.trainInfoByNumber.trains[0].full_name;
													});
								}
							}

							$scope.checkClass = function() {
								var classFound = false;
								$scope.classMsg = "";
								for ( var i in $scope.trainInfoByNumber.trains[0].classes) {
									var journeyClass = $scope.trainInfoByNumber.trains[0].classes[i];
									if (journeyClass["class-code"] == $scope.journeyClass) {
										classFound = true;
										break;
									}
								}

								if (!classFound) {
									alert("Class entered in not applicable for the selected train");
									$scope.classMsg = "Class entered is not applicable for the train";
									return;
								}
							}

							function zeroPadNumber(nValue) {
								if (nValue < 10) {
									return ('0' + nValue.toString());
								} else {
									return (nValue);
								}
							}

						}),
		angular
				.module("yapp")
				.controller(
						"ScreenAddController",
						function($scope, $http,$location,UserService) {
							
							
							if(UserService.getLoggedInUser() == null) {
								alert ("User not logged in");
								return $location.path("/login"), !1
							}
							
							$scope.hideAddForm = true;

							$scope.showAddConfiguration = function() {
								$scope.hideAddForm = false;
							}

							$scope.addPlatforms = function() {

								if ($scope.platformNumber == undefined
										|| $scope.platformNumber == '0'
										|| $scope.screenNumber == undefined
										|| $scope.screenNumber == '0') {
									alert("Platform Number or Screen Number is required and should not be zero");

									return;
								}

								if ($scope.screenNumber == undefined) {
									$scope.screenNumber = "";
								}

								var wsAddDataUrl = "/reservationstatus/rest/addScreen/"
										+ $scope.platformNumber
										+ "/"
										+ $scope.screenNumber;

								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data added successfully");
											$scope.getConfigInfo();
										});

							}

							$scope.getConfigInfo = function() {
								var wsUrl = "/reservationstatus/rest/getPlatforms";

								// blockUI.start();
								$http.get(wsUrl, {
									timeout : 15000
								}).then(function(response) {
									$scope.platformData = response.data;

								});
							};

							$scope.getConfigInfo();

							$scope.removeScreen = function(r, t) {
								console("inside remove + " + r + ":" + t);
							};

						});
						