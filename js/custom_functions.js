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

var chkboxes,
  lastChecked = null;
const multiCheckEvent = function (selector, callback) {
  chkboxes = $(selector);
  lastChecked = null;

  chkboxes.off().on("click", function (e) {
    if (!lastChecked) {
      lastChecked = this;
      return;
    }

    if (e.shiftKey) {
      var start = chkboxes.index(this);
      var end = chkboxes.index(lastChecked);

      chkboxes
        .slice(Math.min(start, end), Math.max(start, end) + 1)
        .prop("checked", lastChecked.checked);
    }

    lastChecked = this;
    callback();
  });
};
