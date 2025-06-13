function getGradeByScore(studentScore) {
    const grades = ["A", "AB", "B", "BC", "C", "D", "E"];
    const rangeLimits = [80.0, 70.0, 65.0, 60.0, 50.0, 40.0, 0.0];
    let studentGrade = "E";
    let gradeLevel = 0;

    while (studentGrade === "E" && gradeLevel < grades.length - 1) {
        if (studentScore > rangeLimits[gradeLevel]) {
            studentGrade = grades[gradeLevel];
        }
        gradeLevel++;
    }

    return studentGrade;
}

// Contoh penggunaan
console.log(getGradeByScore(85)); // Output: "A"
console.log(getGradeByScore(72)); // Output: "AB"
console.log(getGradeByScore(50)); // Output: "C"
console.log(getGradeByScore(30)); // Output: "E"
