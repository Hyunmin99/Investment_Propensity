const QNA = [
  {
    //1번 / 투자기간
    id: 1,
    Type: "SingleSel",
    Question: "투자를 시작한 이유가\n궁금해요!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "단기 목표: 소비, 여행 등을 위한 자금 마련",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "중기 목표: 집과 차 구입을 위해서",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "중기 목표: 결혼 자금을 위해",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "중장기 목표: 자녀 교육 자금을 모으기 위해",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "장기 목표: 넉넉한 노후를 위한 투자",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //2번 / 투자목적
    id: 2,
    Type: "SingleSel",
    Question: "내 자산 10억으로 투자할\n상품을 골라주세요!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "초저위험 상품",
        Description: "은행 예적금, 국공채, MMF, CMA",
        State: false,
      },
      {
        id: 2,
        Answer: "저위험 상품",
        Description: "채권형 펀드, 금융채, 신용도가 높은 회사채",
        State: false,
      },
      {
        id: 3,
        Answer: "중위험 상품",
        Description: "혼합형 펀드, 신용도 중간 등급의 회사채",
        State: false,
      },
      {
        id: 4,
        Answer: "고위험 상품",
        Description: "주식, 신용도가 낮은 회사채, 주식형펀드",
        State: false,
      },
      {
        id: 5,
        Answer: "초고위험 상품",
        Description: "ETF, 선물옵션, 주식형펀드, 파생상품, 주식 신용거래",
        State: false,
      },
    ],
  },
  {
    //3번 / 위험감내도
    id: 3,
    Type: "SingleSel",
    Question: "투자할 때 '손실'에 대한\n나의 의견은?",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "무슨 일이 있어도 원금은 지켜야 해요",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "손실은 최소화해야 해요",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "수익을 위한 약간의 손실 정도는 괜찮아",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "High Risk, High Return!",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //4번 / 위험감내도
    id: 4,
    Type: "SingleSel",
    Question: "확신을 가지고 산 종목이\n-10%를 찍었다 🥲",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "울분을 토하며 손절한다",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "혹시 모르니 일부만 매도한다",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "확신을 가지고 장기투자로 가져간다",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "오히려 좋아, 추가 매수한다",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //5번 / 금융이해도
    id: 5,
    Type: "MultiSel",
    Question: "테스트! 아는 투자 단어를\n모두 골라라!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "PER",
        State: false,
      },
      {
        id: 2,
        Answer: "KPI",
        State: false,
      },
      {
        id: 3,
        Answer: "유상증자",
        State: false,
      },
      {
        id: 4,
        Answer: "ETF",
        State: false,
      },
      {
        id: 5,
        Answer: "세액공제",
        State: false,
      },
      {
        id: 6,
        Answer: "공매도",
        State: false,
      },
      {
        id: 7,
        Answer: "ROA",
        State: false,
      },
      {
        id: 8,
        Answer: "FPS",
        State: false,
      },
      {
        id: 9,
        Answer: "인덱스",
        State: false,
      },
      {
        id: 10,
        Answer: "MTS",
        State: false,
      },
      {
        id: 11,
        Answer: "BTS",
        State: false,
      },
      {
        id: 12,
        Answer: "증거금",
        State: false,
      },
      {
        id: 13,
        Answer: "코스피",
        State: false,
      },
      {
        id: 14,
        Answer: "반모",
        State: false,
      },
      {
        id: 15,
        Answer: "IPO",
        State: false,
      },
    ],
  },
  {
    //6번 / 투자경험
    id: 6,
    Type: "SingleSel",
    Question: "내가 주식을 시작한 지\n어언...",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "6개월 이하",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "7개월 ~ 1년 미만",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "1년 ~ 5년 미만",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "5년 ~ 10년 미만",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "10년 이상 미만",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //7번 / 투자목적
    id: 7,
    Type: "SingleSel",
    Question: "1억을 투자, 1년 동안\n이 정도는 땡겨야지!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "200만원(수익률 2%, 100%확률)",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "500만원(수익률 5%, 80%확률)",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "1000만원(수익률 10%, 50%확률)",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "5000만원(수익률 50%, 20%확률)",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "1억(수익률 100%, 8%확률)",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //8번 / 위험감내도
    id: 8,
    Type: "SingleSel",
    Question: "나는 이렇게 투자하는 것을\n선호해요!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "한 종목에 몰빵!",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "5종목정도 분산해 투자",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "위험을 줄이기 위해 최대한 분산해 투자",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "아싸리 ETF에 투자",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //9번 / 투자행태
    id: 9,
    Type: "SingleSel",
    Question: "갖고 있던 종목이\n+10%를 찍었다 🥳 ",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "행복하게 익절한다",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "혹시 모르니 일부만 매도한다",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "조금 더 오를 거 같은데? 계속 보유하고 있는다",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "무조건 더 오른다! 추가 매수한다",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //10번 / 금융이해도
    id: 10,
    Type: "SingleSel",
    Question: "내 소중한 100만원에 대해\n옳지 않는 것은?",
    status: false,
    Answers: [
      {
        id: 1,
        Answer:
          "1년 물가 상승률이 5%일 때, 1년 뒤에\n내 100만원으로 살 수 있는 물건은 적어져요!",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer:
          "내 100만원을 2%의 1년 만기 적금에 넣었을 때,\n1년 후 계좌에는 102만원이...!!",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer:
          "내 소중한 100만원으로 주식 투자를 하면\n원금은 보장되지 않아요!",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "보통 투자로 1년에 2배 정도는 먹는다던데?",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer:
          "소중한 100만원이 전 재산이라면\n100만원 중 일부만 투자하는 것이 바람직해요!",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //11번 /금융이해도
    id: 11,
    Type: "SingleSel",
    Question: "다음 중 틀린 것을 골라라!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "공매도는 없는 주식을 사고 파는 거래요!",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "KOSPI가 오르면 대부분의 종목은 올라요!",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "내가 산 종목이 따상을 가면,\n기분이 무지막지 좋아요!",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "AA급의 채권이 주식 투자보다 안전해요!",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "인터넷에서 추천해준 주식은\n무조건 믿고 매수해요!",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //12번 / 투자행태
    id: 12,
    Type: "SingleSel",
    Question: "투자에 대한 나의\n관심도는?",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "투자에 전혀 관심이 없어요!",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "아주 가끔 증권 뉴스나 자료를 찾아봐요!",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "자주 증권 상황을 체크해요!",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "주식 시장에 대해 모르는 것이 없어요!",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //13번 / 투자경험
    id: 13,
    Type: "SingleSel",
    Question: "내가 코인을 시작한지\n어언...",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "코인 안사요",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "6개월 이하",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "7개월 ~ 1년 미만",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "1년 ~ 5년 미만",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "5년 이상 미만",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //14번 / 연령대
    id: 14,
    Type: "SingleSel",
    Question: "연령대를 알려주세요!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "29세 이하",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "30세 ~ 50세 이하",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "51세 ~ 60세 이하",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "61세 ~ 64세 이하",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "65세 이상",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //15번 / 연평균 소득
    id: 15,
    Type: "SingleSel",
    Question: "나는 연평균 이만큼 벌어요!",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "1천만원 미만",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "1천만원 ~ 4천만원 미만",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "4천만원 ~ 7천만원 미만",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "7천만원 ~ 1억원 미만",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "1억원 이상",
        Description: "",
        State: false,
      },
    ],
  },
  {
    //16번 / 투자 금액
    id: 16,
    Type: "SliderSel",
    Question: "현재의 투자 금액은?\n(투자 예정 금액)",
    status: false,
    Answers : [
      {State: false}
    ]
  },
  {
    //17번 / 투자자산 비율
    id: 17,
    Type: "SingleSel",
    Question: "열심히 일해서 모은 10억,\n몇퍼센트를 투자할건가요?",
    status: false,
    Answers: [
      {
        id: 1,
        Answer: "10% 미만 미만",
        Description: "",
        State: false,
      },
      {
        id: 2,
        Answer: "10% ~ 20% 미만",
        Description: "",
        State: false,
      },
      {
        id: 3,
        Answer: "20% ~ 30% 미만",
        Description: "",
        State: false,
      },
      {
        id: 4,
        Answer: "30% ~ 40% 미만",
        Description: "",
        State: false,
      },
      {
        id: 5,
        Answer: "40% 이상",
        Description: "",
        State: false,
      },
    ],
  },
];

export default QNA;