const initialState = {
  identification: {
    version: '0.0.1'
  },
  service:{/* 닉네임이 들어갈 자리 만들어두기 */
    nicknames:[]
  }
}
const config = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case '':
      return
    default:
      return state
  }
}
export default config