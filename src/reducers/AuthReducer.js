// authReducer.js
const initialState = {
    uid: null,
    docId: null,
    username: null
  };
  
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_UID':
        return {
          ...state,
          uid: action.payload,
        };
        case 'SET_DOC_ID':
          return {
            ...state,
            docId: action.payload,
          };
          case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
      case 'CLEAR_USER_DATA':
        return {
          uid: null,
          docId: null,
          username: null,
        };
        
      default:
        return state;
    }
  };
  
  export default AuthReducer;