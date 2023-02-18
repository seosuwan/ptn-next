import { useEffect, useState } from "react";
// const staticPage = (time: string) => {
// const staticPage = (props: { time: string }) => {
const StaticPage = (props: { time: string }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => setCurrentTime(new Date().toString()), []);

  return (
    <>
      <div>getStaticProps입니다. 이게 바뀌면 큰일 나겠죠?{props.time}</div>
      <div>이건 그냥 날짜에요... {currentTime} </div>
    </>
  );
};

export const getStaticProps = async () => {
  //   const curr = new Date();
  //   console.log(`1 : ${curr}`);
  //   const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  //   console.log(`2 : ${utc}`);
  //   const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  //   console.log(`3 : ${KR_TIME_DIFF}`);
  //   const kr_curr = new Date(utc + KR_TIME_DIFF);
  //   console.log(`4 : ${kr_curr}`);
  //   const time = JSON.stringify(kr_curr);
  //   console.log(`5 : ${time}`);
  //   return { props: { time } };
  return { props: { time: new Date().toString() } };
};

export default StaticPage;
