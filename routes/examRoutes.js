const express = require("express");
const router = express.Router();

let exams = [
{ id: 1, subject: "Math", date: "2025-04-10" },
{ id: 2, subject: "Science", date: "2025-04-12" }
];

// GET / (this now correctly maps to /exams)
router.get("/", (req, res) => {
res.json(exams);
});


// POST / (this now correctly maps to /exams)
router.post("/", (req, res) => {
    const newExam = {
    id: exams.length + 1,
    subject: req.body.subject,
    date: req.body.date
    };
    exams.push(newExam);
    res.status(201).json(newExam);
    });