import React, { useCallback, useEffect } from 'react';
import './css/index.css';
import { useState } from 'react';
import firebaseApp from '@config/firebaseApp';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {_UPDATE_HEADER_STATE_} from '@dispatchers/layouts';

/* @의미 : 경로를 이름으로만 찾을 수 있게 해주는 것 */

const Fauth = firebaseApp.auth();

function Login() {
  const dispatch=useDispatch();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const history=useHistory();

  const doLogin = (e) => {
    e.preventDefault();
    Fauth.signInWithEmailAndPassword(email, password)
      .then((credential) => {
        // var user = userCredential.user;
        const { user } = credential;
        console.log(user)
        history.push('/feed');
          dispatch({
            type:_UPDATE_HEADER_STATE_,
            payload:true,
          })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goJoin = useCallback(
  ()=>{
    history.push('/join')
  },
  [history],
  )
  /* 헤더부분 */
  useEffect(()=>{
    dispatch({
      type:_UPDATE_HEADER_STATE_,
      payload:false,
    })
  },[dispatch])
  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="logo">instagram</h1>
        <form className="login-contents" onSubmit={doLogin}>
          <div className="emil-inp common-inp">
            <div className="title txt-bold">이메일</div>
            <div className="inp">
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          {/* 이메일입력 */}
          <div className="password-inp common-inp">
            <div className="title txt-bold">패스워드</div>
            <div className="inp">
              <input
                type="password"
                placeholder="이메일을 입력하세요"
                onBlur={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {/* 패스워드 */}
          <button className="login-btn">로그인</button>
        </form>
        {/*상단폼 */}
        <div className="go-join">
          <div className="title txt-bold">회원가입</div>
          <div className="asset">
            <img src="/assets/welcome/arrow.svg" alt="회원가입하기" onClick={goJoin}/>
          </div>
        </div>
        {/* 하단 조인 */}
      </div>
      {/* wrapper */}
    </div>
  );
}

export default Login;
