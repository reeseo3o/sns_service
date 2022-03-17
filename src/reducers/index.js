import {
  combineReducers
} from 'redux'
import config from './config'
import layouts from './layouts'

const rootReducer = combineReducers({ /* 각각의 리듀서를 createStore 에 넘기려고 하나의 리듀서 함수로 바꿔줌 / */
  config, //con:config 이런식으로 하기도 함
  layouts

})

export default rootReducer