const QNA = [
    { //1번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 투자기간
        id:1, 
        page: 1,
        Question: "투자를 시작한 이유가\n궁금해요!", 
        status: false,
        Answers: [
            {
            id: 1, 
            Answer: "단기 목표: 소비, 여행 등을 위한 자금 마련", 
            Value: 1,
            State: false
            },
            {
            id:2, 
            Answer: "중기 목표: 집과 차 구입을 위해서", 
            Value: 2,
            State: false
            },
            {
            id:3,
            Answer: "중기 목표: 결혼 자금을 위해", 
            Value: 2,
            State: false
            },
            {
            id:4, 
            Answer: "중장기 목표: 자녀 교육 자금을 모으기 위해", 
            Value: 3,
            State: false
            },
            {
            id:5, 
            Answer: "장기 목표: 넉넉한 노후를 위한 투자", 
            Value: 4,
            State: false
            }
        ]
    },
    { //2번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 투자목적
        id:2, 
        page: 2,
        Question: "1억을 투자, 1년동안\n이정도는 땡겨야지!", 
        status: false,
        Answers: [
            {
                id:1,
                Answer: "200만원(수익률 2%, 100%확률)", 
                Value: 0,
                State: false
            },
            {
                id:2,
                Answer: "500만원(수익률 5%, 80%확률)", 
                Value: 10,
                State: false
            },
            {
                id:3,
                Answer: "1000만원(수익률 10%, 50%확률)", 
                Value: 20,
                State: false
            },
            {
                id:4,
                Answer: "5000만원(수익률 50%, 20%확률)", 
                Value: 30,
                State: false
            },
            {
                id:5,
                Answer: "1억(수익률 100%, 8%확률)", 
                Value: 40,
                State: false
            }
        ]
    },
    { //3번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 위험감내도
        id:3, 
        page: 3,
        Question: "투자할 때 '손실'에 대한\n나의 의견은?", 
        status: false,
        Answers: [
            {
                id: 1,
                Answer: "무슨 일이 있어도 원금은 지켜야 해요", 
                Value: 0,
                State: false
            },
            { 
                id:2,
                Answer: "손실은 최소화해야 해요", 
                Value: 10,
                State: false
            },
            {
                id:3, 
                Answer: "수익을 위한 약간의 손실 정도는 괜찮아", 
                Value: 20,
                State: false
            },
            {
                id:4,
                Answer: "High Risk, High Return!", 
                Value: 30,
                State: false
            }
        ]
    },
    { //4번 페이지: id, page, Question, status, Answers{id, Answer, Explain, Value, State} : 위험감내도
        id:4, 
        page:4,
        Question: "내 자산 10억으로 투자할\n상품을 골라주세요!", 
        status: false,
        Answers: [
            {
                id:1,
                Answer: "초저위험 상품", 
                Explain: "(최선의 경우 100만원 이익, 최악의 경우 0원 손실)",
                Value: 0,
                State: false
            },
            {
                id:2,
                Answer: "저위험 상품", 
                Explain: "(최선의 경우 300만원 이익, 최악의 경우 100만원 손실)",
                Value: 8,
                State: false
            },
            {
                id:3,
                Answer: "중위험 상품", 
                Explain: "(최선의 경우 천만원 이익, 최악의 경우 300만원 손실)",
                Value: 16,
                State: false
            },
            {
                id:4,
                Answer: "고위험 상품",
                Explain: "(최선의 경우 3천만원 이익, 최악의 경우 천만원 손실)",
                Value: 24,
                State: false
            },
            {
                id:5,
                Answer: "초고위험 상품", 
                Explain: "(최선의 경우 5천만원 이익, 최악의 경우 2천만원 손실)",
                Value: 30,
                State: false
            }
        ]
    },
    { //5번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 금융이해도
        id:5,
        page: 5,
        Question: "아는 투자 단어들을\n모두 골라주세요!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "PER", 
                Value: 1,
                State: false
            },
            {
                id:2, 
                Answer: "KPI", 
                Value: -2,
                State: false
            },
            {
                id:3, 
                Answer: "유상증자", 
                Value: 1,
                State: false
            },
            {
                id:4, 
                Answer: "ETF", 
                Value: 1,
                State: false
            },
            {
                id:5, 
                Answer: "세액공제", 
                Value: -2,
                State: false
            },
            {
                id:6, 
                Answer: "공매도", 
                Value: 1,
                State: false
            },
            {
                id:7, 
                Answer: "ROA", 
                Value: 1,
                State: false
            },
            {
                id:8, 
                Answer: "FPS", 
                Value: -2,
                State: false
            },
            {
                id:9, 
                Answer: "인덱스", 
                Value: 1,
                State: false
            },
            {
                id:10, 
                Answer: "MTS", 
                Value: 1,
                State: false
            },
            {
                id:11,
                Answer: "BTS", 
                Value: -2,
                State: false
            },
            {
                id:12,
                Answer: "증거금", 
                Value: 1,
                State: false
            },
            {
                id:13,
                Answer: "코스피", 
                Value: 1,
                State: false
            },
            {
                id:14, 
                Answer: "반모", 
                Value: -2,
                State: false
            },
            {
                id:15,
                Answer: "IPO", 
                Value: 1,
                State: false
            }
        ]
    },
    { //6번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 투자경험
        id:6,
        page: 6,
        Question: "내가 주식을 시작한지\n어언...", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "6개월 이하", 
                Value: 0,
                State: false
            },
            {
                id:2, 
                Answer: "7개월 ~ 1년", 
                Value: 10,
                State: false
            },
            {
                id:3,
                Answer: "1년 ~ 5년", 
                Value: 20,
                State: false
            },
            {
                id:4,
                Answer: "5년 ~ 10년", 
                Value: 30,
                State: false
            },
            {
                id:5,
                Answer: "10년 이상", 
                Value: 40,
                State: false
            }
        ]
    },
    { //7번 페이지: id, page, Question, status, Answers{id, Answer, Type, Value, Img, State} : 투자목적
        id:7,
        page: 7,
        Question: "선호하는 종목을\n마음껏 골라주세요!", 
        status: false,
        Answers: [
            { 
                id:1, 
                Answer: "LG화학", //귀족주
                Type: "귀족주",
                Value: -2,
                Img: '',
                State: false
            },
            {
                id:2, 
                Answer: "삼성전자", //대형주
                Type: "대형주",
                Value: -4,
                Img: "",
                State: false
            },
            {
                id:3, 
                Answer: "이마트", //경기방어주
                Type: "경기방어주",
                Value: -4,
                Img: "",
                State: false
            },
            {
                id:4, 
                Answer: "SK하이닉스", //성장주
                Type: "성장주",
                Value: 2,
                Img: "",
                State: false
            },
            {
                id:5, 
                Answer: "쌍방울", //동전주
                Type: "동전주",
                Value: 4,
                Img: "",
                State: false
            },
            {
                id:6, 
                Answer: "한진", //가치주
                Type: "가치주",
                Value: 2,
                Img: "",
                State: false
            },
            {
                id:7, 
                Answer: "POSCO", //경기민감주
                Type: "경기민감주",
                Value: 2,
                Img: "",
                State: false
            },
        ]
    },
    { //8번 페이지: id, page, Question, status, Answers{id, Answer, Sector, Value, Img, State} : 그냥... 선호 섹터
        id:8,
        page: 8,
        Question: "선호하는 섹터를\n마음껏 골라주세요!", 
        status: false,
        Answers: [
            { 
                id:1, 
                Answer: "엑손모빌", 
                Sector: "에너지",
                Value: 1,
                Img: '',
                State: false
            },
            { 
                id:2, 
                Answer: "듀폰", 
                Sector: "원자재",
                Value: 2,
                Img: '',
                State: false
            },
            { 
                id:3, 
                Answer: "3M", 
                Sector: "산업재",
                Value: 3,
                Img: '',
                State: false
            },
            { 
                id:4, 
                Answer: "스타벅스", 
                Sector: "경기소비재",
                Value: 4,
                Img: '',
                State: false
            },
            { 
                id:5, 
                Answer: "코스트코", 
                Sector: "필수소비재",
                Value: 5,
                Img: '',
                State: false
            },
            { 
                id:6, 
                Answer: "J&J", 
                Sector: "건강관리",
                Value: 6,
                Img: '',
                State: false
            },
            { 
                id:7, 
                Answer: "VISA", 
                Sector: "금융",
                Value: 7,
                Img: '',
                State: false
            },
            { 
                id:8, 
                Answer: "마이크로\n소프트", 
                Sector: "IT",
                Value: 8,
                Img: '',
                State: false
            },
            { 
                id:9, 
                Answer: "AT&T", 
                Sector: "통신재",
                Value: 9,
                Img: '',
                State: false
            },
            { 
                id:10, 
                Answer: "듀크에너지", 
                Sector: "유틸리티",
                Value: 10,
                Img: '',
                State: false
            }
        ]
    },
    { //9번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 위험감내도 
        id:9,
        page: 9,
        Question: "확신을 갖고 산 종목이\n-10%를 찍었다 🥲", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "울분을 토하며 손절한다", 
                Value: -2,
                State: false
            },
            {
                id:2, 
                Answer: "혹시 모르니 일부만 매도한다", 
                Value: -1,
                State: false
            },
            {
                id:3,
                Answer: "확신을 가지고 장투로 가져간다", 
                Value: 1,
                State: false
            },
            {
                id:4,
                Answer: "오히려 좋아, 추가 매수한다", 
                Value: 2,
                State: false
            }
        ]
    },
    { //10번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 위험감내도 
        id: 10,
        page: 10,
        Question: "나는 이렇게 투자하는 것을\n선호해요!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "한 종목에 몰빵!", 
                Value: 2,
                State: false
            },
            {
                id:2, 
                Answer: "5종목정도 분산해 투자", 
                Value: 1,
                State: false
            },
            {
                id:3,
                Answer: "위험을 줄이기 위해 최대한 분산해 투자", 
                Value: -1,
                State: false
            },
            {
                id:4,
                Answer: "아싸리 ETF에 투자", 
                Value: -2,
                State: false
            }
        ]
    },
    { //11번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 금융이해도
        id: 11,
        page: 11,
        Question: "내 소중한 100만원에 대해\n옳지 않는 것은?", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "1년 물가 상승률이 5%일 때, 1년 뒤에\n내 100만원으로 살 수 있는 물건은 적어져요!", 
                Value: -1,
                State: false
            },
            {
                id:2, 
                Answer: "내 100만원을 2%의 1년 만기 적금에 넣었을 때,\n1년 후 계좌에는 102만원이...!! ", 
                Value: -1,
                State: false
            },
            {
                id:3,
                Answer: "내 소중한 100만원으로 주식 투자를 하면\n원금은 보장되지 않아요!", 
                Value: -1,
                State: false
            },
            {
                id:4,
                Answer: "보통 투자로 1년에 2배 정도는 먹는다던데?", 
                Value: 1,
                State: false
            },
            {
                id:5,
                Answer: "소중한 100만원이 전재산이라면\n100만원 중 일부만 투자하는 것이 바람직해요!", 
                Value: -1,
                State: false
            }
        ]
    },
    { //12번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 금융이해도
        id: 12,
        page: 12,
        Question: "다음 중 틀린 것을 골라라!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "공매도는 없는 주식을 사고 파는 거래요!", 
                Value: -1,
                State: false
            },
            {
                id:2, 
                Answer: "KOSPI가 오르면 대부분의 종목은 올라요!", 
                Value: -1,
                State: false
            },
            {
                id:3,
                Answer: "내가 산 종목이 따상을 가면,\n기분이 무지막지 좋아요!", 
                Value: -1,
                State: false
            },
            {
                id:4,
                Answer: "AA급의 채권이 주식 투자보다 안전해요!", 
                Value: -1,
                State: false
            },
            {
                id:5,
                Answer: "인터넷에서 추천해준 주식은\n무조건 믿고 매수해요!", 
                Value: 1,
                State: false
            }
        ]
    },

    { //13번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 투자경험
        id: 13,
        page: 13,
        Question: "내가 코인을 시작한지\n어언...", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "코인 안사요", 
                Value: 0,
                State: false
            },
            {
                id:2, 
                Answer: "6개월 이하", 
                Value: 14,
                State: false
            },
            {
                id:3,
                Answer: "7개월 ~ 1년", 
                Value: 24,
                State: false
            },
            {
                id:4,
                Answer: "1년 ~ 5년", 
                Value: 34,
                State: false
            },
            {
                id:5,
                Answer: "5년 이상", 
                Value: 44,
                State: false
            }
        ]
    },
    { //14번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 응답자 개인정보 / 성별 
        id:14,
        page: 14,
        Question: "성별을 알려주세요!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "남성", 
                Value: 0,
                State: false
            },
            {
                id:2, 
                Answer: "여성", 
                Value: 1,
                State: false
            },
            {
                id:3,
                Answer: "어느쪽도 아님", 
                Value: 2,
                State: false
            }
        ]
    },
    { //15번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 응답자 개인정보 / 연령대
        id:15,
        page: 15,
        Question: "나이를 알려주세요!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "29세 이하", 
                Value: 5,
                State: false
            },
            {
                id:2, 
                Answer: "30세 ~ 50세 이하", 
                Value: 5,
                State: false
            },
            {
                id:3,
                Answer: "51세 ~ 60세 이하", 
                Value: 3,
                State: false
            },
            {
                id:4,
                Answer: "61세 ~ 64세 이하", 
                Value: 2,
                State: false
            },
            {
                id:5,
                Answer: "65세 이상", 
                Value: 1,
                State: false
            }
        ]
    },
    { //16번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 응답자 개인정보 / 연평균 소득
        id:16,
        page: 16,
        Question: "나는 연평균 이만큼 벌어요!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "1천만원 미만", 
                Value: 1,
                State: false
            },
            {
                id:2, 
                Answer: "1천만원 ~ 4천만원 미만", 
                Value: 2,
                State: false
            },
            {
                id:3,
                Answer: "4천만원 ~ 7천만원 미만", 
                Value: 3,
                State: false
            },
            {
                id:4,
                Answer: "7천만원 ~ 1억원 미만", 
                Value: 4,
                State: false
            },
            {
                id:5,
                Answer: "1억원 이상", 
                Value: 5,
                State: false
            }
        ]
    },
    { //17번 페이지: id, page, Question, status : 응답자 개인정보 / 투자 금액
        id:17,
        page: 17,
        Question: "현재의 투자 금액은?\n(투자 예정 금액)!", 
        status: false,
        Answers: [
            {
                id:1, 
                Answer: "1천만원 미만", 
                Value: 1,
                State: false
            }
        ]
    },
    { //18번 페이지: id, page, Question, status, Answers{id, Answer, Value, State} : 응답자 개인정보 / 투자자산 비율
        id:18,
        page: 18,
        Question: "열심히 일해서 모은 10억,\n몇퍼센트를 투자할건가요?", 
        status: false,
        Answers: [
            {
                id:1,
                Answer: "10% 미만", 
                Value: 5,
                State: false
            },
            {
                id:2,
                Answer: "10% ~ 20%", 
                Value: 4,
                State: false
            },
            {
                id:3,
                Answer: "20% ~ 30%", 
                Value: 3,
                State: false
            },
            {
                id:4, 
                Answer: "30% ~ 40%", 
                Value: 2,
                State: false
            },
            {
                id:5, 
                Answer: "40% 이상", 
                Value: 1,
                State: false
            },
        ]
    },
];

export default QNA;