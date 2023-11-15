module.exports = {
  Query: {
    students: async (parent, args, { db }, info) => {
      return await db.Student.find().sort({ regno: 1 });
    },
    marks: async (parent, args, { db }, info) => {
      return await db.Mark.find();
    },
    student: async (parent, args, { db }, info) => {
      return await db.Student.findOne({ regno: args.regno }).sort({ hid: 1 });
    },
  },
  Student: {
    marks: async (parent, args, { db }, info) => {
      return await db.Mark.find({ regno: parent.regno }).sort({ hid: 1 });
    },
  },
  Mutation: {
    updateMark: async (parent, args, { db }, info) => {
      return await db.Mark.findOneAndUpdate(
        { hid: args.hid, regno: args.regno },
        {
          $set: {
            marks: args.mark,
          },
        },
        { new: true }
      );
    },
  },
};
