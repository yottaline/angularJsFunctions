"use strict";

class NgFunctions {
  static jsonParse = (str) => JSON.parse(str);
  static slice = (str, start, end) => str.slice(start, end);
  static toFixed = (num, decimal) => num.toFixed(decimal);
  static openUrl = (url, target = "_blank") => window.open(url, target);
  static objectLen = (obj) => Object.keys(obj).length;
  static findInArrOfObjs = (arr, key, val) => arr.find((o) => o[key] == val);
  static inArray = (needle, haystack) => haystack.includes(needle);
  static indexOf = (needle, haystack) => haystack.indexOf(needle);
  static sepNumber = (num) => sepNumber((+num).toFixed(2));
  static nl2br = (str) => nl2br(str);
  static oneSpace = (str) => str.replace(/\s\s+/g, " ");
}

function nl2br(str, is_xhtml) {
  if (typeof str === "undefined" || str === null) return "";

  var breakTag =
    is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";

  return (str + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + breakTag + "$2"
  );
}

function sepNumber(num) {
  return num
    .toString()
    .replaceAll(",", "")
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
