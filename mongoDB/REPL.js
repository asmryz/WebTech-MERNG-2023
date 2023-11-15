const db = require('./models');

// db.Student.find()
// .then(students => {
//     students.map(async student => {
//         //console.log(student.regno)
//         let result = await db.Mark.updateMany({ regno: student.regno }, {
//             $set:{
//                 student: student._id
//             }
//         })
//         console.log(result);
//     })
// })


(async()=>{
    const marks = await db.Mark.find().populate('student');
    console.log(JSON.stringify(marks, null, '\t'));
    process.exit()
})();