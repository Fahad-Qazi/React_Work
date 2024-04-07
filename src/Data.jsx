import React, { useState } from "react";
import data from "./StudentData";

function StdData() {
  const initialDisplayCount = 10;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [studentData, setStudentData] = useState(data);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentRollNo, setNewStudentRollNo] = useState("");

  const handleDelete = (roll_no) => {
    const updatedStudentData = studentData.filter(
      (student) => student.roll_no !== roll_no
    );
    setStudentData(updatedStudentData);
  };

  const handleShowMore = () => {
    setDisplayCount(displayCount + 2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: newStudentName,
      roll_no: newStudentRollNo,
    };
    setStudentData([...studentData, newStudent]);
    setNewStudentName("");
    setNewStudentRollNo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Enter student name"
        />
        <input
          type="text"
          value={newStudentRollNo}
          onChange={(e) => setNewStudentRollNo(e.target.value)}
          placeholder="Enter roll number"
        />

        <button type="submit">Add Student</button>
      </form>

      {studentData.slice(0, displayCount).map((el, ind) => (
        <div key={ind}>
          <span>
            {ind + 1} : {el.name}
          </span>
          <button onClick={() => handleDelete(el.roll_no)}>Delete</button>
        </div>
      ))}
      {studentData.length > displayCount && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </>
  );
}

export default StdData;
