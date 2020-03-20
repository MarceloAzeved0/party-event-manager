export const Types = {
  LOGIN: 'user/LOGIN',
  LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'user/LOGIN_FAILURE',
  LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  LOGOUT: 'user/LOGOUT',
  CREATE_USER: 'user/CREATE_USER',
  NEXT_USER: 'user/NEXT_USER',
  CREATE_EMBEDDED: 'user/EMBEDDED',
};

export const Creators = {
  login: data => {
    return {
      type: Types.LOGIN,
      payload: {
        email: data.email,
        password: data.password,
      },
    };
  },
  createUser: data => {
    return {
      type: Types.CREATE_USER,
      payload: data,
    };
  },

  createEmbedded: data => {
    return {
      type: Types.CREATE_EMBEDDED,
      payload: data,
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

  nextUser: payload => {
    return {
      type: Types.NEXT_USER,
      payload,
    };
  },
};

const initialState = {
  user: {},
  signed: false,
  data: {},
  error: null,
  loading: false,
  embedded: false,
  link: '',
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
        data: action.payload,
        signed: true,
        loading: false,
        error: null,
      };
    case Types.LOGOUT:
      return {
        state: initialState,
      };
    case Types.NEXT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
          role: action.payload.role,
          company: action.payload.company,
        },
      };
    case Types.CREATE_EMBEDDED:
      return {
        ...state,
        link: action.payload.link,
        embedded: action.payload.success,
        signed: true,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
