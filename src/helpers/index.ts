export const isValidEmail = (mail: string): boolean =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail,
  );

export const isValidName = (mail: string): boolean => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(mail);

export const getItemFromLocalStroage = (key: string): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  } else return null;
};

export const setItemToLocalStroage = (key: string, payload: any) => localStorage.setItem(key, JSON.stringify(payload));
