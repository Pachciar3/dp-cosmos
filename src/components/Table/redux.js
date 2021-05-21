export const FETCH_OBJECTS_REQUESTED = "flying_objects/FETCH_OBJECTS_REQUESTED";
export const FETCH_OBJECTS_FAILED = "flying_objects/FETCH_OBJECTS_FAILED";
export const FETCH_OBJECTS_SUCCESS = "flying_objects/FETCH_OBJECTS_SUCCESS";

const INITIAL_STATE = {
  objects: {
    capsules: [],
    crew: [],
    rockets: [],
    starlink: []
  },
  isLoading: false,
  isLoaded: false,
  isError: false
};

export const fetchRequested = (type) => ({ type: FETCH_OBJECTS_REQUESTED, payload: type });
export const fetchFailed = () => ({ type: FETCH_OBJECTS_FAILED });
export const fetchSuccess = (data) => ({ type: FETCH_OBJECTS_SUCCESS, payload: data });

const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_OBJECTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false
      };
    case FETCH_OBJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoaded: true,
        objects: {
          ...state.objects,
          [action.payload.name]: action.payload.object
        }
      };
    case FETCH_OBJECTS_FAILED:
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default redux;
