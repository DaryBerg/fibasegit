import React, { useState, useEffect } from 'react'
import { db }  from "./config/firebase";
import './App.css';
import { getDocs, collection } from 'firebase/firestore';

const App = () => {
  const [courses, setcourses] = useState([]);
  const coursesCollectionRef = collection(db, "Courses")

  useEffect(() => {
    const getcoursesList = async () => {
      // Read the data
      // Set the course list
      try {
        const data = await getDocs(coursesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setcourses(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
  
    getcoursesList();
  }, []); 

  // State to track the selected course for displaying its description
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to toggle the visibility of the course description popup
  const toggleCoursePopup = (courseId) => {
    if (selectedCourse === courseId) {
      setSelectedCourse(null); // Close the popup if it's already open
    } else {
      setSelectedCourse(courseId);
    }
  };
  
  
    return (
      <div>
      <header className="student-info">
        <div className="student-info__item">Student: {}</div>
        <div className="student-info__item">Student ID: {}</div>
        <div className="student-info__item">Degree: Computer Science Degree</div>
        <div className="navbar">
          <div className="menu-toggle" id="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="popup-menu" id="popup-menu">
            <ul className="navbar__list">
              <li className="navbar__item"><a href="#">Home</a></li>
              <li className="navbar__item"><a href="#">Ask Questions</a></li>
              <li className="navbar__item"><a href="#">Sign Out</a></li>
            </ul>
          </div>
        </div>
      </header>
     
      <div>  
    <section class ="courses">
     <h2 class="courses__title">Courses Required for Graduation</h2>
      <ul className="course-list">
        {courses.map((Courses) => (
          <li key={Courses.id} className="course-item">
            <button onClick={() => toggleCoursePopup(Courses.id)}>
              {Courses.name}
            </button>
            {selectedCourse === Courses.id && (
              <div className="course-popup">
                
                <p>{Courses.name}</p>
                <br></br>
                <p>{Courses.description}</p>
                <br></br>
                <p>{Courses.Credits}</p>
                <br></br>
                <p>{Courses.Prerequisites}</p>
              
              </div>
            )}
          </li>
        ))}
      </ul>
      </section>
    </div>
    </div>
  );
};


export default App