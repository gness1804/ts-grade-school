export class GradeSchool {
  rosterObj: { [grade: number]: string[] } = {};
  roster(): { [grade: number]: string[] } {
    return this.rosterObj;
  }

  add(name: string, grade: number): void {
    const newRosterObj = {
      ...this.rosterObj,
      [grade]: [...this.rosterObj[grade] || [], name],
    }
    this.rosterObj = newRosterObj;
  }

  grade(grade: number): string[] {
    throw new Error('Remove this statement and implement this function')
  }
}