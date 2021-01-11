import { takeLatest, all, call, put } from "redux-saga/effects";
import { convertSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import { shopActionTypes } from "./shop.types";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const collectionSnapshot = yield collectionRef.get();
    const result = yield call(convertSnapshotToMap, collectionSnapshot);
    yield put(fetchCollectionsSuccess(result));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
