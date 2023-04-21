/* Your Code Here */
const createEmployeeRecord = function (employeeRecord) {
  const [firstName, familyName, title, payPerHour] = employeeRecord;
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (employeeRecords) {
  return employeeRecords.map(createEmployeeRecord);
};

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date,
  });

  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date,
  });

  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((event) => event.date === date);
  const timeOut = this.timeOutEvents.find((event) => event.date === date);

  if (timeIn && timeOut) {
    return (timeOut.hour - timeIn.hour) / 100;
  } else {
    return 0;
  }
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;

  return hoursWorked * payRate;
}

function findEmployeeByFirstName(arr, firstName) {
  return arr.find((employee) => employee.firstName === firstName);
}

function calculatePayroll(arr) {
  const totalPayroll = arr.reduce(
    (total, employee) => total + allWagesFor.call(employee),
    0
  );

  return totalPayroll;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
