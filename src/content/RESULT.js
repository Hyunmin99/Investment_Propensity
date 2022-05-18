const RESULT = {
  //투자 기간
  PERIOD: [
    {
      Index: 5,
      Quest: "편안한 노후를 맞이하라!",
      Value: 5,
    },
    {
      Index: 4,
      Quest: "자식들에게 좋은 교육의 기회를 제공하자!",
      Value: 4,
    },
    {
      Index: 3,
      Quest: "결혼 자금을 마련해 결혼에 골인하라!",
      Value: 3,
    },
    {
      Index: 2,
      Quest: "집과 차를 위한 자금을 마련하라!",
      Value: 3,
    },
    {
      Index: 1,
      Quest: "여유자금을 마련하라!",
      Value: 2,
    },
  ],
  //투자 목적
  PURPOSE: [
    {
      Index: 1,
      Grade: 1,
      Name: "High Risk",
      Value: 5,
    },
    {
      Index: 2,
      Grade: 2,
      Name: "Low Risk",
      Value: 4,
    },
    {
      Index: 3,
      Grade: 3,
      Name: "Market Neutral",
      Value: 3,
    },
    {
      Index: 4,
      Grade: 4,
      Name: "Risk Hedging",
      Value: 2,
    },
  ],
  //위험 감내도
  TOLERANCE: [
    {
      Index: 1,
      Grade: 1,
      Name: "Maximal",
      Img: "assets/shield/shield-lv1.svg",
      Shield: "장난감 방패",
      Level: "Lv.1",
      Content: "",
      Value: 6,
    },
    {
      Index: 2,
      Grade: 2,
      Name: "Parial",
      Img: "assets/shield/shield-lv2.svg",
      Shield: "노멀 방패",
      Level: "Lv.2",
      Content: "",
      Value: 4,
    },
    {
      Index: 3,
      Grade: 3,
      Name: "Minimum",
      Img: "assets/shield/shield-lv3.svg",
      Shield: "엘리트 방패",
      Level: "Lv.3",
      Content: "",
      Value: 2,
    },
    {
      Index: 4,
      Grade: 4,
      Name: "No",
      Img: "assets/shield/shield-lv4.svg",
      Shield: "전설의 방패",
      Level: "Lv.4",
      Content: "",
      Value: -10,
    },
  ],
  // 금융 이해도
  LITERACY: [
    {
      Index: 1,
      Grade: 1,
      Name: "Advanced",
      Img: "assets/weapon/weapon-lv4.svg",
      Weapon: "전설의 칼",
      Level: "Lv.4",
      Content: "",
      Value: 5,
    },
    {
      Index: 2,
      Grade: 1,
      Name: "High",
      Img: "assets/weapon/weapon-lv3.svg",
      Weapon: "고급자의 칼",
      Level: "Lv.3",
      Content: "",
      Value: 5,
    },
    {
      Index: 3,
      Grade: 2,
      Name: "Low",
      Img: "assets/weapon/weapon-lv2.svg",
      Weapon: "초급자의 칼",
      Level: "Lv.2",
      Content: "",
      Value: 2,
    },
    {
      Index: 4,
      Grade: 2,
      Name: "Rare",
      Img: "assets/weapon/weapon-lv1.svg",
      Weapon: "장난감 칼",
      Level: "Lv.1",
      Content: "",
      Value: 2,
    },
  ],
  // 투자 경험
  EXPERIENCE: [
    {
      Index: 1,
      Grade: 1,
      Name: "High Risk Assets",
      Value: 5,
    },
    {
      Index: 2,
      Grade: 1,
      Name: "Medium Risk Assets",
      Value: 5,
    },
    {
      Index: 3,
      Grade: 2,
      Name: "Low Risk Assets",
      Value: 2,
    },
    {
      Index: 4,
      Grade: 2,
      Name: "Savings",
      Value: 2,
    },
  ],
  // 연령대
  AGE: [
    {
      Index: 1,
      Value: 4,
    },
    {
      Index: 2,
      Value: 4,
    },
    {
      Index: 3,
      Value: 3,
    },
    {
      Index: 4,
      Value: 2,
    },
    {
      Index: 5,
      Value: 1,
    },
  ],
  // 연수입
  INCOME: [
    {
      Index: 1,
      Value: 1,
    },
    {
      Index: 2,
      Value: 2,
    },
    {
      Index: 3,
      Value: 3,
    },
    {
      Index: 4,
      Value: 4,
    },
    {
      Index: 5,
      Value: 5,
    },
  ],
  // 투자 자산 비율
  PROPERTY: [
    {
      Index: 1,
      Value: 5,
    },
    {
      Index: 2,
      Value: 4,
    },
    {
      Index: 3,
      Value: 3,
    },
    {
      Index: 4,
      Value: 2,
    },
    {
      Index: 5,
      Value: 1,
    },
  ],
};

export default RESULT;