import { convertSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { shopActionTypes } from "./shop.types";

export const fetchCollectonsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionResult) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionResult,
});

export const fetchCollectionsFailure = (error) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

// Thunk way of doing side-effects
export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectonsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const result = convertSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(result));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error));
      });
  };
};
