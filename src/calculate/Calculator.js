import {
  SIMPLE,
  COMPOUND,
  CONTRIBUTE,
  PV,
  ROUNDTWO,
} from "../calculate/Formula";

//단리 계산기 (return dataset)
export function Simple(P, t, Min, Max, Pro) {
  const MIN_VALUE = SIMPLE(P, Min, t);
  const MAX_VALUE = SIMPLE(P, Max, t);
  const PRO_VALUE = SIMPLE(P, Pro, t);
  const obj = {
    year: t + "년",
    예상수익범위: [ROUNDTWO(MIN_VALUE), ROUNDTWO(MAX_VALUE)],
    예상수익: ROUNDTWO(PRO_VALUE),
    현재가치: ROUNDTWO(PV(PRO_VALUE, t)),
  };
  return obj;
}

//복리 계산기 (return dataset)
export function Compound(P, t, Min, Max, Pro) {
  const MIN_VALUE = COMPOUND(P, Min, t);
  const MAX_VALUE = COMPOUND(P, Max, t);
  const PRO_VALUE = COMPOUND(P, Pro, t);
  const obj = {
    year: t + "년",
    예상수익범위: [ROUNDTWO(MIN_VALUE), ROUNDTWO(MAX_VALUE)],
    예상수익: ROUNDTWO(PRO_VALUE),
    현재가치: ROUNDTWO(PV(PRO_VALUE, t)),
  };
  return obj;
}

//적립식 복리 계산기 (return dataset)
export function CompoundContribution(P, PMT, t, Min, Max, Pro) {
  const MIN_VALUE = COMPOUND(P, Min, t) + CONTRIBUTE(PMT, Min, t);
  const MAX_VALUE = COMPOUND(P, Max, t) + CONTRIBUTE(PMT, Max, t);
  const PRO_VALUE = COMPOUND(P, Pro, t) + CONTRIBUTE(PMT, Pro, t);
  const obj = {
    year: t + "년",
    예상수익범위: [ROUNDTWO(MIN_VALUE), ROUNDTWO(MAX_VALUE)],
    예상수익: ROUNDTWO(PRO_VALUE),
    현재가치: ROUNDTWO(PV(PRO_VALUE, t)),
  };
  return obj;
}