//소수점 2자리
export function ROUNDTWO(float) {
  return Math.round(float * 1e2) / 1e2;
}

//단리
export function SIMPLE(P, r, t) {
  return P + (r / 100) * P * t;
}

//복리
export function COMPOUND(P, r, t) {
  return P * (r / 100 + 1) ** t;
}

//적립식 복리
export function CONTRIBUTE(PMT, r, t) {
  if (r !== 0) {
    return (PMT * ((1 + r / 100) ** t - 1)) / (r / 100);
  } else {
    //이자율이 0인 경우, 계산식 분모에 0이 들어가면서 값이 무한대로 수렴 -> 예외처리
    return PMT * t;
  }
}

//현재가치
export function PV(FV, t) {
  const inflationRate = 2;
  return FV / (1 + inflationRate / 100) ** t;
}

//미래가치
export function FV(PV, t) {
  const inflationRate = 2;
  return PV * (1 + inflationRate / 100) ** t;
}

//거치식 GBI
export function LUMPSUM(T, r, t) {
  return T / (r / 100 + 1) ** t;
}

//적립식 GBI
export function MUTUAL(T, r, t) {
  return (T * (r / 100)) / ((1 + r / 100) ** t - 1);
}