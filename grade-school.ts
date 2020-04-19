export default class GradeSchool {
  studentRoster: () => Map<string, string[]>;

  constructor() {
    this.studentRoster = () => new Map();
  }

  addStudent(name: string, grade: number) {
    const map = this.studentRoster().set(grade.toString(), [name])
    this.studentRoster = () => map;
  }
}
