import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hello from "./Components/Hello";
import Time from "./Components/Time";
import ResumeRouter from "./Components/ResumeRouter";
import Home from "./Components/Home";
// function App() {
//   return (
//     <BrowserRouter>
//       <Link to="" style={{ margin: "0 5px" }}>
//         홈
//       </Link>
//       <Link to="/time" style={{ margin: "0 5px" }}>
//         현재시간
//       </Link>
//       <Link to="/hello" style={{ margin: "0 5px" }}>
//         안녕
//       </Link>
//       <Link to="/resume" style={{ margin: "0 5px" }}>
//         소개
//       </Link>

//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/hello" render={() => <Hello name="개리" />} />
//         <Route path="/time" component={Time} />
//         <Route path="/resume" children={ResumeRouter} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

function Counter() {
    const [count, setCount] = useState(0);
    const [checkRender, setCheckRender] = useState(false);
    const countUp = () => {
        setCount(count + 1);
    };
    useEffect(() => {
        if (checkRender) {
            if (count % 2) {
                alert("홀수입니다");
            } else {
                alert("짝수입니다");
            }
        }
        setCheckRender(true);
    }, [count]);
    return (
        <>
            <div>{count}</div>
            <button onClick={countUp}>up!</button>
        </>
    );
}
function App() {
    return (
        <div>
            <Counter />
            <Time />
        </div>
    );
}
export default App;
