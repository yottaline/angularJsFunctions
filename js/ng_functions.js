"use strict";

class NgFunctions {
  static jsonParse = (str) => JSON.parse(str);
  static replace = (str, s, r) => str.toString().replaceAll(s, r);
  static slice = (str, start, end) => str.slice(start, end);
  static split = (str, sep = ",") => str.split(sep);
  static toFixed = (num, decimal) => num.toFixed(decimal);
  static openUrl = (url, target = "_blank") => window.open(url, target);
  static objectLen = (obj) => Object.keys(obj).length;
  static keyExists = (key, obj) => key in obj;
  static findInArrOfObjs = (arr, key, val) => arr.find((o) => o[key] == val);
  static inArray = (needle, haystack) => haystack.includes(needle);
  static indexOf = (needle, haystack) => haystack.indexOf(needle);
  static arrayColumn = (array, column) => arrayColumn(array, column);
  static sepNumber = (num, dec = 2) => sepNumber(num, dec);
  static nl2br = (str) => nl2br(str);
  static oneSpace = (str) => oneSpace(str);
}
