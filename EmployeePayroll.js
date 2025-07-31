// 1. Enum for Attendance Status
var AttendanceStatus;
(function (AttendanceStatus) {
    AttendanceStatus["Present"] = "Present";
    AttendanceStatus["Leave"] = "Leave";
})(AttendanceStatus || (AttendanceStatus = {}));
// 3. Class implementing EmployeeInterface
var ContractEmployee = /** @class */ (function () {
    // Constructor
    function ContractEmployee(id, name, email) {
        // Attendance record as tuple array [date, status]
        this.attendanceRecord = [];
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // Add attendance record
    ContractEmployee.prototype.addAttendance = function (date, status) {
        this.attendanceRecord.push([date, status]);
    };
    // Get attendance records
    ContractEmployee.prototype.getAttendance = function () {
        return this.attendanceRecord;
    };
    // Payroll calculation (daily wage = 360 Rs)
    ContractEmployee.prototype.payrollCalculation = function () {
        var presentDays = this.attendanceRecord.filter(function (_a) {
            var status = _a[1];
            return status === AttendanceStatus.Present;
        }).length;
        return presentDays * 360;
    };
    return ContractEmployee;
}());
// Example usage
var emp1 = new ContractEmployee(1, "Devika v v", "devikavv@xminds.com");
emp1.addAttendance("2025-07-30", AttendanceStatus.Present);
emp1.addAttendance("2025-07-31", AttendanceStatus.Leave);
emp1.addAttendance("2025-08-01", AttendanceStatus.Present);
console.log("Attendance Record:", emp1.getAttendance());
console.log("Payroll:", emp1.payrollCalculation()); // 2 Present days → 720 Rs
