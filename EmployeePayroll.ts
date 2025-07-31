// 1. Enum for Attendance Status
enum AttendanceStatus {
  Present = "Present",
  Leave = "Leave",
}

// 2. Interface for Employee
interface EmployeeInterface {
  id: number;
  name: string;
  email: string;

  // Methods
  addAttendance(date: string, status: AttendanceStatus): void;
  getAttendance(): [string, AttendanceStatus][];
}

// 3. Class implementing EmployeeInterface
class ContractEmployee implements EmployeeInterface {
  id: number;
  name: string;
  email: string;

  // Attendance record as tuple array [date, status]
  private attendanceRecord: [string, AttendanceStatus][] = [];

  // Constructor
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Add attendance record
  addAttendance(date: string, status: AttendanceStatus): void {
    this.attendanceRecord.push([date, status]);
  }

  // Get attendance records
  getAttendance(): [string, AttendanceStatus][] {
    return this.attendanceRecord;
  }

  // Payroll calculation (daily wage = 360 Rs)
  payrollCalculation(): number {
    const presentDays = this.attendanceRecord.filter(
      ([, status]) => status === AttendanceStatus.Present
    ).length;
    return presentDays * 360;
  }
}

// Example usage
const emp1 = new ContractEmployee(1, "Devika v v", "devikavv@xminds.com");

emp1.addAttendance("2025-07-30", AttendanceStatus.Present);
emp1.addAttendance("2025-07-31", AttendanceStatus.Leave);
emp1.addAttendance("2025-08-01", AttendanceStatus.Present);

console.log("Attendance Record:", emp1.getAttendance());
console.log("Payroll:", emp1.payrollCalculation());
