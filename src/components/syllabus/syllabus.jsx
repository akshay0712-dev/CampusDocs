import React, { useState, useEffect } from "react";
import "./syllabus.css";
import AYearaSem from './aYearaSem.jsx'



const semesterDrop = ["1", "2", "3", "4", "5","6", "7", "8"];


const syllabus = () => {
    const [isSemesterDropBoxVisible, setSemesterDropBoxVisible] = useState(false);
    const [semester, setSemester] = useState(() => {
      const savedSemester = localStorage.getItem('semester');
      return savedSemester ? JSON.parse(savedSemester) : 1;
    });
    

    useEffect(() => {
      localStorage.setItem('semester', JSON.stringify(semester));
    }, [semester]);


    const toggleSemesterDropBox = () => {
      setSemesterDropBoxVisible(!isSemesterDropBoxVisible);
    };
    
    const toggleSemester = (s) => {
      setSemester(s);
      toggleSemesterDropBox()
  
    }
    
  return (
    <>

    <section className="w-[95vw] md:w-[80vw] flex justify-evenly mx-auto gap-6 my-6">
       
        <section className="w-[fit]">
          <section
            className="dropboxHead w-fit"
            onClick={() => {
              toggleSemesterDropBox();
            }}
          >
            <span className="text-white ">Semester {semester}</span>
          </section>

          <section
            className={`dropBox  ${
              isSemesterDropBoxVisible
                ? "opacity-100 max-h-[500px]"
                : "opacity-0 max-h-0"
            }`}
          >
            {semesterDrop.map((sem, index) => (
              <div key={index} className="dropOption text-white"
              onClick={() => {
                toggleSemester(sem);
              }}>
                Semester {sem}
              </div>
            ))}
          </section>
        </section>
      </section>


    <AYearaSem semester={semester-1} />
    </>
  )
}

export default syllabus
