/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/Dashboard.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/Dashboard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget_General_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget/General.vue */ "./resources/js/cp/components/widget/General.vue");
/* harmony import */ var _widget_Sources_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget/Sources.vue */ "./resources/js/cp/components/widget/Sources.vue");
/* harmony import */ var _widget_Pages_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget/Pages.vue */ "./resources/js/cp/components/widget/Pages.vue");
/* harmony import */ var _widget_Locations_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget/Locations.vue */ "./resources/js/cp/components/widget/Locations.vue");
/* harmony import */ var _widget_Devices_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget/Devices.vue */ "./resources/js/cp/components/widget/Devices.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    General: _widget_General_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sources: _widget_Sources_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pages: _widget_Pages_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Locations: _widget_Locations_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Devices: _widget_Devices_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      period: 'last 7 days'
    };
  },
  // watch: {
  //     period() {
  //     },
  // },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/ResizeContainer.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/ResizeContainer.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import ResizeObserver from 'resize-observer-polyfill';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    wait: {
      type: Number,
      "default": 500
    }
  },
  data: function data() {
    return {
      sizeEmitted: false
    };
  },
  render: function render() {
    return this.$scopedSlots["default"]({});
  },
  mounted: function mounted() {
    new ResizeObserver(this.onResize).observe(this.$el);
  },
  methods: {
    onResize: function onResize(entries) {
      var _this = this;
      var _entries$0$contentRec = entries[0].contentRect,
        width = _entries$0$contentRec.width,
        height = _entries$0$contentRec.height;
      var size = {
        width: width,
        height: height
      };
      if (!this.sizeEmitted) {
        this.$emit('size', size);
        this.sizeEmitted = true;
        return;
      }
      if (!this.timeout) {
        this.$emit('resizeStart', size);
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.$emit('resizeEnd', size);
        _this.timeout = null;
      }, this.wait);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Devices.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Devices.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//widget */ "./resources/js/cp/components/widget/widget.js");
/* harmony import */ var _List_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue */ "./resources/js/cp/components/widget/List.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    List: _List_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_widget__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      type: 'browsers'
    };
  },
  computed: {
    items: function items() {
      var _this = this;
      return (this.data || []).map(function (item) {
        return [item[_this.key], item.visitors];
      });
    },
    key: function key() {
      return {
        browsers: 'browser',
        operatingSystems: 'os',
        devices: 'device'
      }[this.type];
    },
    title: function title() {
      return {
        browsers: 'Browser',
        operatingSystems: 'OS',
        devices: 'Size'
      }[this.type];
    }
  },
  methods: {
    setType: function setType(type) {
      this.type = type;
      this.loadData();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/General.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/General.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget */ "./resources/js/cp/components/widget/widget.js");
/* harmony import */ var _chart_LineChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/LineChart.vue */ "./resources/js/cp/components/widget/chart/LineChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LineChart: _chart_LineChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_widget__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      type: 'general',
      selectedType: 'uniqueVisitors',
      chartData: []
    };
  },
  computed: {
    visitDuration: function visitDuration() {
      var duration = Math.floor(this.data['visitDuration']);
      var seconds = duration % 60;
      var minutes = (duration - seconds) / 60;
      return minutes ? "".concat(minutes, "m ").concat(seconds, "s") : "".concat(seconds, "s");
    }
  },
  methods: {
    loadMoreData: function loadMoreData() {
      this.loadChartData();
    },
    loadChartData: function loadChartData() {
      var _this = this;
      this.$axios.post('/cp/analytics/dashboard/stats', {
        type: "".concat(this.selectedType, "Chart"),
        period: this.period
      }).then(function (result) {
        // console.log(result.data.data)
        console.log(result.data.meta);
        _this.chartData = result.data.data.map(function (d) {
          var localDate = new Date(d.timestamp * 1e3);
          var date = new Date((parseInt(d.timestamp) + localDate.getTimezoneOffset() * 60) * 1e3);
          return [date, d.value];
        });
        // console.log(this.chartData)
      });
    },
    select: function select(type) {
      // console.log(`select(${type})`)
      this.selectedType = type;
      this.loadChartData();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/List.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/List.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    // columns: {
    //     type: Array,
    //     default: [],
    // },
    items: {
      type: Array,
      "default": []
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Locations.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Locations.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget */ "./resources/js/cp/components/widget/widget.js");
/* harmony import */ var _List_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue */ "./resources/js/cp/components/widget/List.vue");
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    List: _List_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_widget__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      type: 'locations'
    };
  },
  computed: {
    items: function items() {
      return (this.data || []).map(function (item) {
        return [item.country, item.visitors];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Pages.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Pages.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget */ "./resources/js/cp/components/widget/widget.js");
/* harmony import */ var _List_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue */ "./resources/js/cp/components/widget/List.vue");
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    List: _List_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_widget__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      type: 'pages'
    };
  },
  computed: {
    items: function items() {
      return (this.data || []).map(function (item) {
        return [item.path, item.visitors];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Sources.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Sources.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget */ "./resources/js/cp/components/widget/widget.js");
/* harmony import */ var _List_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue */ "./resources/js/cp/components/widget/List.vue");
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    List: _List_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_widget__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      type: 'sources'
    };
  },
  computed: {
    items: function items() {
      return (this.data || []).map(function (item) {
        return [item.source || 'Direct / None', item.visitors];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: Array,
      "default": []
    },
    width: {
      type: Number,
      "default": 800
    },
    height: {
      type: Number,
      "default": 360
    }
  },
  data: function data() {
    return {
      marginTop: 30,
      marginRight: 30,
      marginBottom: 40,
      marginLeft: 50
      // data: [],
    };
  },

  computed: {
    boundsWidth: function boundsWidth() {
      return this.width - this.marginLeft - this.marginRight;
    },
    boundsHeight: function boundsHeight() {
      return this.height - this.marginTop - this.marginBottom;
    },
    xScale: function xScale() {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().domain(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.data, function (d) {
        return d[0];
      })).range([0, this.boundsWidth]);
    },
    yScale: function yScale() {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().domain([0, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.data, function (d) {
        return d[1];
      })])
      // .domain(d3.extent(this.data, (d) => d[1]))
      .range([this.boundsHeight, 0]);
    },
    xAxis: function xAxis() {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.xScale).tickSize(0).ticks(7).tickPadding(24);
    },
    yAxis: function yAxis() {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.yScale).tickSize(this.boundsWidth)
      // .ticks(5)
      // .tickFormat((n) => `${d3.format('.1f')(0.001 * n)}s`)
      .tickPadding(24);
    }
  },
  created: function created() {
    // const date = new Date();
    // date.setHours(0, 0, 0);

    // const data = [];
    // for (let days = 0; days < 7; days++) {
    //     data.push([
    //         new Date(date.getTime()),
    //         0 + Math.floor(Math.random() * 20),
    //     ]);

    //     date.setDate(date.getDate() - 1);
    // }

    // this.data = data;
  },
  watch: {
    data: {
      immediate: true,
      handler: function handler() {
        this.draw();
      }
    }
  },
  methods: {
    onSize: function onSize(size) {
      this.applySize(size);
    },
    onResizeStart: function onResizeStart(size) {
      // this.resizing = true;
    },
    onResizeEnd: function onResizeEnd(size) {
      this.applySize(size);
    },
    applySize: function applySize(_ref) {
      var _this = this;
      var width = _ref.width,
        height = _ref.height;
      this.width = width;
      this.height = height;
      this.resizing = false;
      this.$nextTick(function () {
        return _this.draw();
      });
    },
    draw: function draw() {
      var axesSvg = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.$refs.axes);
      axesSvg.selectAll('*').remove();
      this.drawXAxis(axesSvg);
      this.drawYAxis(axesSvg);
      var dataSvg = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.$refs.data);
      dataSvg.selectAll('*').remove();
      this.drawLine(dataSvg);
    },
    drawXAxis: function drawXAxis(svg) {
      svg.append('g').attr('class', 'text-sm text-grey-60').attr('transform', "translate(0, ".concat(this.boundsHeight, ")")).call(this.xAxis);
    },
    drawYAxis: function drawYAxis(svg) {
      svg.append('g').attr('class', 'text-md text-grey-60').attr('transform', "translate(".concat(this.boundsWidth, ", 0)")).call(this.yAxis).call(function (g) {
        return g.selectAll('line').style('stroke', 'hsl(210, 30%, 95%)');
      }) // grey-30
      .call(function (g) {
        return g.select('.domain').remove();
      });
    },
    drawLine: function drawLine(svg) {
      var xScale = this.xScale;
      var yScale = this.yScale;
      var line = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().x(function (d) {
        return xScale(d[0]);
      }).y(function (d) {
        return yScale(d[1]);
      });
      // .curve(d3.curveCardinal);

      // Fill the area below the line:
      var area = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'd3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().x(function (d) {
        return xScale(d[0]);
      }).y0(this.boundsHeight).y1(function (d) {
        return yScale(d[1]);
      });
      svg.append('path').attr('fill', 'lightsteelblue').attr('fill-opacity', .2).attr('d', area(this.data));
      svg.append('path').attr('fill', 'none').attr('stroke', 'steelblue').attr('stroke-linejoin', 'round').attr('stroke-width', 2.5).attr('d', line(this.data));
    }
  }
});

