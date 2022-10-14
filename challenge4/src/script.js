function groupByOwnersService(strArr) {
  let service = {};
  strArr.map((item) => {
    Object.keys(item).map((i) => {
      if (!service[item[i]]) {
        service[item[i]] = [i];
      } else {
        service[item[i]].push(i);
      }
    });
  });
  return service;
}
const array = [
  { 'insurance.txt': 'Company A' },
  { 'letter.docx': 'Company A' },
  { 'Contract.docx': 'Company B' },
];

console.log(groupByOwnersService(array));
