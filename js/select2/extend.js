const suggOption = function (
  parent, // jQuery element
  url,
  results, // function
  placeholder,
  html = false,
  data = {},
  lang = { lang: "en", dir: "ltr" }
) {
  var param = {
    dropdownParent: parent ?? $(document.body),
    language: lang.lang,
    dir: lang.dir,
    allowClear: !!placeholder,
    placeholder: placeholder ?? "",
    debug: true,
    ajax: {
      url: url,
      delay: 350,
      method: "POST",
      dataType: "json",
      minimumInputLength: 2,
      cache: true,
      data: function (params) {
        return $.extend(true, data, {
          q: params.term,
        });
      },
      processResults: function (data) {
        return {
          results: results(data),
        };
      },
    },
  };
  if (html)
    param = $.extend(true, param, {
      escapeMarkup: function (markup) {
        return markup;
      },
      templateResult: function (data) {
        return data.html;
      },
      templateSelection: function (data) {
        return data.text;
      },
    });
  return param;
};
