export const classNames = (...classes: Array<string | boolean | undefined>) => {
  return classes.filter(Boolean).join(' ');
};
