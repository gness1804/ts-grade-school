export default class GradeSchool {
  studentRoster: () => Map<number, string[]>;

  constructor() {
    this.studentRoster = () => new Map();
  }

  // addStudent(name: string, grade: number) {

  // }
}
