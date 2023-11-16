import React, { useState, KeyboardEvent } from 'react'
import data from './courses.json'

type course = {
    courseid: number,
    code: string,
    title: string,
    crhr: number,
    semester: number,
    reg?: boolean
}

type Props = {
    getCourse: (course: course) => void
}


export default function CourseForm({ getCourse }: Props) {
    const [courses, setCourses] = useState<course[]>(data)
    const [code, setCode] = useState("")

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            let course = courses.find(c => c.code === code.toUpperCase())
            getCourse({ ...course, reg: false } as course)
        }
    }



    return (
        <div>
            <input type="text"
                name="code"
                value={code}
                onKeyDown={handleKeyDown}
                onChange={e => setCode(e.target.value)}
            />
        </div>
    )
}


// {courses.map(c => <div key={c.code}>{c.title}</div>)}