const express = require("express");
const app = express();
const examsRoutes = require("./routes/exams");

app.use(express.json());

app.use("/exams", examsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Group <your_group> API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
