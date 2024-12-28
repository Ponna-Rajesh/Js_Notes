const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
      isActive: true
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 25,
      isActive: false
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      age: 27,
      isActive: true
    }
];


export const info = {firstName: "Rajesh"} //named export

const tech = "Biotechnnology"

const college = "Girraj GOvt college"

export { userData }; //named import
export { tech as  broTech} 
export { college }

export default userData











