import {Student} from "../model/student.js";

const students = new Map();

export const addStudent = ({id, name, password}) => {
    if(students.has(id)) {
        return false;
    }
    students.set(id, new Student(id, name, password));
    return true;
}

export const findStudent = id => students.get(id);

export const deleteStudent = id => {
    const student = students.get(id);
    if (student) {
        students.delete(id);
        return student;
    }
}

export const updateStudent = (id, data) => {
    const student = students.get(id);
    if (student) {
        Object.assign(student, data);
        return student;
    }
}

export const addScore = (id, data) => {
    const student = students.get(id);
    if (student) {
        if (!student.scores) {
            student.scores = {};
        }
        student.scores[data.examName] = data.score;
        return student;
    }
}

export const findByName = (name) => {
    const tmp = Array.from(students.values());
    const result = tmp.filter(student => student.name === name);
    return result;
}

export const countByName = (names) => {
    const tmp = Array.from(students.values());
    const namesCount = {};
    for (const name of names) {
        namesCount[name] = tmp.filter(student => student.name === name).length;
    }
    return namesCount;
}