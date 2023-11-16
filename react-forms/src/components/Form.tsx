import React, { useState, Fragment } from "react";

export default function Form() {
    const [fullName, setFullName] = useState("");
    const [comments, setComments] = useState("");
    const [semester, setSemester] = useState("");
    const [employee, setEmployee] = useState("");
    const [programs, setPrograms] = useState<string[]>([]);

    let radios = { "Full Time": "fulltime", Adjunct: "adjunct", Staff: "staff" };
    let checkboxs = ["Computer Science", "Management Science", "Social Science", "Media Science"];

    let radioBtns = Object.entries(radios).map(([key, value], i) => (
        <Fragment key={i}>
            <label>
                <input
                    type="radio"
                    name="employee"
                    value={value}
                    checked={employee === value}
                    onChange={(e) => setEmployee(e.target.value)}
                />
                {key}
            </label>
            <br />
        </Fragment>
    ));

    let chkBtns = checkboxs.map((prg, i) => (
        <Fragment key={i}>
            <label>
                <input
                    type="checkbox"
                    name="programs"
                    value={prg}
                    checked={programs.includes(prg)}
                    onChange={(e) => {
                        setPrograms(
                            programs.indexOf(e.target.value) === -1
                                ? [...programs, e.target.value]
                                : programs.filter((p) => p !== e.target.value)
                        );
                    }}
                />
                {prg}
            </label>
            <br />
        </Fragment>
    ));

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Full Name : </td>
                        <td>
                            <input type="text" name="" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comments : </td>
                        <td>
                            <textarea
                                name="comments"
                                cols={30}
                                rows={2}
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Semester : </td>
                        <td>
                            <select name="semester" value={semester} onChange={(e) => setSemester(e.target.value)}>
                                <option hidden value=""></option>
                                <option value="Fall">Fall</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Employee : </td>
                        <td>{radioBtns}</td>
                    </tr>
                    <tr>
                        <td>Programs : </td>
                        <td>{chkBtns}</td>
                    </tr>
                </tbody>
            </table>
            <pre style={{ textAlign: "left" }}>
                {JSON.stringify({ fullName, comments, semester, employee, programs }, null, 4)}
            </pre>
        </>
    );
}
