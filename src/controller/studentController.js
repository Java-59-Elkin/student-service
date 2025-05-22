import * as repo from '../repository/studentRepository.js';

export const addStudent = (req, res) => {
    const success = repo.addStudent(req.body);
    if (success) {
        res.status(204).send();
    } else {
        res.status(409).send();
    }
}

export const findStudent = (req, res) => {
    const student = repo.findStudent(+req.params.id);
    if (student) {
        const tmp = {...student}
        delete tmp.password;
        res.json(tmp);
    } else {
        res.status(404).send();
    }
}

export const updateStudent = (req, res) => {
    const student = repo.updateStudent(+req.params.id, req.body);
    if (student) {
        const tmp = {...student};
        delete tmp.scores;
        res.json(tmp);
    } else {
        res.status(404).send();
    }
}

export const deleteStudent = (req, res) => {
    const student = repo.deleteStudent(+req.params.id);
    if (student) {
        delete student.password;
        res.json(student);
    } else {
        res.status(404).send();
    }

}

export const addScore = (req, res) => {
    const student = repo.addScore(+req.params.id, req.body);
    if (student) {
        res.status(200).send("true");
    } else {
        res.status(404).send();
    }
}

export const findByName = (req, res) => {
    const students = repo.findByName(req.params.name);
    if (students.length > 0) {
        const result = students.map(student => {
            const tmp = {...student}
            delete tmp.password;
            return tmp;
        })
        res.status(200).json(result);
    } else {
        res.status(404).send();
    }
}

export const countByName = (req, res) => {
    const names = req.query.names;
    if (names) {
        const nameList = Array.isArray(names) ? names : [names];
        const result = repo.countByName(nameList);
        res.status(200).json(result);
    }
};

export const findByMinScore = (req, res) => {
    const examName = req.params.exam;
    const minScore = req.params.minScore;
    if (examName && minScore) {
        const result = repo.findByMinScore(examName, +minScore);
        res.status(200).json(result);
    }
}