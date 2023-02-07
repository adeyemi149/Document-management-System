export const dateConvert = (value: Date) => {
  var date = new Date(value);
  return date.toDateString();
};

export const timeConvert = (value: Date) => {
  var time = new Date(value);
  return time.toLocaleTimeString();
};

export const openWithPDFViewer = (url: string) => {
  //
};
