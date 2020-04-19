export default class GradeSchool {
  studentRoster: () => Map<string, string[]>;

  constructor() {
    this.studentRoster = () => new Map();
  }

  addStudent(name: string, grade: number): void {
    const gradeStr = grade.toString();
    const map = this.studentRoster();
    const students = map.get(gradeStr) || [];
    map.set(gradeStr, [...students, name].sort());
    this.studentRoster = () => map;
  }

  studentsInGrade(grade: number): string[] {
    const gradeStr = grade.toString();
    const map = this.studentRoster();
    const students = map.get(gradeStr) || [];
    return students.sort();
  }
}
