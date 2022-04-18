// 判断是否是对象的工具函数
function isObject(value) {
  const typeValue = typeof value;
  return value !== null && (typeValue === "object" || typeValue === "function");
}

function deepClone(originObject, map = new WeakMap()) {
  // Set
  if (originObject instanceof Set) return new Set([...originObject]);
  // Map
  if (originObject instanceof Map) return new Map([...originObject]);
  //symbol
  if (typeof originObject === "symbol") return Symbol(originObject.description);
  // 函数
  if (typeof originObject === "function") return originObject;
  // 解决循环引用
  if (map.has(originValue)) return map.get(originValue);
  // 基本值及对象(数组):
  if (!isObject(originObject)) return originObject;
  const newObject = Array.isArray(originObject) ? [] : {};
  map.set(originValue, newObject);
  for (const key in originObject) {
    newObj[key] = deepClone(originObject[key], map);
  }
  // 对symbol值进行特殊处理
  // for of 遍历不包含symbol类型
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const sKey of symbolKeys) {
    // const newSKey = Symbol(sKey.description)
    newObject[sKey] = deepClone(originValue[sKey], map);
  }

  return newObject;
}

// 功能测试
const obj = {
  name: "zhang",
  age: 18,
  friend: {
    name: "lee",
    age: 28,
  },
};
