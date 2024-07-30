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
  return (+num.toString().replaceAll(",", ""))
    .toFixed(dec)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const oneSpace = (str) => str.replace(/\s\s+/g, " ");

const arrayColumn = (array, column) => array.map((item) => item[column]);
