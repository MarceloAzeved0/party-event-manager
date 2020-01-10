export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGOUT: 'auth/LOGOUT',
};

export const Creators = {
  login: (username, password) => {
    return {
      type: Types.LOGIN,
      payload: {
        username,
        password,
      },
    };
  },

  loginSuccess: data => {
    return {
      type: Types.LOGIN_SUCCESS,
      payload: data,
    };
  },

  loginFailure: error => {
    return {
      type: Types.LOGIN_FAILURE,
      payload: error,
    };
  },

  loginRequest: () => {
    return {
      type: Types.LOGIN_REQUEST,
    };
  },

  logout: () => ({
    type: Types.LOGOUT,
  }),
};

const initialState = {
  signed: false,
  data: [],
  error: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }
    case Types.LOGIN_SUCCESS:
      return {
        data: action.payload.data,
        signed: true,
        loading: false,
        error: null,
      };
    case Types.LOGOUT:
      return {
        state: initialState,
      };
    default:
      return state;
  }
}
