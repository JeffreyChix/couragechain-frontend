const shorten = (string: string, length: number) => {
  if (string.length > length) {
    return string.slice(0, length) + "...";
  }
  return string;
};

export { shorten };
