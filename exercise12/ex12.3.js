// Here is your school object
// Take the school object and create the following methods to
// that object:
// 1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.
// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.
// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.
// 4. Create a new method for anything you want.
const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 3,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, id) {
    return this[type].filter((element) => {
      return element.id === id;
    });
  },
  assignStudent: function (id, subject) {
      this.teachers.forEach((t) => {
      if (t.subjects.includes(subject) && t.capacityLeft > 0){
        t.students.push(this.findPerson('students',id)[0].name);
        t.capacityLeft--;
      } else if(t.capacityLeft === 0){
        console.log(`Sorry ${this.findPerson('students', id)[0].name}, no available teachers left.`);
      }
    });
  },
};

console.log(school.findPerson("teachers", 2 ));
school.assignStudent(10, 'ethics');
school.assignStudent(11, 'ethics');
school.assignStudent(12, 'ethics');
console.log(school.findPerson("teachers", 2));
school.assignStudent(13, 'ethics');
