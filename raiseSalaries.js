module.exports = raiseSalaries;
function raiseSalaries(people, percentage) {
  if (people.length == 0) return [];
  if (people.length > 0) {
    return people.map((person) => {
      person.salary = person.salary * (1 + percentage / 100);

      return person;
    });
  }
}
