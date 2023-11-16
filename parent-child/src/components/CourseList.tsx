import React, { useState } from 'react'
import CourseForm from './CourseForm'

type course = {
    courseid: number,
    code: string,
    title: string,
    crhr: number,
    semester: number,
    reg?: boolean
}




export default function CourseList() {
    const [offCrs, setOffCrs] = useState<course[]>([])
    const [msg, setMsg] = useState("")
    const [show, setShow] = useState("All")

    const getCourse = (course: course) => {
        console.log(course)
        Object.keys(course).length === 1
            ? setMsg("Course not found")
            : offCrs.some(o => o.code === course.code)
                ? setMsg("Course already Offered")
                : setOffCrs([...offCrs, course])
    }

    const handleClick = (code: string) => {
        setOffCrs(offCrs.map(c => c.code === code ? { ...c, reg: true } : c))
    }

    let courses = show === "Reg"
        ? offCrs.filter(c => c.reg)
        : show === "Off"
            ? offCrs.filter(c => !c.reg)
            : offCrs


    return (
        <>
            <div>
                <div style={{ color: 'red' }}>{msg}</div>
                <CourseForm getCourse={getCourse} />
                {offCrs.length !== 0 && courses.map(o =>
                    <div
                        key={o.code}
                        style={{ color: o.reg ? 'blue' : '#d3d3d3', cursor: 'pointer' }}
                        onClick={() => handleClick(o.code)}
                    >{o.title}</div>
                )}
            </div>
            <div>
                <button type="button" onClick={() => setShow("All")}>All</button>
                <button type="button" onClick={() => setShow("Reg")}>Reg</button>
                <button type="button" onClick={() => setShow("Off")}>Off</button>
            </div>
        </>
    )
}
