// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true
// 문제가 잘 안풀린다면😢
// 힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → 클릭

// 공지 - 2022년 7월 22일 테스트케이스가 추가되었습니다.
// 공지 - 2022년 7월 22일 제한 사항이 추가되었습니다.
//은석
function solution(s) {
  return s.length === 4 || s.length === 6
    ? /[a-zA-Z]/.test(s)
      ? false
      : true
    : false;
}

//민희
/**
 * 
 isNaN() 함수는 어떤 값이 NaN인지 판별
 */
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) return false;
  }

  return true;
}

//수진
function solution(s) {
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// khusan
/**
 * every가 and 조건이라면 some은 or 조건입니다.
 * every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
 * boolean을 반환
 */
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((e) => isNaN(+e) === false);
  } else {
    return false;
  }
}
