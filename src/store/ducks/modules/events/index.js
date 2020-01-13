export const Types = {
  CREATE_SUCCESS: 'event/CREATE_SUCCESS',
  REQUEST_FAILURE: 'event/REQUEST_FAILURE',
  REQUEST_LOADING: 'event/REQUEST_LOADING',
  LIST: 'event/LIST',
  LIST_EVENT_SUCCESS: 'user/LIST_EVENT_SUCCESS',
  CREATE: 'event/CREATE',
};

export const Creators = {
  listEvents: id => {
    return {
      type: Types.LIST,
      payload: id,
    };
  },
  createEvent: data => {
    return {
      type: Types.CREATE,
      payload: data,
    };
  },

  listEventsSuccess: data => {
    return {
      type: Types.LIST_EVENT_SUCCESS,
      payload: data,
    };
  },

  createSuccess: data => {
    return {
      type: Types.CREATE_SUCCESS,
      payload: data,
    };
  },

  requestFailure: error => {
    return {
      type: Types.REQUEST_FAILURE,
      payload: error,
    };
  },

  requestLoading: () => {
    return {
      type: Types.REQUEST_LOADING,
    };
  },
};

const initialState = {
  events: [],
  error: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Types.CREATE_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };
    case Types.LIST_EVENT_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
