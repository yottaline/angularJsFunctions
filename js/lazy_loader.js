class LazyLoader {
  offset = 0;
  lastId = 0;
  page = 0;
  loading = false;
  reload = true;
  settings = {
    method: "post",
    limit: 12,
    url: "",
    container: "#records-container",
    loading_elem: ".loading-data",
    lastdata_elem: ".last-data",
    nodata_elem: ".no-data",
    done: function (response) {
      console.info(response);
    },
    fail: function () {
      console.error("Ajax Loading faild");
    },
    always: function () {},
  };

  constructor(options) {
    this.settings = $.extend(true, this.settings, options);
    this.container_elem = $(this.settings.container);

    this.loading_elem = this.container_elem.find(this.settings.loading_elem);
    this.nodata_elem = this.container_elem.find(this.settings.nodata_elem);
    this.lastdata_elem = this.container_elem.find(this.settings.lastdata_elem);

    this.nodata_elem.hide().removeClass("d-none");
    this.lastdata_elem.hide().removeClass("d-none");
  }

  load(data = {}) {
    $.ajax({
      method: this.settings.method,
      url: this.settings.url,
      dataType: "json",
      data: $.extend(
        true,
        {
          page: this.page,
          limit: this.settings.limit,
          offset: this.offset,
          last_id: this.lastId,
        },
        data
      ),
    })
      .done(this.settings.done)
      .fail(this.settings.fail)
      .always(this.settings.always);
  }
}
