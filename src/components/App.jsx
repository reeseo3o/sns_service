import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/core.css';
import Login from './Login/Login';
import Join from './Join/Join';
import Header from './Header/Header';
import MainFeed from './MainFeed/MainFeed';
import {useSelector} from 'react-redux';



function App() {
  /* function fnc(state){
    return state.layouts.isHeaderOpen; 
  } */
  const isHeaderOpen = useSelector(state=>state.layouts.isHeaderOpen)
  /* 닉네임을 실시간으로 불러오는 함수를 만들고 실행시킴 */
  /* 닉네임을 불러 왔을때 그 닉네임 리스트를 dispatch payload로 액션을 실행 리듀서로 상태 업데이트 state값을 바꿔줘야.. */
   /* 함수가 파라미터로 들어와야함 */
  return (
    <Router>
      {isHeaderOpen && <Header />}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/join" exact component={Join} />
        <Route path="/feed" exact component={MainFeed} />
      </Switch>
    </Router>
  );
}

export default App;
