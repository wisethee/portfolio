type ClassValue =
  | string
  | number
  | boolean
  | ClassArray
  | ClassDictionary
  | undefined
  | null;
interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}
interface ClassArray extends Array<ClassValue> {}

const cls = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = cls(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      const argObject = arg as ClassDictionary;
      if (
        argObject.toString !== Object.prototype.toString &&
        !argObject.toString.toString().includes("[native code]")
      ) {
        classes.push(argObject.toString());
        continue;
      }

      for (const key in argObject) {
        if (
          Object.prototype.hasOwnProperty.call(argObject, key) &&
          argObject[key]
        ) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
};

export default cls;
