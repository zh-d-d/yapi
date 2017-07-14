import {
  LOGIN,
  LOGIN_TYPE
} from '../../constants/action-types';

const initialState = {
  isLogin: true,
  userName: null,
  uid: null,
  loginWrapActiveKey:"1"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLogin: true,
        userName: action.payload.data.userName
      };
    }
    case LOGIN_TYPE: {
      return {
        ...state,
        loginWrapActiveKey: action.index
      };
    }
    default:
      return state;
  }
};