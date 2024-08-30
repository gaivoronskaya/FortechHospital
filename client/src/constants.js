export const baseURL = "http://localhost:5000";

export const tableHeaders = [
  "Имя",
  "Врач",
  "Дата",
  "Жалобы",
  ""
];

export const doctorsOptions = [
  { value: "firstDoctor", label: "Врач1" },
  { value: "secondDoctor", label: "Врач2" },
  { value: "thirdDoctor", label: "Врач3" },
];
  
export const sortedList = [
  {value: "name", label: "Имя"},
  {value: "doctor", label: "Врач"},
  {value: "date", label: "Дата"},
  {value: "none", label: "None"},
]

export const valueSortedList = [
  {value: "ascending", label: "По возрастанию"},
  {value: "descending", label: "По убыванию"},
]

// const start = 3;
// const end = 5;

// const sumNumers = (start, end) => {
//   let sum = 0;
//   let k = start;
//   while (k <= end) {
//     sum += k;
//     k ++;
//   }

//   return sum;
// }

// console.log(sumNumers(start, end));

const start = 3;
const end = 5;

const sumNumbers = (start, end) => {
  let count = end - start + 1;
  let result = ((start + end) * count) / 2;

  return result;
}
console.log(sumNumbers(start, end));