/***/ }),

/***/ "./resources/js/cp/components/widget/widget.js":
/*!*****************************************************!*\
  !*** ./resources/js/cp/components/widget/widget.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    period: {
      type: String
    }
  },
  data: function data() {
    return {
      data: undefined
    };
  },
  watch: {
    period: {
      immediate: true,
      handler: function handler() {
        // console.log(this.period)
        this.loadData();
      }
    }
  },
  methods: {
    loadData: function loadData() {
      var _this = this;
      this.$axios.post('/cp/analytics/dashboard/stats', {
        type: this.type,
        period: this.period
      }).then(function (result) {
        // console.log(result.data.data)
        console.log(result.data.meta);
        _this.data = result.data.data;
      });
      this.loadMoreData();
    },
    loadMoreData: function loadMoreData() {}
  }
});

/***/ }),

/***/ "./resources/js/cp/main.js":
/*!*********************************!*\
  !*** ./resources/js/cp/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Dashboard */ "./resources/js/cp/components/Dashboard.vue");
/* harmony import */ var _components_ResizeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ResizeContainer */ "./resources/js/cp/components/ResizeContainer.vue");


Statamic.booting(function () {
  Statamic.$components.register('resize-container', _components_ResizeContainer__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Statamic.$components.register('analytics-dashboard', _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./resources/css/cp.css":
/*!******************************!*\
  !*** ./resources/css/cp.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/cp/components/Dashboard.vue":
/*!**************************************************!*\
  !*** ./resources/js/cp/components/Dashboard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_13f1368f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=13f1368f */ "./resources/js/cp/components/Dashboard.vue?vue&type=template&id=13f1368f");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/cp/components/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_13f1368f__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_13f1368f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/ResizeContainer.vue":
/*!********************************************************!*\
  !*** ./resources/js/cp/components/ResizeContainer.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResizeContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeContainer.vue?vue&type=script&lang=js */ "./resources/js/cp/components/ResizeContainer.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ResizeContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/ResizeContainer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/Devices.vue":
/*!*******************************************************!*\
  !*** ./resources/js/cp/components/widget/Devices.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Devices_vue_vue_type_template_id_a5e0b032__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Devices.vue?vue&type=template&id=a5e0b032 */ "./resources/js/cp/components/widget/Devices.vue?vue&type=template&id=a5e0b032");
/* harmony import */ var _Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Devices.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/Devices.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Devices_vue_vue_type_template_id_a5e0b032__WEBPACK_IMPORTED_MODULE_0__.render,
  _Devices_vue_vue_type_template_id_a5e0b032__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/Devices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/General.vue":
/*!*******************************************************!*\
  !*** ./resources/js/cp/components/widget/General.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _General_vue_vue_type_template_id_3c5d0672__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=3c5d0672 */ "./resources/js/cp/components/widget/General.vue?vue&type=template&id=3c5d0672");
/* harmony import */ var _General_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/General.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _General_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_3c5d0672__WEBPACK_IMPORTED_MODULE_0__.render,
  _General_vue_vue_type_template_id_3c5d0672__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/General.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/List.vue":
/*!****************************************************!*\
  !*** ./resources/js/cp/components/widget/List.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_72179a84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=72179a84 */ "./resources/js/cp/components/widget/List.vue?vue&type=template&id=72179a84");
