class Student {
  id: number;
  name: string;
  marks: [string, number][] = [];
  grade: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Method to add subject and score
  addSubjectScore(subject: string, score: number): void {
    this.marks.push([subject, score]);
  }

  // Private method to calculate average
  private calculateAverage(): number {
    if (this.marks.length === 0) return 0;
    const total = this.marks.reduce((sum, [, score]) => sum + score, 0);
    return total / this.marks.length;
  }

  // Method to return final result
  getFinalResult(): [string, string] {
    const avg = this.calculateAverage();
    this.grade = avg >= 40 ? "Pass" : "Fail";
    return [this.name, this.grade];
  }
}

// Example usage
const student1 = new Student(1, "Alice");
student1.addSubjectScore("Math", 50);
student1.addSubjectScore("Science", 30);

console.log(student1.getFinalResult()); // ["Alice", "Pass"]
