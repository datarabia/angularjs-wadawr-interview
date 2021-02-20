class HomeService {
  constructor() {
    'ngInject';

    var students = [{
      id: 0,
      'name': 'John Smith',
      'classes': [{ 'name': 'History', 'grade': 'A+' },
      { 'name': 'Math', 'grade': 'B' },
      { 'name': 'English', 'grade': 'C-' },
      { 'name': 'Biology', 'grade': 'A' }]
    }, {
      id: 1,
      'name': 'Jane Doe',
      'classes': [{ 'name': 'History', 'grade': 'A' },
      { 'name': 'Math', 'grade': 'A' },
      { 'name': 'English', 'grade': 'D-' },
      { 'name': 'Biology', 'grade': 'C' }]
    }, {
      id: 2,
      'name': 'John Doe',
      'classes': [{ 'name': 'History', 'grade': 'C' },
      { 'name': 'Math', 'grade': 'B' },
      { 'name': 'English', 'grade': 'B' },
      { 'name': 'Biology', 'grade': 'A-' }]
    }];

    var uid = students.length;
    var alertTxt = "";
    var topGPA = 0;

    this.save = function (student) {
      if (student.name != null && !angular.isUndefined(student.name)) {
        if (student.id == null) {
          student.id = uid++;
          students.push(student);
          this.alertTxt = "Saved Successfully!";
        } else {
          for (var i in student) {
            if (students[i].id == student.id) {
              students[i] = student;
            }
          }
          this.alertTxt = "Updated Successfully!";
        }
      } else {
        this.alertTxt = "Sorry, cannot be saved!";
      }
    }

    this.get = function (id) {
      for (var i in students) {
        if (students[i].id == id) {
          return students[i];
        }
      }
    }

    this.delete = function (id) {
      for (var i in student) {
        if (student[i].id == id) {
          students.splice(i, 1);
        }
      }
      this.alertTxt = "Deleted Successfully!";
    }

    this.list = function () {
      var results ={};
      for(var i in students){
          students[i].gpa = this.calculateCPA(students[i].classes);
      }
      results.students = students;
      results.topGPA=topGPA;
      return results;
    }

    this.calculateCPA = function(arr){

      var gpa = 0.0;
      for (var i in arr ) {
        var grade = 0;
        switch(arr[i].grade) {
          case 'A':
          grade = 4.0;
          break;
          case 'B':
          grade = 3.0;
          break;
          case 'C':
          grade = 2.0;
          break;
          case 'D':
          grade = 1.0;
          break;
        }
        
        if(arr[i].grade.indexOf('+') > -1){
          grade = grade + 0.25;
        } else if(arr[i].grade.indexOf('-') > -1) {
          grade = grade - 0.25;
        }
        gpa = gpa + grade;
      }
      var finalGPA = parseFloat(gpa/arr.length);
      if (finalGPA > topGPA) {
        topGPA = finalGPA;
      }
      return finalGPA
    }
  }
}

export default HomeService;