/* harmony import */ var _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/List.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_72179a84__WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_72179a84__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/Locations.vue":
/*!*********************************************************!*\
  !*** ./resources/js/cp/components/widget/Locations.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Locations_vue_vue_type_template_id_6a279530__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Locations.vue?vue&type=template&id=6a279530 */ "./resources/js/cp/components/widget/Locations.vue?vue&type=template&id=6a279530");
/* harmony import */ var _Locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locations.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/Locations.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Locations_vue_vue_type_template_id_6a279530__WEBPACK_IMPORTED_MODULE_0__.render,
  _Locations_vue_vue_type_template_id_6a279530__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/Locations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/Pages.vue":
/*!*****************************************************!*\
  !*** ./resources/js/cp/components/widget/Pages.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pages_vue_vue_type_template_id_522c33ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages.vue?vue&type=template&id=522c33ce */ "./resources/js/cp/components/widget/Pages.vue?vue&type=template&id=522c33ce");
/* harmony import */ var _Pages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/Pages.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pages_vue_vue_type_template_id_522c33ce__WEBPACK_IMPORTED_MODULE_0__.render,
  _Pages_vue_vue_type_template_id_522c33ce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/Pages.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/Sources.vue":
/*!*******************************************************!*\
  !*** ./resources/js/cp/components/widget/Sources.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sources_vue_vue_type_template_id_03fab142__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sources.vue?vue&type=template&id=03fab142 */ "./resources/js/cp/components/widget/Sources.vue?vue&type=template&id=03fab142");
