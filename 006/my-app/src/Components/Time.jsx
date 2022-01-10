import React, { useState } from "react";
import { useEffect } from "react";

// function Time(props) {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth() + 1;
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();
//   return (
//     <div style={{ backgroundColor: "black", color: "white" }}>
//       <h1 style={{ color: "red" }}>년 : {year}</h1>
//       <h1>
//         월/일 : {month}/{date}
//       </h1>
//       <h1>
//         시간 : {hour}시 {min}분 {sec}초
//       </h1>
//     </div>
//   );
// }

// useEffect 사용 (초 바뀜 표시)

function Time(props) {
    const [today, setToday] = useState(new Date());
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

    useEffect(() => {
        let time = setInterval(() => {
            const t = new Date();
            setToday(t);
        }, 1000);
        return () => {
            // 컴포넌트가 사라지기 전에 setInterval을 clearInterval 해줍니다
            clearInterval(time);
        };
    }, [today]);

    return (
        <div>
            <h1>
                시간 : {hour}시 {min}분 {sec}초
            </h1>
        </div>
    );
}
export default Time;
