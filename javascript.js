var app = angular.module('grades', ['angular.filter']);
app.controller('gradesCtrl', function($scope, getDataService, $q) {

	$scope.deptFilter = '';

	// Showing/Hiding the grades
	$scope.showGrades = false;

	$scope.showHideButtonText = function () {
		if ($scope.showGrades) {
			return "Hide Grades";
		} else {
			return "Show Grades";
		}
	}

	$scope.toggleGrades = function () {
		$scope.showGrades = !$scope.showGrades;
	};

	// Playing with $watch
	$scope.$watch('deptFilter', function() {
		console.log ('deptFilter: ', $scope.deptFilter);
		$scope.departmentName = $scope.deptFilter;
	});

	// Make a call to get the data
	var gradesPromise = getDataService.getGrades();
	gradesPromise.then(function (grades) {$scope.grades = grades; });
});

// Setting up a factory to get the data. This is basically a stub. In the future, we 
//    would grab the data directly from the web service. 
app.factory('getDataService', function($q, $timeout) {
	var grades = [
		  {
		    "courseNumber": "2371",
		    "courseTitle": "Analy Tech Solv E E Prob",
		    "creditHour": 3,
		    "crn": "91782",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199527",
		      "description": "Fall 1994 TTU"
		    }
		  },
		  {
		    "courseNumber": "4302",
		    "courseTitle": "Statistical/Thermal Phys",
		    "creditHour": 3,
		    "crn": "92251",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199557",
		      "description": "Spring 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "3323",
		    "courseTitle": "Prin Communication Systm",
		    "creditHour": 3,
		    "crn": "96669",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B-",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199827",
		      "description": "Fall 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "4307",
		    "courseTitle": "Intro Quantum Mechanics",
		    "creditHour": 3,
		    "crn": "00252",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199827",
		      "description": "Fall 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "2309",
		    "courseTitle": "Heritage Of Music",
		    "creditHour": 3,
		    "crn": "64525",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "MUHL",
		      "description": "Music History and Literature"
		    },
		    "term": {
		      "code": "199857",
		      "description": "Spring 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "5353",
		    "courseTitle": "Compiler Construction",
		    "creditHour": 3,
		    "crn": "21054",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200257",
		      "description": "Spring 2002 TTU"
		    }
		  },
		  {
		    "courseNumber": "3305",
		    "courseTitle": "Electricity & Magnetism",
		    "creditHour": 3,
		    "crn": "99352",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199627",
		      "description": "Fall 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "4305",
		    "courseTitle": "Mechanics",
		    "creditHour": 3,
		    "crn": "95398",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199657",
		      "description": "Spring 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "3312",
		    "courseTitle": "Electronics II",
		    "creditHour": 3,
		    "crn": "96668",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199827",
		      "description": "Fall 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "3332",
		    "courseTitle": "Project Laboratory II",
		    "creditHour": 3,
		    "crn": "96670",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "070",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199827",
		      "description": "Fall 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "3353",
		    "courseTitle": "Feedback Control Systms",
		    "creditHour": 3,
		    "crn": "61511",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199857",
		      "description": "Spring 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "3352",
		    "courseTitle": "Technology And Society",
		    "creditHour": 3,
		    "crn": "66964",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A-",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "SOC",
		      "description": "Sociology"
		    },
		    "term": {
		      "code": "199927",
		      "description": "Fall 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "5364",
		    "courseTitle": "Digital Signal Processing",
		    "creditHour": 3,
		    "crn": "31124",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "W",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199957",
		      "description": "Spring 1999 TTU"
		    }
		  },
		  {
		    "courseNumber": "5328",
		    "courseTitle": "Scientific Computing",
		    "creditHour": 3,
		    "crn": "24056",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B+",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200327",
		      "description": "Fall 2002 TTU"
		    }
		  },
		  {
		    "courseNumber": "1462",
		    "courseTitle": "Funds Of C S I",
		    "creditHour": 4,
		    "crn": "88432",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "199557",
		      "description": "Spring 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "1401",
		    "courseTitle": "Beg Course In German I",
		    "creditHour": 4,
		    "crn": "97062",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "D",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "GERM",
		      "description": "German"
		    },
		    "term": {
		      "code": "199627",
		      "description": "Fall 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "2311",
		    "courseTitle": "Intro Material Science",
		    "creditHour": 3,
		    "crn": "98467",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "ME",
		      "description": "Mechanical Engineering"
		    },
		    "term": {
		      "code": "199727",
		      "description": "Fall 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "3342",
		    "courseTitle": "Math Stats For Engineers/Scien",
		    "creditHour": 3,
		    "crn": "24480",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "MATH",
		      "description": "Mathematics"
		    },
		    "term": {
		      "code": "199897",
		      "description": "Summer II 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "5366",
		    "courseTitle": "Software Process Improvement",
		    "creditHour": 3,
		    "crn": "13939",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200287",
		      "description": "Summer I 2002 TTU"
		    }
		  },
		  {
		    "courseNumber": "2302",
		    "courseTitle": "Intro Circuit Analys II",
		    "creditHour": 3,
		    "crn": "88856",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199557",
		      "description": "Spring 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "3362",
		    "courseTitle": "Eng Approach Digitl Dsgn",
		    "creditHour": 3,
		    "crn": "96340",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199727",
		      "description": "Fall 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "3388",
		    "courseTitle": "Robotic Systems",
		    "creditHour": 3,
		    "crn": "96342",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199727",
		      "description": "Fall 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "1103",
		    "courseTitle": "Team Act-Beg Soccer",
		    "creditHour": 1,
		    "crn": "97974",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LAB",
		      "description": "Laboratory"
		    },
		    "sequenceNumber": "371",
		    "subject": {
		      "code": "PFW",
		      "description": "Personal Fitness and Wellness"
		    },
		    "term": {
		      "code": "199757",
		      "description": "Spring 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "5360",
		    "courseTitle": "Fiber Optic Systems",
		    "creditHour": 3,
		    "crn": "31123",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "W",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199957",
		      "description": "Spring 1999 TTU"
		    }
		  },
		  {
		    "courseNumber": "2402",
		    "courseTitle": "Principles Of Phys III",
		    "creditHour": 4,
		    "crn": "95231",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199527",
		      "description": "Fall 1994 TTU"
		    }
		  },
		  {
		    "courseNumber": "4000",
		    "courseTitle": "Independent Studies",
		    "creditHour": 3,
		    "crn": "95238",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "006",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199527",
		      "description": "Fall 1994 TTU"
		    }
		  },
		  {
		    "courseNumber": "2372",
		    "courseTitle": "Modern Digital Sys Desgn",
		    "creditHour": 3,
		    "crn": "91953",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B+",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199657",
		      "description": "Spring 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "3333",
		    "courseTitle": "Project Laboratory III",
		    "creditHour": 3,
		    "crn": "61506",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "070",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199857",
		      "description": "Spring 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "2360",
		    "courseTitle": "Linear Algebra",
		    "creditHour": 3,
		    "crn": "63856",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "MATH",
		      "description": "Mathematics"
		    },
		    "term": {
		      "code": "199857",
		      "description": "Spring 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "4306",
		    "courseTitle": "Senior Project",
		    "creditHour": 3,
		    "crn": "66320",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199927",
		      "description": "Fall 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "5331",
		    "courseTitle": "Spec Probs-Computer Sci",
		    "creditHour": 3,
		    "crn": "21338",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "003",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200157",
		      "description": "Spring 2001 TTU"
		    }
		  },
		  {
		    "courseNumber": "6000",
		    "courseTitle": "Master'S Thesis",
		    "creditHour": 3,
		    "crn": "10885",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "CR",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "THS",
		      "description": "Thesis"
		    },
		    "sequenceNumber": "013",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200397",
		      "description": "Summer II 2003 TTU"
		    }
		  },
		  {
		    "courseNumber": "6000",
		    "courseTitle": "Master'S Thesis",
		    "creditHour": 3,
		    "crn": "11942",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "CR",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "THS",
		      "description": "Thesis"
		    },
		    "sequenceNumber": "013",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200427",
		      "description": "Fall 2003 TTU"
		    }
		  },
		  {
		    "courseNumber": "1101",
		    "courseTitle": "Ind Act-Int Bowling",
		    "creditHour": 1,
		    "crn": "95022",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LAB",
		      "description": "Laboratory"
		    },
		    "sequenceNumber": "341",
		    "subject": {
		      "code": "PFW",
		      "description": "Personal Fitness and Wellness"
		    },
		    "term": {
		      "code": "199527",
		      "description": "Fall 1994 TTU"
		    }
		  },
		  {
		    "courseNumber": "4304",
		    "courseTitle": "Mechanics",
		    "creditHour": 3,
		    "crn": "99357",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199627",
		      "description": "Fall 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "3312",
		    "courseTitle": "Electronics II",
		    "creditHour": 3,
		    "crn": "96329",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "D",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199727",
		      "description": "Fall 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "2331",
		    "courseTitle": "Project Laboratory I",
		    "creditHour": 3,
		    "crn": "94590",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "071",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199757",
		      "description": "Spring 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "3303",
		    "courseTitle": "Linear System Analysis",
		    "creditHour": 3,
		    "crn": "94597",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199757",
		      "description": "Spring 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "3204",
		    "courseTitle": "Intermediate Laboratory",
		    "creditHour": 2,
		    "crn": "98123",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LAB",
		      "description": "Laboratory"
		    },
		    "sequenceNumber": "301",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199757",
		      "description": "Spring 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "4334",
		    "courseTitle": "Project Laboratory V",
		    "creditHour": 3,
		    "crn": "62802",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LAB",
		      "description": "Laboratory"
		    },
		    "sequenceNumber": "370",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199927",
		      "description": "Fall 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "2372",
		    "courseTitle": "Modern Digital Sys Desgn",
		    "creditHour": 3,
		    "crn": "95779",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199627",
		      "description": "Fall 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "3311",
		    "courseTitle": "Electronics I",
		    "creditHour": 3,
		    "crn": "91957",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199657",
		      "description": "Spring 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "5331",
		    "courseTitle": "Spec Probs-Computer Sci",
		    "creditHour": 3,
		    "crn": "11821",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200127",
		      "description": "Fall 2000 TTU"
		    }
		  },
		  {
		    "courseNumber": "5368",
		    "courseTitle": "Intelligent Systems",
		    "creditHour": 3,
		    "crn": "11942",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200157",
		      "description": "Spring 2001 TTU"
		    }
		  },
		  {
		    "courseNumber": "5352",
		    "courseTitle": "Adv Operating Sys Design",
		    "creditHour": 3,
		    "crn": "11692",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200227",
		      "description": "Fall 2001 TTU"
		    }
		  },
		  {
		    "courseNumber": "6000",
		    "courseTitle": "Master'S Thesis",
		    "creditHour": 1,
		    "crn": "12271",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "A",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "THS",
		      "description": "Thesis"
		    },
		    "sequenceNumber": "014",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200457",
		      "description": "Spring 2004 TTU"
		    }
		  },
		  {
		    "courseNumber": "2301",
		    "courseTitle": "Intro Circuit Analysis I",
		    "creditHour": 3,
		    "crn": "91768",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199527",
		      "description": "Fall 1994 TTU"
		    }
		  },
		  {
		    "courseNumber": "2301",
		    "courseTitle": "Statics",
		    "creditHour": 3,
		    "crn": "88338",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "002",
		    "subject": {
		      "code": "CE",
		      "description": "Civil Engineering"
		    },
		    "term": {
		      "code": "199557",
		      "description": "Spring 1995 TTU"
		    }
		  },
		  {
		    "courseNumber": "3306",
		    "courseTitle": "Electricity & Magnetism",
		    "creditHour": 3,
		    "crn": "95395",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "IND",
		      "description": "Independent Study"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "PHYS",
		      "description": "Physics"
		    },
		    "term": {
		      "code": "199657",
		      "description": "Spring 1996 TTU"
		    }
		  },
		  {
		    "courseNumber": "3311",
		    "courseTitle": "Electronics I",
		    "creditHour": 3,
		    "crn": "94598",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "C",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199757",
		      "description": "Spring 1997 TTU"
		    }
		  },
		  {
		    "courseNumber": "4333",
		    "courseTitle": "Senior Project Lab IV",
		    "creditHour": 3,
		    "crn": "23912",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "UG",
		      "description": "Undergraduate - TTU"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LAB",
		      "description": "Laboratory"
		    },
		    "sequenceNumber": "370",
		    "subject": {
		      "code": "EE",
		      "description": "Electrical Engineering"
		    },
		    "term": {
		      "code": "199897",
		      "description": "Summer II 1998 TTU"
		    }
		  },
		  {
		    "courseNumber": "5383",
		    "courseTitle": "Theory Of Automata",
		    "creditHour": 3,
		    "crn": "11939",
		    "gradeFinal": null,
		    "gradeInAcadHistory": "B",
		    "gradeMidterm": null,
		    "gradeRolled": "Y",
		    "level": {
		      "code": "GR",
		      "description": "Graduate"
		    },
		    "registrationStatus": null,
		    "classFormat": {
		      "code": "LEC",
		      "description": "Lecture"
		    },
		    "sequenceNumber": "001",
		    "subject": {
		      "code": "CS",
		      "description": "Computer Science"
		    },
		    "term": {
		      "code": "200357",
		      "description": "Spring 2003 TTU"
		    }
		  }
		];

	return {
		getGrades: function () {
			var defer = $q.defer();

			$timeout(function() {
				defer.resolve(grades);
			}, Math.random() * 3000);

			return defer.promise;
		}
	}
});