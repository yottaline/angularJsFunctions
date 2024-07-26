"use strict";

const nl2br = function (str, is_xhtml) {
  if (typeof str === "undefined" || str === null) return "";

  var breakTag =
    is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";

  return (str + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + breakTag + "$2"
  );
};

const sepNumber = function (num, dec = 2) {
  num
    .toString()
    .replaceAll(",", "")
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (+num).toFixed(dec);
};

const oneSpace = function (str) {
  return str.replace(/\s\s+/g, " ");
};

class NgFunctions {
  static jsonParse = (str) => JSON.parse(str);
  static slice = (str, start, end) => str.slice(start, end);
  static split = (str, sep = ",") => str.split(sep);
  static toFixed = (num, decimal) => num.toFixed(decimal);
  static openUrl = (url, target = "_blank") => window.open(url, target);
  static objectLen = (obj) => Object.keys(obj).length;
  static findInArrOfObjs = (arr, key, val) => arr.find((o) => o[key] == val);
  static inArray = (needle, haystack) => haystack.includes(needle);
  static indexOf = (needle, haystack) => haystack.indexOf(needle);
  static sepNumber = (num, dec = 2) => sepNumber(num, dec);
  static nl2br = (str) => nl2br(str);
  static oneSpace = (str) => oneSpace(str);
}
