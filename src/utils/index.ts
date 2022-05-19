export const isJson = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const parseMessage = (message: string) => {
  return isJson(message)
    ? JSON.parse(message)
    : { text_message: { text: message } };
};