/* harmony import */ var _Sources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sources.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/Sources.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sources_vue_vue_type_template_id_03fab142__WEBPACK_IMPORTED_MODULE_0__.render,
  _Sources_vue_vue_type_template_id_03fab142__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/Sources.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/widget/chart/LineChart.vue":
/*!***************************************************************!*\
  !*** ./resources/js/cp/components/widget/chart/LineChart.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LineChart_vue_vue_type_template_id_4f6ba263__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=4f6ba263 */ "./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=template&id=4f6ba263");
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js */ "./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LineChart_vue_vue_type_template_id_4f6ba263__WEBPACK_IMPORTED_MODULE_0__.render,
  _LineChart_vue_vue_type_template_id_4f6ba263__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cp/components/widget/chart/LineChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cp/components/Dashboard.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/cp/components/Dashboard.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/ResizeContainer.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/cp/components/ResizeContainer.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizeContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResizeContainer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/ResizeContainer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResizeContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/Devices.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Devices.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Devices.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Devices.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/General.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/cp/components/widget/General.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./General.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/General.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/List.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/cp/components/widget/List.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/List.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/Locations.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Locations.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Locations.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Locations.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/Pages.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Pages.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pages.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Pages.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/Sources.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Sources.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Sources.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LineChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cp/components/Dashboard.vue?vue&type=template&id=13f1368f":
