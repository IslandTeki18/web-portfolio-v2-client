import bcrypt from "bcryptjs";
const users = [
  {
    username: "landonmckell",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];
export default users;
