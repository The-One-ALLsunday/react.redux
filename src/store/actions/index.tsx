import actionTypes from "@/store/actionTypes";

// eslint-disable-next-line import/prefer-default-export
export const setStoreData = (type: string, payload: any): object => {
  if (!actionTypes[type]) throw new Error("Action name is not allowed");
  return { type, payload };
};
