export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREV_MOVIE = "PREV_MOVIE";

export function addList() {
  return {
    type: ADD_LIST,
  };
}

export function removeList(id) {
  return {
    type: REMOVE_LIST,
    payload: id,
  };
}

export function nextMovie() {
  return {
    type: NEXT_MOVIE,
  };
}

export function prevMovie() {
  return {
    type: PREV_MOVIE,
  };
}
