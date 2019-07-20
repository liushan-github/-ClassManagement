const ageData = [];
let totalAge = 0;
let totalPeople = 0;
let avgAge;
const fakeY = [6, 5, 10, 12, 3, 2, 4];
const jobData = [
  {
    item: "前端",
    count: 15
  },
  {
    item: "java",
    count: 7
  },
  {
    item: "测试",
    count: 6
  },
  {
    item: "销售",
    count: 5
  },
  {
    item: "其他",
    count: 9
  }
];
for (let i = 0; i < fakeY.length; i += 1) {
  totalAge += ((i + 18) * fakeY[i]);
  totalPeople += fakeY[i]
  ageData.push({
    x: (i + 18).toString() + '岁',
    y: fakeY[i],
  });
}
avgAge = Math.round(totalAge / totalPeople);
const totalData = {
  totalStudents: 42,
  girl: 4,
  boy: 38,
  avgAge: avgAge,
  ageData: ageData,
  jobData: jobData,
  beginDate: '2019-7-20',
  statisticsDate: '2019-7-20'
};
export default {
  'GET  /api/total': totalData,
}