/*!********************************************************************************!*\
  !*** ./resources/js/cp/components/Dashboard.vue?vue&type=template&id=13f1368f ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_13f1368f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_13f1368f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_13f1368f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=13f1368f */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/Dashboard.vue?vue&type=template&id=13f1368f");


/***/ }),

/***/ "./resources/js/cp/components/widget/Devices.vue?vue&type=template&id=a5e0b032":
/*!*************************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Devices.vue?vue&type=template&id=a5e0b032 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Devices_vue_vue_type_template_id_a5e0b032__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Devices_vue_vue_type_template_id_a5e0b032__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Devices_vue_vue_type_template_id_a5e0b032__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Devices.vue?vue&type=template&id=a5e0b032 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Devices.vue?vue&type=template&id=a5e0b032");


/***/ }),

/***/ "./resources/js/cp/components/widget/General.vue?vue&type=template&id=3c5d0672":
/*!*************************************************************************************!*\
  !*** ./resources/js/cp/components/widget/General.vue?vue&type=template&id=3c5d0672 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3c5d0672__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3c5d0672__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3c5d0672__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./General.vue?vue&type=template&id=3c5d0672 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/General.vue?vue&type=template&id=3c5d0672");


/***/ }),

/***/ "./resources/js/cp/components/widget/List.vue?vue&type=template&id=72179a84":
/*!**********************************************************************************!*\
  !*** ./resources/js/cp/components/widget/List.vue?vue&type=template&id=72179a84 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_72179a84__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_72179a84__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_72179a84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=72179a84 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/List.vue?vue&type=template&id=72179a84");


/***/ }),

/***/ "./resources/js/cp/components/widget/Locations.vue?vue&type=template&id=6a279530":
/*!***************************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Locations.vue?vue&type=template&id=6a279530 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_template_id_6a279530__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_template_id_6a279530__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_template_id_6a279530__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Locations.vue?vue&type=template&id=6a279530 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Locations.vue?vue&type=template&id=6a279530");


/***/ }),

/***/ "./resources/js/cp/components/widget/Pages.vue?vue&type=template&id=522c33ce":
/*!***********************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Pages.vue?vue&type=template&id=522c33ce ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_522c33ce__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_522c33ce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_522c33ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pages.vue?vue&type=template&id=522c33ce */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Pages.vue?vue&type=template&id=522c33ce");


/***/ }),

/***/ "./resources/js/cp/components/widget/Sources.vue?vue&type=template&id=03fab142":
/*!*************************************************************************************!*\
  !*** ./resources/js/cp/components/widget/Sources.vue?vue&type=template&id=03fab142 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_03fab142__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_03fab142__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sources_vue_vue_type_template_id_03fab142__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sources.vue?vue&type=template&id=03fab142 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Sources.vue?vue&type=template&id=03fab142");


/***/ }),

