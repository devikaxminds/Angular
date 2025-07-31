var Student = /** @class */ (function () {
    function Student(id, name) {
        this.marks = [];
        this.grade = "";
        this.id = id;
        this.name = name;
    }
    // Method to add subject and score
    Student.prototype.addSubjectScore = function (subject, score) {
        this.marks.push([subject, score]);
    };
    // Private method to calculate average
    Student.prototype.calculateAverage = function () {
        if (this.marks.length === 0)
            return 0;
        var total = this.marks.reduce(function (sum, _a) {
            var score = _a[1];
            return sum + score;
        }, 0);
        return total / this.marks.length;
    };
    // Method to return final result
    Student.prototype.getFinalResult = function () {
        var avg = this.calculateAverage();
        this.grade = avg >= 40 ? "Pass" : "Fail";
        return [this.name, this.grade];
    };
    return Student;
}());
// Example usage
var student1 = new Student(1, "Alice");
student1.addSubjectScore("Math", 50);
student1.addSubjectScore("Science", 30);
console.log(student1.getFinalResult()); // ["Alice", "Pass"]
