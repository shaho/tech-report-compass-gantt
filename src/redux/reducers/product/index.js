import { PRODUCTS_ACTION } from "../../actions/product";
const initialState = {
  data: null,
  isFetching: false,
  error: null,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_ACTION.START_FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case PRODUCTS_ACTION.FINISH_FETCH:
      return {
        isFetching: false,
        data: action.payload,
        error: null,
      };
    case PRODUCTS_ACTION.FAIL_FETCH:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
