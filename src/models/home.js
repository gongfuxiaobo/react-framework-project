export default {
  namespace: 'home',

  state: {
    userInfo: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('111111')
      console.log(dispatch)
      console.log(history)
      return history.listen(({ pathname }) => {
        if (pathname === '/home') {
          dispatch({
            type: 'getUserInfoList'
          })
        }
      })
    }
  },

  effects: {
    *getUserInfoList({ payload = {} }, { call, put }) {
      console.log(333333)
      console.log(payload)
      console.log(call)
      console.log(put)
      try {
        // const res = yield call(projectsService.getAllProjects, payload)
        const res =
          Object.keys(payload).length > 0
            ? payload
            : {
                id: 1,
                name: 'admin',
                platform: 1
              }
        yield put({
          type: 'getUserInfo',
          payload: {
            userInfo: res
          }
        })
      } catch (e) {
        // message.warning(e.message)
      }
    }
  },

  reducers: {
    getUserInfo(state, action) {
      console.log(222222)
      console.log(state)
      console.log(action)
      return { ...state, ...action.payload }
    }
  }
}
