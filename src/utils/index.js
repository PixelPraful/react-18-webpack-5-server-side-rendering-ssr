const isBrowser = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

export { isBrowser };