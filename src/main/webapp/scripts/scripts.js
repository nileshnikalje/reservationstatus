		angular.module("yapp", [ "ui.router", "ngAnimate" ]).config(
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
							})
						} ]),
		angular
				.module("yapp")
				.controller(
						"LoginCtrl",
						[
								"$scope",
								"$location",
								"$http",
								"$rootScope",
								function(r, s, t,p) {
									console.log("here : " + r.userName);

									r.submit = function() {

										if (r.userName == undefined
												|| r.passwd == undefined) {
											alert("Please enter username and password to login.");
											return;
										}

										console.log("[" + r.userName.trim()
												+ "]");

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
													console.log(response.code);

													if (response.code == 502) {
														alert("User Validation Failed. Either the username or the password doesnt match our records");
														return;
													}

													return s.path("/dashboard"), !1
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
						function($scope, $http) {
							$scope.hideTrainInfo = true;
							$scope.hideAddForm = true;

							console.log("Inside controller url");

							$scope.getPlatformInfo = function() {
								var wsUrl = "/reservationstatus/rest/getPlatforms";
								console.log("url:" + wsUrl);

								// blockUI.start();
								$http.get(wsUrl, {
									timeout : 15000
								}).then(function(response) {
									console.log(response);
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
								console.log("url:" + wsUrl);
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

								console.log("url:" + wsAddDataUrl);
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
									console.log("Class is mandatory field");
									$scope.classMsg = "Class is mandatory field";
									alert("Error occured while processing the data");
									return;
								}

								if ($scope.stationCode == undefined
										|| $scope.stationCode == "") {
									console
											.log("Station Code is mandatory field");
									$scope.stationMsg = "Station Code is mandatory field";
									alert("Error occured while processing the data");
									return;
								}

								if ($scope.journeyDate == undefined
										|| $scope.journeyDate == "") {
									console.log("Date of Journey is mandatory");
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
								console.log("Date is " + dateOfJourney);
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
								console.log("url:" + wsAddDataUrl);
								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data added successfully");
											$scope.hideAddForm = true;
											$scope.getTrainInfo();
										});

							};

							$scope.getTrainInfoByNumber = function() {
								console.log("here");

								if ($scope.trainNumber != undefined) {
									var wsUrl = "/reservationstatus/rest/getTrainInfoByNumber/"
											+ $scope.trainNumber;
									console.log("url:" + wsUrl);
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
														console
																.log($scope.trainInfoByNumber.trains[0].full_name)
														$scope.trainName = $scope.trainInfoByNumber.trains[0].full_name;
													});
								}
							}

							$scope.checkClass = function() {
								var classFound = false;
								$scope.classMsg = "";
								console.log("looping");
								for ( var i in $scope.trainInfoByNumber.trains[0].classes) {
									var journeyClass = $scope.trainInfoByNumber.trains[0].classes[i];
									console.log(journeyClass["class-code"]);
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
						function($scope, $http) {
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

								console.log("url:" + wsAddDataUrl);
								$http.post(wsAddDataUrl).then(
										function(response) {

											alert("Data added successfully");
											$scope.getConfigInfo();
										});

							}

							$scope.getConfigInfo = function() {
								var wsUrl = "/reservationstatus/rest/getPlatforms";
								console.log("url:" + wsUrl);

								// blockUI.start();
								$http.get(wsUrl, {
									timeout : 15000
								}).then(function(response) {
									console.log(response);
									$scope.platformData = response.data;

								});
							};

							$scope.getConfigInfo();

							$scope.removeScreen = function(r, t) {
								console("inside remove + " + r + ":" + t);
							};

						});