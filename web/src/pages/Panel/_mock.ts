function sortOne(a: { value: number }, b: { value: number }) {
  return b.value - a.value;
}

function sortDate(a: { total: number }, b: { total: number }) {
  return b.total - a.total;
}
const ageData = [];
let totalAge = 0;
let totalPeople = 0;
let avgAge;
const fakeY = [6, 5, 10, 12, 3, 2, 4];
const jobData = [
  {
    item: '前端',
    count: 15,
  },
  {
    item: 'java',
    count: 7,
  },
  {
    item: '测试',
    count: 6,
  },
  {
    item: '销售',
    count: 5,
  },
  {
    item: '其他',
    count: 9,
  },
];
for (let i = 0; i < fakeY.length; i += 1) {
  totalAge += ((i + 18) * fakeY[i]);
  totalPeople += fakeY[i]
  ageData.push({
    x: `${(i + 18).toString()}岁`,
    y: fakeY[i],
  });
}
avgAge = Math.round(totalAge / totalPeople);
const getJobDate = [
  {
    name: '学校所在省',
    '1月': 2,
    '2月': 4,
    '3月': 1,
    '4月': 1,
    '5月': 2,
    '6月': 1,
  },
  {
    name: '其他省',
    '1月': 3,
    '2月': 5,
    '3月': 3,
    '4月': 10,
    '5月': 7,
    '6月': 3,
  },
];

const rankData = [5, 9, 4, 11, 9, 4];
const rankingListData: { title: string; total: number }[] = [];
for (let i = 0; i < 6; i += 1) {
  rankingListData.push({
    title: `${i + 1}月`,
    total: rankData[i],
  });
}
rankingListData.sort(sortDate);
const cityData = [
  {
    city: '厦门',
    value: 3,
  },
  {
    city: '深圳',
    value: 10,
  },
  {
    city: '上海',
    value: 6,
  },
  {
    city: '南昌',
    value: 8,
  },
  {
    city: '广州',
    value: 2,
  },
  {
    city: '北京',
    value: 3,
  },
  {
    city: '其他',
    value: 10,
  },
];
const sortCity = [
  {
    city: '厦门',
    value: 3,
  },
  {
    city: '深圳',
    value: 10,
  },
  {
    city: '上海',
    value: 6,
  },
  {
    city: '南昌',
    value: 8,
  },
  {
    city: '广州',
    value: 2,
  },
  {
    city: '北京',
    value: 3,
  },
  {
    city: '其他',
    value: 10,
  },
];
sortCity.sort(sortOne);
const totalData = {
  totalStudents: 42,
  girl: 4,
  boy: 38,
  avgAge,
  ageData,
  jobData,
  beginDate: '2019-7-20',
  statisticsDate: '2019-7-20',
  getJobDate,
  rankingListData,
  cityData,
  sortCity,
};
export default {
  'GET  /api/total': totalData,
}
