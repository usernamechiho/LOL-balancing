import { useEffect, useState } from "react";
/** 진행률에 따라 count 속도 조절 */
const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

/** 점차 느려지는 count up 함수 */
export const useCountUp = (num: number, duration: number) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = 0;
    const counter = setInterval(() => {
      const progressRate = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round(num * progressRate));

      // 진행 완료시 interval 해제
      if (progressRate === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, []);

  return count;
};