/***/ "./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=template&id=4f6ba263":
/*!*********************************************************************************************!*\
  !*** ./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=template&id=4f6ba263 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_4f6ba263__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_4f6ba263__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_4f6ba263__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LineChart.vue?vue&type=template&id=4f6ba263 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=template&id=4f6ba263");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/Dashboard.vue?vue&type=template&id=13f1368f":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/Dashboard.vue?vue&type=template&id=13f1368f ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "flex justify-between items-center mb-4" }, [
      _c("h1", { staticClass: "text-lg font-bold ml-4" }, [
        _vm._v("Analytics"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card p-2" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.period,
                expression: "period",
              },
            ],
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.period = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          [
            _c("option", { attrs: { value: "last 1 day" } }, [_vm._v("Today")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "last 7 days" } }, [
              _vm._v("Last 7 days"),
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "last 30 days" } }, [
              _vm._v("Last 30 days"),
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "all time" } }, [
              _vm._v("All time"),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "widgets flex flex-wrap -mx-2 py-1" }, [
      _c(
        "div",
        { staticClass: "widget w-full mb-4 px-2" },
        [_c("general", { attrs: { period: _vm.period } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "widget w-full md:w-1/2 mb-4 px-2" },
        [_c("sources", { attrs: { period: _vm.period } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "widget w-full md:w-1/2 mb-4 px-2" },
        [_c("pages", { attrs: { period: _vm.period } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "widget w-full md:w-1/2 mb-4 px-2" },
        [_c("locations", { attrs: { period: _vm.period } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "widget w-full md:w-1/2 mb-4 px-2" },
        [_c("devices", { attrs: { period: _vm.period } })],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Devices.vue?vue&type=template&id=a5e0b032":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Devices.vue?vue&type=template&id=a5e0b032 ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card content w-full h-full" },
    [
      _c("div", { staticClass: "flex justify-between" }, [
        _c("h3", { staticClass: "font-bold mb-2" }, [_vm._v("Devices")]),
        _vm._v(" "),
        _c("div", { staticClass: "flex gap-3" }, [
          _c(
            "button",
            {
              class: { "text-blue-600": _vm.type === "browsers" },
              on: {
                click: function ($event) {
                  return _vm.setType("browsers")
                },
              },
            },
            [_vm._v("Browser")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              class: { "text-blue-600": _vm.type === "operatingSystems" },
              on: {
                click: function ($event) {
                  return _vm.setType("operatingSystems")
                },
              },
            },
            [_vm._v("OS")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              class: { "text-blue-600": _vm.type === "devices" },
              on: {
                click: function ($event) {
                  return _vm.setType("devices")
                },
              },
            },
            [_vm._v("Size")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("list", {
        attrs: { items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "header1",
            fn: function () {
              return [_vm._v(_vm._s(_vm.title))]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/General.vue?vue&type=template&id=3c5d0672":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/General.vue?vue&type=template&id=3c5d0672 ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card content" },
    [
      _vm.data
        ? _c("div", { staticClass: "flex justify-start flex-wrap" }, [
            _c(
              "div",
              {
                staticClass:
                  "group cursor-pointer mb-4 pr-8 max-xl:w-1/2 border-r",
                on: {
                  click: function ($event) {
                    return _vm.select("uniqueVisitors")
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "text-sm uppercase group-hover:text-blue-600",
                    class: {
                      "text-blue-600": _vm.selectedType == "uniqueVisitors",
                    },
                  },
                  [_vm._v("Unique Visitors")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(_vm._s(_vm.data["uniqueVisitors"])),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "group cursor-pointer mb-4 pr-8 pl-8 max-xl:w-1/2 xl:border-r",
                on: {
                  click: function ($event) {
                    return _vm.select("visits")
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "text-sm uppercase group-hover:text-blue-600",
                    class: { "text-blue-600": _vm.selectedType == "visits" },
                  },
                  [_vm._v("Total visits")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(_vm._s(_vm.data["visits"])),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "group cursor-pointer mb-4 pr-8 xl:pl-8 max-xl:w-1/2 border-r",
                on: {
                  click: function ($event) {
                    return _vm.select("pageviews")
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "text-sm uppercase group-hover:text-blue-600",
                    class: { "text-blue-600": _vm.selectedType == "pageviews" },
                  },
                  [_vm._v("Pageviews")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(_vm._s(_vm.data["pageviews"])),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "group cursor-pointer mb-4 pr-8 pl-8 max-xl:w-1/2 xl:border-r",
                on: {
                  click: function ($event) {
                    return _vm.select("viewsPerVisit")
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "text-sm uppercase group-hover:text-blue-600",
                    class: {
                      "text-blue-600": _vm.selectedType == "viewsPerVisit",
                    },
                  },
                  [_vm._v("Views per Visit")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(_vm._s(_vm.data["viewsPerVisit"].toFixed(2))),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "group cursor-pointer mb-4 pr-8 xl:pl-8 max-xl:w-1/2 border-r",
                on: {
                  click: function ($event) {
                    return _vm.select("bounceRate")
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "text-sm uppercase group-hover:text-blue-600",
                    class: {
                      "text-blue-600": _vm.selectedType == "bounceRate",
                    },
                  },
                  [_vm._v("Bounce Rate")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(_vm._s(_vm.data["bounceRate"].toFixed()) + "%"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "group cursor-pointer mb-4 pl-8 xl:pl-8 max-xl:w-1/2",
                on: {
                  click: function ($event) {
                    return _vm.select("visitDuration")
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "text-sm uppercase group-hover:text-blue-600",
                    class: {
                      "text-blue-600": _vm.selectedType == "visitDuration",
                    },
                  },
                  [_vm._v("Visit Duration")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(_vm._s(_vm.visitDuration)),
                ]),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("line-chart", { attrs: { data: _vm.chartData } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/List.vue?vue&type=template&id=72179a84":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/List.vue?vue&type=template&id=72179a84 ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "flex justify-between text-slate-500 mb-1" }, [
        _c("div", { staticClass: "flex-grow" }, [_vm._t("header1")], 2),
        _vm._v(" "),
        _c("div", { staticClass: "text-right" }, [_vm._v("Visitors")]),
      ]),
      _vm._v(" "),
      _vm._l(_vm.items, function (item) {
        return _c(
          "div",
          { key: item[0], staticClass: "flex justify-between gap-8" },
          [
            _c("div", { staticClass: "flex-grow pl-0 truncate" }, [
              _vm._v(_vm._s(item[0])),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [_vm._v(_vm._s(item[1]))]),
          ]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Locations.vue?vue&type=template&id=6a279530":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Locations.vue?vue&type=template&id=6a279530 ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card content w-full h-full" },
    [
      _c("h3", { staticClass: "font-bold mb-2" }, [_vm._v("Locations")]),
      _vm._v(" "),
      _c("list", {
        attrs: { items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "header1",
            fn: function () {
              return [_vm._v("Country")]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Pages.vue?vue&type=template&id=522c33ce":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Pages.vue?vue&type=template&id=522c33ce ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card content w-full h-full" },
    [
      _c("h3", { staticClass: "font-bold mb-2" }, [_vm._v("Top Pages")]),
      _vm._v(" "),
      _c("list", {
        attrs: { items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "header1",
            fn: function () {
              return [_vm._v("Page")]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Sources.vue?vue&type=template&id=03fab142":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/Sources.vue?vue&type=template&id=03fab142 ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card content w-full h-full" },
    [
      _c("h3", { staticClass: "font-bold mb-2" }, [_vm._v("Top Sources")]),
      _vm._v(" "),
      _c("list", {
        attrs: { items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "header1",
            fn: function () {
              return [_vm._v("Source")]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=template&id=4f6ba263":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cp/components/widget/chart/LineChart.vue?vue&type=template&id=4f6ba263 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "resize-container",
    {
      on: {
        size: _vm.onSize,
        resizeStart: _vm.onResizeStart,
        resizeEnd: _vm.onResizeEnd,
      },
    },
    [
      _c("div", { staticClass: "w-full h-full" }, [
        _vm.resizing
          ? _c("div", [_vm._v("...")])
          : _c("svg", { attrs: { width: _vm.width, height: _vm.height } }, [
              _c("g", {
                ref: "axes",
                attrs: {
                  width: _vm.boundsWidth,
                  height: _vm.boundsHeight,
                  transform:
                    "translate(" + _vm.marginLeft + ", " + _vm.marginTop + ")",
                },
              }),
              _vm._v(" "),
              _c("g", {
                ref: "data",
                attrs: {
                  width: _vm.boundsWidth,
                  height: _vm.boundsHeight,
                  transform:
                    "translate(" + _vm.marginLeft + ", " + _vm.marginTop + ")",
                },
              }),
            ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/cp": 0,
/******/ 			"css/cp": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/cp"], () => (__webpack_require__("./resources/js/cp/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/cp"], () => (__webpack_require__("./resources/css/cp.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;