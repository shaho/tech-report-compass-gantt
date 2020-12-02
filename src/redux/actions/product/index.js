import axios from "axios";

export const PRODUCTS_ACTION = {
  START_FETCH: "PRODUCTS_START_FETCH",
  FAIL_FETCH: "PRODUCTS_FAIL_FETCH",
  FINISH_FETCH: "PRODUCTS_FINISH_FETCH",
};
export const startFetchProducts = () => ({
  type: PRODUCTS_ACTION.START_FETCH,
});
export const failFetchProducts = (error) => ({
  type: PRODUCTS_ACTION.FAIL_FETCH,
  payload: error,
});
export const finishFetchProducts = (data) => ({
  type: PRODUCTS_ACTION.FINISH_FETCH,
  payload: data,
});

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PRODUCTS_ACTION.START_FETCH,
      });
      const results = await axios.get(
        "https://tech-report-compass-backend.atlann.co/api/react-endpoint"
      );
      if (results.status === 200) {
        const { data } = results;
        console.log(data);
        dispatch({
          type: PRODUCTS_ACTION.FINISH_FETCH,
          payload: data,
        });
      } else {
        dispatch({
          type: PRODUCTS_ACTION.FAIL_FETCH,
          payload: "Something is wrong",
        });
      }
    } catch (error) {
      dispatch({
        type: PRODUCTS_ACTION.FAIL_FETCH,
        payload: error,
      });
    }
  };
};
