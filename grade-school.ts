type Roster = { [grade: number]: string[] };

export class GradeSchool {
  rosterObj: Roster = {};
  roster(): Roster {
    for (const grade in this.rosterObj) {
      if (Object.prototype.hasOwnProperty.call(this.rosterObj, grade)) {
        this.rosterObj[grade] = this.rosterObj[grade].sort();
      }
    }
    return JSON.parse(JSON.stringify(this.rosterObj));
  }

  add(name: string, grade: number): void {
    for (const grade in this.rosterObj) {
      // remove the student if they are already enrolled in a grade.
      if (Object.prototype.hasOwnProperty.call(this.rosterObj, grade)) {
        const students = this.rosterObj[grade];
        if (students.includes(name)) {
          this.rosterObj[grade] = this.rosterObj[grade].filter(studentName => studentName !== name);
        }
      }
    }
    const newRosterObj = {
      ...this.rosterObj,
      [grade]: [...this.rosterObj[grade] || [], name],
    }
    this.rosterObj = newRosterObj;
  }

  grade(grade: number): string[] {
    return this.roster()[grade] || [];
  }
}