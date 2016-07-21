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
							}).state("userAdmin", {
								url : "/userAdmin",
								data : {
									requireLogin : true
								},
								parent : "dashboard",
								templateUrl : "views/dashboard/useradmin.html"
							}).state("changePassword", {
								url : "/changePassword",
								data : {
									requireLogin : true
								},
								parent : "dashboard",
								templateUrl : "views/dashboard/changepassword.html"
							})
						} ]),
						angular.module("yapp").service("UserService", function($http) {
							var loggedInUser;
							var numberOfPlatforms;
							return {
								getLoggedInUser : function () {
									return loggedInUser;
								},
							
								setLoggedInUser : function (userName) {
									loggedInUser = userName;
								},
								
								getNumberOfPlatforms : function () {
									return numberOfPlatforms;
								},	
								
								setNumberOfPlatforms : function() {
									var wsScreenDataUrl = "/reservationstatus/rest/getNumberOfPlatforms" ;
									$http.get(wsScreenDataUrl, {
										timeout : 15000
									}).then(function(response) {
										numberOfPlatforms = response.data;

										console.log("number of platforms:" + numberOfPlatforms);
										
									});
									
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
															u.setNumberOfPlatforms();

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
											
											r.loggedInUser = u.getLoggedInUser();
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
													url : "/reservationstatus/rest/changePassword/"
															+ r.loggedInUser 
															+ "/"
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
				[ "$scope", "$state", "UserService", function(r, t, u) {
					r.$state = t;
					r.loggedInUser = u.getLoggedInUser();
					console.log("inside dash controller");
				
					if (r.loggedInUser == "admin") {
						console.log("showing link");
						r.hideUserAdminLink = false;
					}
					else {
						console.log("hiding link");
						r.hideUserAdminLink = true;
					}
					
					
				} ]),
		angular
				.module("yapp")
				.controller(
						"PlatformConfigController",
						function($scope, $http, $location,UserService) {
							
							
							//$scope.hideTrainInfo = true;
							$scope.hideAddForm = true;
							$scope.hideSubmitForm=true;
							
							$scope.hidePlatform1 = true;
							$scope.hidePlatform2 = true;
							$scope.hidePlatform3 = true;
							$scope.hidePlatform4 = true;
							$scope.hidePlatform5 = true;
							$scope.hidePlatform6 = true;
							$scope.hidePlatform7 = true;
							$scope.hidePlatform8 = true;
							$scope.hidePlatform9 = true;
							$scope.hidePlatform10 = true;
							$scope.hidePlatform11 = true;
							$scope.hidePlatform12 = true;
							console.log("all platforms hidden");
							
//							if(UserService.getLoggedInUser() == null) {
//								alert ("User not logged in");
//								return $location.path("/login"), !1
//							}
							
							$scope.numberOfPlatforms = UserService.getNumberOfPlatforms();
							
							$scope.getScreenConfig = function(platform) {
								var wsScreenDataUrl = "/reservationstatus/rest/getScreenConfig/" + platform;
								console.log("calling " + wsScreenDataUrl)
								$scope.platform01screens = []
								$http.get(wsScreenDataUrl, {
									timeout : 15000
								}).then(function(response) {
									if (platform == "1") {
										$scope.platformOneScreens = response.data.screens;

									}
									if (platform == "2") {
										$scope.platformTwoScreens = response.data.screens;

									}
									if (platform == "3") {
										$scope.platformThreeScreens = response.data.screens;

									}
									if (platform == "4") {
										$scope.platformFourScreens = response.data.screens;

									}
									if (platform == "5") {
										$scope.platformFiveScreens = response.data.screens;

									}
									if (platform == "6") {
										$scope.platformSixScreens = response.data.screens;

									}
									if (platform == "7") {
										$scope.platformSevenScreens = response.data.screens;

									}
									if (platform == "8") {
										$scope.platformEightScreens = response.data.screens;

									}
									if (platform == "9") {
										$scope.platformNineScreens = response.data.screens;

									}
									if (platform == "10") {
										$scope.platformTenScreens = response.data.screens;

									}
									if (platform == "11") {
										$scope.platformElevenScreens = response.data.screens;

									}
									if (platform == "12") {
										$scope.platformTwelveScreens = response.data.screens;

									}
									
//									console.log($scope.screenData);
//									console.log("Screen data length:" + Object.keys($scope.screenData).length)
//									if(Object.keys($scope.screenData).length < 1) {
//										$scope.hideNoScreenConfigMessage = false;
//										$scope.hideScreenConfigTable = true;
//									}
//									else {
//										$scope.hideNoScreenConfigMessage = true
//										$scope.hideScreenConfigTable = false;
//									}
									

								});
							}
							

							
							
							console.log($scope.numberOfPlatforms);
							if ($scope.numberOfPlatforms == undefined || $scope.numberOfPlatforms == null) {
								$scope.hideNoScreenConfigMessage = false;
								$scope.hidePlatforms = true;
								console.log("true");
							}
							else {
								$scope.hideNoScreenConfigMessage = true;
								$scope.hidePlatforms = false;
								console.log("False");
							}
							
							if ($scope.numberOfPlatforms == "1") {
								$scope.getScreenConfig("1");
								$scope.hidePlatform1 = false;
							}
							if ($scope.numberOfPlatforms == "2") {
								$scope.getScreenConfig("2");
								$scope.hidePlatform2 = false;
								console.log("2");
							}
							if ($scope.numberOfPlatforms == "3") {
								$scope.getScreenConfig("3");
								$scope.hidePlatform3 = false;
								console.log("3");
							}
							if ($scope.numberOfPlatforms == "4") {
								$scope.getScreenConfig("4");
								$scope.hidePlatform4 = false;
							}
							if ($scope.numberOfPlatforms == "5") {
								$scope.getScreenConfig("5");
								$scope.hidePlatform5 = false;
							}
							if ($scope.numberOfPlatforms == "6") {
								$scope.getScreenConfig("6");
								$scope.hidePlatform6 = false;
							}
							if ($scope.numberOfPlatforms == "7") {
								$scope.getScreenConfig("7");
								$scope.hidePlatform7 = false;
							}
							if ($scope.numberOfPlatforms == "8") {
								$scope.getScreenConfig("8");
								$scope.hidePlatform8 = false;
							}
							if ($scope.numberOfPlatforms == "9") {
								$scope.getScreenConfig("9");
								$scope.hidePlatform9 = false;
							}
							if ($scope.numberOfPlatforms == "10") {
								$scope.getScreenConfig("10");
								$scope.hidePlatform10 = false;
							}
							if ($scope.numberOfPlatforms == "11") {
								$scope.getScreenConfig("11");
								$scope.hidePlatform11 = false;
							}
							if ($scope.numberOfPlatforms == "12") {
								$scope.getScreenConfig("12");
								$scope.hidePlatform12 = false;
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

//							$scope.selectPlatform = function() {
//								$scope.getTrainInfo();
//								//$scope.hideTrainInfo = false;
//								$scope.hideAddForm = true;
//							};

//							$scope.getTrainInfo = function() {
//								var wsUrl = "/reservationstatus/rest/getTrainInfo/"
//										+ $scope.selectedScreenIdentifier;
//								$http.get(wsUrl).then(function(response) {
//
//									$scope.trainInfo = response.data;
//
//									
//
//								});
//							};

							$scope.showAddForm = function(screenIdentifier) {
								
								$scope.selectedScreenIdentifier = screenIdentifier;
								$scope.hideAddForm = false;
								$scope.trainNumber = "";
								$scope.trainName = "";
								$scope.stationCode = "";
								$scope.journeyClass = "";
								$scope.journeyDate  = "";

							};

							$scope.removeTrainConf = function(screenIdentifier) {

								var wsAddDataUrl = "/reservationstatus/rest/removePlatformConf/"
										+ screenIdentifier;

								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data removed successfully");
											$scope.hideAddForm = true;
											//$scope.getTrainInfo();
											$scope.getScreenConfig();
										});
							}

							$scope.updateTrainInfo = function() {

								$scope.trainNumberMsg = "";
								$scope.stationMsg = "";
								$scope.classMsg = "";
								$scope.dateMsg = "";



								if ($scope.selectedJourneyClass == undefined
										|| $scope.selectedJourneyClass == "") {
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



								var jsDate = new Date($scope.journeyDate);
								var dateOfJourney = zeroPadNumber(jsDate
										.getDate())
										+ "-"
										+ zeroPadNumber((jsDate.getMonth() + 1))
										+ "-" + jsDate.getFullYear();
								var wsAddDataUrl = "/reservationstatus/rest/configurePlatform/"
										+ $scope.selectedScreenIdentifier
										+ "/"
										+ $scope.trainNumber
										+ "/"
										+ $scope.trainName
										+ "/"
										+ $scope.selectedJourneyClass
										+ "/"
										+ dateOfJourney
										+ "/"
										+ $scope.stationCode;
								
								
								
								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data added successfully");
											$scope.hideAddForm = true;
											//$scope.getTrainInfo();
											$scope.getScreenConfig();
											//$scope.selectedPlatform=null;
											//$scope.hideTrainInfo = true;
										});

							};

							$scope.getTrainInfoByNumber = function() {

								if ($scope.trainNumber == undefined
										|| $scope.trainNumber == "") {
									console
											.log("Train Number is mandatory field");
									$scope.trainNumberMsg = "Train Number is mandatory field";
									alert("Error occured while processing the data");
									return;
								}
								
								if ($scope.journeyDate == undefined
										|| $scope.journeyDate == "") {
									$scope.dateMsg = "Date of Journey is mandatory";
									alert("Error occured while processing the data");
									return;
								}
								
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
														console.log($scope.trainInfoByNumber);
														console.log($scope.trainInfoByNumber.trains[0].classes)
														$scope.trainName = $scope.trainInfoByNumber.trains[0].full_name;
														$scope.hideSubmitForm=false;
														
														$scope.journeyClasses=[];
														
//													    for(var j=0; j<journeyClasses.length; j++) {
//													    	console.log(journeyClasses[j].class-code);
//													            classesArray.push(journeyClasses[j]."class-code");
//													    }
													    

														for ( var i in $scope.trainInfoByNumber.trains[0].classes) {
															var journeyClass = $scope.trainInfoByNumber.trains[0].classes[i];
														//	if(journeyClass["available"] == "Y") {
																$scope.journeyClasses.push(journeyClass["class-code"]);
														//	}
														}														
														

													});
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
									
									hideNoDataMessage = false;
									
									if(UserService.getLoggedInUser() == null) {
										alert ("User not logged in");
										return $location.path("/login"), !1
									}
									
									$scope.hideAddForm = true;

									$scope.showAddConfiguration = function() {
										$scope.hideAddForm = false;
									}

									
									$scope.removeScreen = function(platform,screen) {
										var wsAddDataUrl = "/reservationstatus/rest/removeScreen/"
											+ platform+"/" + screen;
										console.log(wsAddDataUrl);
									$http.post(wsAddDataUrl).then(
											function(response) {

												alert("Screen Removed successfully");
												$scope.getConfigInfo();
											});
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
													$scope.hideAddForm = true;
													$scope.platformNumber=null;
													$scope.screenNumber = null;
													$scope.hideConfigurationInfo = false;
													alert("Data added successfully");
													$scope.getConfigInfo();
												});

									}

									$scope.getConfigInfo = function() {
										var wsUrl = "/reservationstatus/rest/getPlatforms";
										$scope.platformData = null;
										// blockUI.start();
										$http.get(wsUrl, {
											timeout : 15000
										}).then(function(response) {
											$scope.platformData = response.data;
											
											if(Object.keys($scope.platformData).length < 1) {
												console.log("screen data is null");
												$scope.hideConfigurationInfo = true;
												$scope.hideNoDataMessage = false;
											}
											else {
												console.log("Data is present");
												$scope.hideConfigurationInfo = false;
												$scope.hideNoDataMessage = true;										
											}
											console.log("screen data length= " + Object.keys($scope.platformData).length);
										});
									};

									$scope.getConfigInfo();

								}),
						angular
						.module("yapp")
						.controller(
								"UserAdminController",
								function($scope, $http,$location,UserService) {
									
									if(UserService.getLoggedInUser() == null) {
										alert ("User not logged in");
										return $location.path("/login"), !1
									}
									
									$scope.hideAddUserForm = true;
									$scope.hideChangePasswordForm = true;
									$scope.userNameToChange = null;
				
									$scope.showAddUserForm = function() {
										$scope.hideAddUserForm = false;
									}
				
									
									$scope.showChangePasswordForm = function(userName) {
										$scope.hideChangePasswordForm = false;
										$scope.userNameToChange = userName;
									}
									
									$scope.deleteUser = function(userName) {
										
										if (userName == "admin") {
												alert("Admin user cannot be deleted");
												return;
										}
										var wsAddDataUrl = "/reservationstatus/rest/deleteUser/"
											+ userName;
				
									$http.post(wsAddDataUrl).then(
											function(response) {
				
												alert("User Deleted successfully");
												$scope.getUsers();
											});
									}
									
									$scope.addUser = function() {
										if ($scope.userName == undefined
												|| $scope.newPassword == undefined
												|| $scope.confirmPassword == undefined) {
											alert("User name and password should not be empty");
				
											return;
										}
				
										if ( $scope.newPassword != $scope.confirmPassword ) {
											alert("Entered Passwords do not match");
				
											return;
										}
				
										var wsAddDataUrl = "/reservationstatus/rest/addUser/"
												+ $scope.userName
												+ "/"
												+ $scope.confirmPassword;
										console.log("Calling " + wsAddDataUrl)
				
										$http.post(wsAddDataUrl).then(
												function(response) {
													$scope.hideAddUserForm = true;
													$scope.userName=null;
													$scope.newPassword = null;
													$scope.confirmPassword = null;
													alert("User added successfully");
													$scope.getUsers();
												});
				
									}
				
									
									$scope.changePassword = function() {
										if ($scope.newChangePassword == undefined
												|| $scope.confirmChangePassword == undefined) {
											alert("passwords should not be empty");
				
											return;
										}
				
										if ( $scope.newChangePassword != $scope.confirmChangePassword ) {
											alert("Entered Passwords do not match");
				
											return;
										}
				
										var wsAddDataUrl = "/reservationstatus/rest/addUser/"
												+ $scope.userNameToChange
												+ "/"
												+ $scope.newChangePassword;
										console.log("Calling " + wsAddDataUrl)
				
										$http.post(wsAddDataUrl).then(
												function(response) {
													$scope.hideChangePasswordForm = true;
													$scope.newChangePassword=null;
													$scope.confirmChangePassword = null;
													$scope.userNameToChange = null;
													alert("Password changed successfully");
													//$scope.getUsers();
												});
				
									}									
									
									$scope.getUsers = function() {
										var wsUrl = "/reservationstatus/rest/getUsers";
										$scope.usersData = null;
										$http.get(wsUrl, {
											timeout : 15000
										}).then(function(response) {
											$scope.usersData = response.data;

										});
									};
				
									$scope.getUsers();
				
								});
								