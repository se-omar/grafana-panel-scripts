
function goTo(data, projectId,indexName) {
    let parsedData = JSON.parse(data)
    console.log("data parsed var is:", parsedData)
    console.log("projectId var is:", projectId)
    console.log("index var is:", indexName)

    var iframe = $("<iframe  title='insight ml'></iframe>").attr("src", "https://insight.intalio.ml/" + parsedData["URL"] + "?hide=true").attr("title", "workingggg").css({
        "height": "99%",
        "width": "99%"
    })

    var div1 = $("<div></div>")
    .addClass("modal fade bd-example-modal-lg")
    .attr("tabindex", "-1")
    .attr("role", "dialog")
    .attr("id", "exampleModal")
    .css({
        "width": "99%",
        "height": "99%"
    })

    var div2 = $("<div></div>")
    .addClass("modal-dialog modal-lg")
    .css({
        "width": "99%",
        "height": "99%"
    })
    var div3 = $("<div></div>")
    .addClass("modal-content")
    .css({
        "width": "99%",
        "height": "99%"
    })

    div3.append(iframe)
    div2.append(div3)
    div1.append(div2)
    $(".wrapper").append(div1)

    div1.modal('show')
}

function start(data, projectId,indexName)
{
	var rows=JSON.parse(data);
    var list = [];
    if (Array.isArray(rows))
    {
        list = rows;
    } else
    {
        list.push(rows.id);
    }
    new InsightCustomComponents.StartWorkflowComponent($(".modal-window"), projectId, indexName, list).render();
}
(function (){Handlebars.templates = Handlebars.templates || {};Handlebars.templates["insightcustomstartworkflow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div ref=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"ComponentId") || (depth0 != null ? lookupProperty(depth0,"ComponentId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"ComponentId","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":25}}}) : helper)))
    + "\">\r\n    <div ref=\"modalProjectWorkflow\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-md\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" ref=\"roleClose\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 ref=\"modalProjectWorkflowTitle\" class=\"modal-title\">"
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Workflow",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":7,"column":76},"end":{"line":7,"column":100}}}))
    + "</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form ref=\"formPostWorkflow\" method=\"post\" data-parsley-validate=\"\" novalidate=\"\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" ref=\"documentTypeContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"control-label field-required\"> "
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"DocumentType",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":14,"column":81},"end":{"line":14,"column":109}}}))
    + "</label>\r\n                                    <select ref=\"cmbDocumentTypes\" tabindex=\"1\" required data-parsley-errors-container=\"#cmbDocumentTypeError\" class=\"form-control\"></select>\r\n                                    <div id=\"cmbDocumentTypeError\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"required\"><span class=\"text-danger\">*</span> "
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"RequiredFields",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":21,"column":77},"end":{"line":21,"column":107}}}))
    + "</div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button tabindex=\"2\" ref=\"btnSubmitWorkflow\" type=\"button\" class=\"btn btn-primary\" data-loading-text=\"<i class='fa fa-spinner fa-spin'></i> "
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Saving",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":24,"column":160},"end":{"line":24,"column":182}}}))
    + "\">"
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Submit",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":24,"column":184},"end":{"line":24,"column":206}}}))
    + "</button>\r\n                    <button tabindex=\"3\" ref=\"btnCloseWorkflow\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Close",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":25,"column":123},"end":{"line":25,"column":144}}}))
    + "</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div ref=\"modalProjectWorkflowBuilder\" role=\"dialog\" aria-hidden=\"true\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" ref=\"roleClose\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 ref=\"modalProjectWorkflowBuilderTitle\" class=\"modal-title\"></h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div ref=\"builder\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button tabindex=\"12\" ref=\"btnSend\" type=\"button\" class=\"btn btn-primary\" data-loading-text=\"<i class='fa fa-spinner fa-spin'></i> "
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Saving",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":45,"column":151},"end":{"line":45,"column":173}}}))
    + "\">"
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Submit",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":45,"column":175},"end":{"line":45,"column":197}}}))
    + "</button>\r\n                    <button tabindex=\"13\" ref=\"btnClose\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias3((lookupProperty(helpers,"Localizer")||(depth0 && lookupProperty(depth0,"Localizer"))||alias2).call(alias1,"Close",{"name":"Localizer","hash":{},"data":data,"loc":{"start":{"line":46,"column":116},"end":{"line":46,"column":137}}}))
    + "</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});})();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InsightCustomComponents"] = factory();
	else
		root["InsightCustomComponents"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/components/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/components/common.js":
/*!**************************************!*\
  !*** ./wwwroot/components/common.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Model\r\n{\r\n    getData(url)\r\n    {\r\n        let retValue = null;\r\n        Common.ajaxGet(url, null, function (data)\r\n        {\r\n            retValue = data;\r\n        }, function () { Common.showScreenErrorMsg(); }, null, null, false);\r\n        return retValue;\r\n    }\r\n}\r\n\r\nclass View\r\n{\r\n    constructor(template, model, element, removeUnusedFromDom)\r\n    {\r\n        if (element)\r\n        {\r\n            if (typeof removeUnusedFromDom === \"undefined\" || removeUnusedFromDom === null)\r\n            {\r\n                removeUnusedFromDom = true;\r\n            }\r\n            model.ComponentId = \"component_\" + (new Date().getTime()).toString(10);\r\n            this.element = element;\r\n            this.template = template;\r\n            this.model = model;\r\n            this.refs = {};\r\n            if (!element.hasClass('modal-window'))\r\n            {\r\n                this.element.empty();\r\n                this.element.html(Handlebars.templates[this.template](this.model));\r\n                if (removeUnusedFromDom)\r\n                {\r\n                    $(\".flatpickr-calendar\").remove();\r\n                }\r\n            } else\r\n            {\r\n                this.element.append(Handlebars.templates[this.template](this.model));\r\n            }\r\n            loadRef(this, element[0]);\r\n        }\r\n    }\r\n}\r\n\r\nfunction loadRef(self, element)\r\n{\r\n    const el = element.querySelectorAll(\"[ref]\");\r\n    for (var i = 0; i < el.length; i++)\r\n    {\r\n        self.refs[el[i].getAttribute('ref')] = el[i];\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ Model, View });\r\n\n\n//# sourceURL=webpack://InsightCustomComponents/./wwwroot/components/common.js?");

/***/ }),

/***/ "./wwwroot/components/main.js":
/*!************************************!*\
  !*** ./wwwroot/components/main.js ***!
  \************************************/
/*! exports provided: StartWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_workflow_startWorkflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-workflow/startWorkflow.js */ \"./wwwroot/components/start-workflow/startWorkflow.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StartWorkflowComponent\", function() { return _start_workflow_startWorkflow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://InsightCustomComponents/./wwwroot/components/main.js?");

/***/ }),

/***/ "./wwwroot/components/start-workflow/startWorkflow.js":
/*!************************************************************!*\
  !*** ./wwwroot/components/start-workflow/startWorkflow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.js */ \"./wwwroot/components/common.js\");\n﻿\r\nclass StartWorkflow\r\n{\r\n    constructor()\r\n    {\r\n        this.projectId = null;\r\n        this.indexName = null;\r\n        this.rows = [];\r\n    }\r\n}\r\nCommon.ajaxPostWithFileWithHeaders = function (url, params, successHandler, errorHandler, showMask, id, headers, async) //id of the mask location\r\n{\r\n    if (typeof async === \"undefined\" || async === null)\r\n    {\r\n        async = true;\r\n    }\r\n    if (showMask)\r\n    {\r\n        if (id !== undefined && id !== null)\r\n        {\r\n            var element = document.getElementById(id);\r\n            Common.mask(element, id + \"-mask\");\r\n        }\r\n        else\r\n        {\r\n            Common.mask(document.body, \"body-mask\");\r\n        }\r\n    }\r\n    var model = new FormData();\r\n    Common.objectToFormData(model, params);\r\n    $.ajax({\r\n        url: url,\r\n        type: 'POST',\r\n        processData: false,\r\n        contentType: false,\r\n        data: model,\r\n        headers: typeof headers !== \"undefined\" ? headers : \"\",\r\n        async: async,\r\n    }).done(function (data, textStatus, request)\r\n    {\r\n        if (request.getResponseHeader('LoginPage') !== null)\r\n        {\r\n            location.reload(true);\r\n        }\r\n        if (typeof successHandler === \"function\") { successHandler(data); }\r\n    }).fail(function (jqXHR, textStatus, errorThrown)\r\n    {\r\n        if (typeof errorHandler === \"function\") { errorHandler(errorThrown, jqXHR); }\r\n    })\r\n        .always(function ()\r\n        {\r\n            if (showMask)\r\n            {\r\n                if (id !== undefined && id !== null)\r\n                {\r\n                    Common.unmask(id + \"-mask\");\r\n                }\r\n                else\r\n                {\r\n                    Common.unmask(\"body-mask\");\r\n                }\r\n            }\r\n        });\r\n};\r\nvar saveOptions = {\r\n    params: {}\r\n};\r\nfunction initFormBuilder(formDesignerP, formDesignerTranslationP)\r\n{\r\n    saveOptions.params.DocumentTypeId = $(self.refs['cmbDocumentTypes']).val();\r\n    saveOptions.params.DataIds = self.model.rows;\r\n    saveOptions.params.IndexName = self.model.indexName;\r\n    $(self.refs['modalProjectWorkflowBuilderTitle']).html($(self.refs['cmbDocumentTypes']).select2(\"data\")[0].text);\r\n    $(self.refs['modalProjectWorkflowBuilder']).modal('show');\r\n    var formDesigner = formDesignerP !== undefined ? JSON.parse(formDesignerP) : null;\r\n    var formDesignerTranslation = (formDesignerTranslationP || \"\") !== \"\" ? JSON.parse(formDesignerTranslationP) : null;\r\n    var builder;\r\n    if (formDesigner !== null && formDesigner.components.length > 0)\r\n    {\r\n        var translationObject = formDesignerTranslation;\r\n        var translationEn = {}, translationAr = {}, translationFr = {};\r\n        if (translationObject !== null)\r\n        {\r\n            for (var i = 0; i < translationObject.length; i++)\r\n            {\r\n                translationEn[translationObject[i].Keyword] = translationObject[i].En;\r\n                translationAr[translationObject[i].Keyword] = translationObject[i].Ar;\r\n                translationFr[translationObject[i].Keyword] = translationObject[i].Fr;\r\n            }\r\n        }\r\n        var formDesigner = formDesigner;\r\n        Formio.createForm(self.refs['builder'], formDesigner, {\r\n            noAlerts: true, template: 'bootstrap3', readOnly: false, language: window.language,\r\n            i18n: {\r\n                'en': translationEn,\r\n                'ar': translationAr,\r\n                'fr': translationFr\r\n            },\r\n            buttonSettings: {\r\n                showCancel: false,\r\n                showPrevious: true,\r\n                showNext: true,\r\n                showSubmit: false\r\n            }\r\n        }).then(function (form)\r\n        {\r\n            builder = form;\r\n            form.nosubmit = true;\r\n            form.on('change', function (value)\r\n            {\r\n                if (value.changed)\r\n                {\r\n                    $(self.refs['btnSend']).attr(\"disabled\", !value.isValid);\r\n                }\r\n            });\r\n            form.on('submit', function (submission)\r\n            {\r\n                delete submission.data.submit;\r\n                gUniqueKeys = [];\r\n                clearAttachmentsFromData(submission.data, saveOptions);\r\n                fetchAttachmentsFromData(submission.data, saveOptions);\r\n                saveOptions.params.FormData = JSON.stringify(submission.data);\r\n                form.emit('submitDone', submission);\r\n            });\r\n            if (form.checkValidity())\r\n            {\r\n                $(self.refs['btnSend']).attr(\"disabled\", false);\r\n            } else\r\n            {\r\n                $(self.refs['btnSend']).attr(\"disabled\", true);\r\n            }\r\n        });\r\n        $(self.refs['btnSend']).click(function ()\r\n        {\r\n            if (!gLocked)\r\n            {\r\n                gLocked = true;\r\n                try\r\n                {\r\n                    builder.off('submitDone');\r\n                    $(self.refs['btnSend']).button('loading');\r\n                    builder.on('submitDone', function ()\r\n                    {\r\n                        Common.ajaxPostWithFileWithHeaders(siteUrl + '/api/StartWorkflow', saveOptions.params, function (response)\r\n                        {\r\n                            $(self.refs['btnSend']).attr(\"disabled\", false);\r\n                            $(self.refs['btnSend']).button('reset');\r\n                            gLocked = false;\r\n                            if (response === \"DocumentTypePermission\")\r\n                            {\r\n                                Common.alertMsg(Resources.DocumentTypePermission);\r\n                            } else if (response === \"StorageError\")\r\n                            {\r\n                                Common.alertMsg(Resources.StorageErrorMessage);\r\n                            } else if (response === \"RowsInsertionError\")\r\n                            {\r\n                                Common.alertMsg(Resources.RowsInsertionErrorMessage);\r\n                            } else\r\n                            {\r\n                                $(self.refs['btnSend']).remove();\r\n                                $(self.refs['modalProjectWorkflowBuilder']).modal('hide');\r\n                                Common.alertMsg(Common.format(Resources.ReferenceNumberMsg, response));\r\n                            }\r\n                        }, function (errorThrown, jqXHR)\r\n                        {\r\n                            $(self.refs['btnSend']).attr(\"disabled\", false);\r\n                            $(self.refs['btnSend']).button('reset');\r\n                            if (jqXHR.responseText)\r\n                            {\r\n                                Common.showScreenErrorMsg(jqXHR.responseText);\r\n                            } else\r\n                            {\r\n                                Common.showScreenErrorMsg();\r\n                            }\r\n                            gLocked = false;\r\n                        }, false, \"\", { \"Authorization\": 'Bearer ' + window.IdentityAccessToken });\r\n                    });\r\n                    builder.submit();\r\n                } catch (e)\r\n                {\r\n                    gLocked = false;\r\n                }\r\n            }\r\n        });\r\n    }\r\n    else\r\n    {\r\n        var noFormDiv = document.createElement('div');\r\n        noFormDiv.setAttribute('class', 'nodata');\r\n        noFormDiv.textContent = Resources.NoFormToDisplay;\r\n        $('#builder').append(noFormDiv);\r\n        $(self.refs['btnSend']).attr(\"disabled\", false);\r\n        $(self.refs['btnSend']).click(function ()\r\n        {\r\n            if (!gLocked)\r\n            {\r\n                gLocked = true;\r\n                try\r\n                {\r\n                    $(this).button('loading');\r\n                    Common.ajaxPostWithHeaders(siteUrl + '/api/StartWorkflow', saveOptions.params, function (response)\r\n                    {\r\n                        $(self.refs['btnSend']).attr(\"disabled\", false);\r\n                        $(self.refs['btnSend']).button('reset');\r\n                        gLocked = false;\r\n                        if (response === \"DocumentTypePermission\")\r\n                        {\r\n                            Common.alertMsg(Resources.DocumentTypePermission);\r\n                        } else if (response === \"StorageError\")\r\n                        {\r\n                            Common.alertMsg(Resources.StorageErrorMessage);\r\n                        } else if (response === \"RowsInsertionError\")\r\n                        {\r\n                            Common.alertMsg(Resources.RowsInsertionErrorMessage);\r\n                        } else\r\n                        {\r\n                            $(self.refs['btnSend']).remove();\r\n                            $(self.refs['modalProjectWorkflowBuilder']).modal('hide');\r\n                            Common.alertMsg(Common.format(Resources.ReferenceNumberMsg, response));\r\n                        }\r\n                    }, function ()\r\n                    {\r\n                        $(self.refs['btnSend']).attr(\"disabled\", false);\r\n                        $(self.refs['btnSend']).button('reset');\r\n                        Common.showScreenErrorMsg();\r\n                        gLocked = false;\r\n                    }, false, \"\", { \"Authorization\": 'Bearer ' + window.IdentityAccessToken });\r\n                } catch (e)\r\n                {\r\n                    gLocked = false;\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\nvar self;\r\nvar gLocked = false;\r\nvar siteUrl = '';\r\nclass StartWorkflowView extends _common_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View\r\n{\r\n    constructor(element, projectId, indexName, rows)\r\n    {\r\n        if (window.language === 'en')\r\n        {\r\n            Resources.Workflow = \"Workflow\";\r\n            Resources.DocumentType = \"Document type\";\r\n            Resources.ReferenceNumberMsg = \"Workflow started successfully, The generated reference number is {0}.\";\r\n            Resources.DocumentTypePermission = \"You don't have permission on document type\";\r\n            Resources.RowsInsertionErrorMessage = \"Something went wrong while inserting rows\";\r\n            Resources.NoFormToDisplay = \"No form to display\";\r\n            Resources.StorageErrorMessage = \"Something went wrong while uploading or replacing the attachments, please reupload them again\";\r\n        } else if (window.language === 'fr')\r\n        {\r\n            Resources.Workflow = \"Flux de travail\";\r\n            Resources.DocumentType = \"Type de document\";\r\n            Resources.ReferenceNumberMsg = \"Le workflow a démarré avec succès, Le numéro de référence généré est {0}.\";\r\n            Resources.DocumentTypePermission = \"Vous n'avez pas l'autorisation sur le type de document\";\r\n            Resources.RowsInsertionErrorMessage = \"Une erreur s'est produite lors de l'insertion de lignes\";\r\n            Resources.NoFormToDisplay = \"Aucun formulaire à afficher\";\r\n            Resources.StorageErrorMessage = \"Une erreur s''est produite lors du téléchargement ou du remplacement des pièces jointes, veuillez les télécharger à nouveau\";\r\n        } else if (window.language === 'ar')\r\n        {\r\n            Resources.Workflow = \"سير العمل\";\r\n            Resources.DocumentType = \"نوع الوثيقة\";\r\n            Resources.ReferenceNumberMsg = \"بدأ سير العمل بنجاح ،إن رقم الاشارة الذي تم إنشاؤه هو {0}.\";\r\n            Resources.DocumentTypePermission = \"ليس لديك إذن بنوع المستند\";\r\n            Resources.RowsInsertionErrorMessage = \"حدث خطأ ما أثناء إدراج الصفوف\";\r\n            Resources.NoFormToDisplay = \"لا يوجد نموذج لعرضه\";\r\n            Resources.StorageErrorMessage = \"حدث خطأ ما أثناء تحميل المرفقات أو استبدالها ، يرجى إعادة تحميلها مرة أخرى\";\r\n        }\r\n        var model = new StartWorkflow();\r\n        model.projectId = projectId;\r\n        model.indexName = indexName;\r\n        model.rows = rows;\r\n        super(\"insightcustomstartworkflow\", model, element);\r\n    }\r\n    render()\r\n    {\r\n        self = this;\r\n        if (window.InsightCaseIntegrationUrl)\r\n        {\r\n            siteUrl = window.InsightCaseIntegrationUrl.replace(new RegExp(\"/*$\"), '');\r\n        }\r\n        $.fn.select2.defaults.set(\"theme\", \"bootstrap\");\r\n        $(self.refs['cmbDocumentType']).select2({\r\n            dir: window.language === \"ar\" ? \"rtl\" : \"ltr\",\r\n            language: window.language,\r\n            width: \"100%\",\r\n            allowClear: false,\r\n            placeholder: \"\",\r\n            dropdownParent: $(self.refs['documentTypeContainer'])\r\n        }).on('change', function ()\r\n        {\r\n            $(this).trigger('input');\r\n        });\r\n        $(self.refs['cmbDocumentType']).val(\"\").trigger(\"change\");\r\n        Common.mask(self.refs[\"modalProjectWorkflow\"], \"modalProjectWorkflow-mask\");\r\n        Common.ajaxGetWithHeaders(siteUrl + '/api/ListDocumentTypes', { projectId: self.model.projectId },\r\n            function (data)\r\n            {\r\n                var options = [];\r\n                for (var i = 0; i < data.length; i++)\r\n                {\r\n                    var option = {};\r\n                    option.id = data[i].id;\r\n                    option.text = data[i].name;\r\n                    options.push(option);\r\n                }\r\n                $(self.refs['cmbDocumentTypes']).select2({\r\n                    dir: window.language === \"ar\" ? \"rtl\" : \"ltr\",\r\n                    language: window.language,\r\n                    width: \"100%\",\r\n                    allowClear: false,\r\n                    placeholder: \"\",\r\n                    data: options,\r\n                    dropdownParent: $(self.refs['documentTypeContainer'])\r\n                }).on('change', function ()\r\n                {\r\n                    $(this).trigger('input');\r\n                });\r\n                $(self.refs['cmbDocumentTypes']).val(\"\").trigger(\"change\");\r\n                Common.unmask(\"modalProjectWorkflow-mask\");\r\n            },\r\n            function (msg)\r\n            {\r\n                console.log(msg);\r\n                Common.unmask(\"modalProjectWorkflow-mask\");\r\n            },\r\n            false, null, { \"Authorization\": 'Bearer ' + window.IdentityAccessToken });\r\n        $(self.refs['modalProjectWorkflow']).modal('show');\r\n        $(self.refs['btnCloseWorkflow']).keydown(function (e)\r\n        {\r\n            var code = e.keyCode || e.which;\r\n            if (code === 9)\r\n            {\r\n                e.preventDefault();\r\n                if (e.shiftKey)\r\n                {\r\n                    $(self.refs['btnSubmitWorkflow']).focus();\r\n                }\r\n                else\r\n                {\r\n                    $(self.refs['cmbDocumentTypes']).focus();\r\n                }\r\n            }\r\n        });\r\n        $(self.refs['cmbDocumentTypes']).keydown(function (e)\r\n        {\r\n            var code = e.keyCode || e.which;\r\n            if (code === 9)\r\n            {\r\n                e.preventDefault();\r\n                if (e.shiftKey)\r\n                {\r\n                    $(self.refs['btnCloseWorkflow']).focus();\r\n                }\r\n                else\r\n                {\r\n                    $(self.refs['btnSubmitWorkflow']).focus();\r\n                }\r\n            }\r\n        });\r\n        $(self.refs['btnSubmitWorkflow']).keydown(function (e)\r\n        {\r\n            var code = e.keyCode || e.which;\r\n            if (code === 9)\r\n            {\r\n                e.preventDefault();\r\n                if (e.shiftKey)\r\n                {\r\n                    $(self.refs['cmbDocumentTypes']).focus();\r\n                }\r\n                else\r\n                {\r\n                    $(self.refs['btnCloseWorkflow']).focus();\r\n                }\r\n            }\r\n        });\r\n        $(self.refs['formPostWorkflow']).keydown(function (e)\r\n        {\r\n            var code = e.keyCode || e.which;\r\n            if (code === 13)\r\n            {\r\n                e.preventDefault();\r\n                $(self.refs['btnSubmitWorkflow']).trigger(\"click\");\r\n            }\r\n        });\r\n        $(self.refs['btnSubmitWorkflow']).on('click', function ()\r\n        {\r\n            if (!gLocked)\r\n            {\r\n                gLocked = true;\r\n                try\r\n                {\r\n                    var $form = $(self.refs['formPostWorkflow']);\r\n                    $form.parsley().reset();\r\n                    var isValid = $form.parsley().validate();\r\n                    if (isValid)\r\n                    {\r\n                        let params = {\r\n                            DocumentTypeId: $(self.refs['cmbDocumentTypes']).val()\r\n                        };\r\n                        var btn = $(self.refs['btnSubmitWorkflow']);\r\n                        btn.button('loading');\r\n                        Common.ajaxGetWithHeaders(siteUrl + '/api/GetForm', params, function (data)\r\n                        {\r\n                            if (data)\r\n                            {\r\n                                initFormBuilder(data.formDesigner, data.formDesignerTranslation);\r\n                                $(self.refs['modalProjectWorkflow']).modal('hide');\r\n                            }\r\n                            btn.button('reset');\r\n                            gLocked = false;\r\n                        }, function ()\r\n                        {\r\n                            btn.button('reset');\r\n                            Common.showScreenErrorMsg();\r\n                            gLocked = false;\r\n                        }, false, \"\", { \"Authorization\": 'Bearer ' + window.IdentityAccessToken }, false);\r\n                    }\r\n                } catch (e)\r\n                {\r\n                    gLocked = false;\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\nfunction clearAttachmentsFromData(data, saveOptions)\r\n{\r\n    Object.keys(saveOptions.params).forEach(function (key)\r\n    {\r\n        if (key !== 'DataIds' && Array.isArray(saveOptions.params[key]))\r\n        {\r\n            delete saveOptions.params[key];\r\n        }\r\n    });\r\n    Object.keys(data).forEach(function (key)\r\n    {\r\n        if (key in saveOptions.params)\r\n        {\r\n            delete saveOptions.params[key];\r\n        }\r\n        if (Array.isArray(data[key]))\r\n        {\r\n            if (data[key].length > 0)\r\n            {\r\n                for (let i = 0; i < data[key].length; i++)\r\n                {\r\n                    let item = data[key][i];\r\n                    if (item !== null)\r\n                    {\r\n                        var isObjectContainsAttachments = false;\r\n                        Object.keys(item).forEach(function (key)\r\n                        {\r\n                            if (Array.isArray(item[key]))\r\n                            {\r\n                                isObjectContainsAttachments = true;\r\n                            }\r\n                        });\r\n                        if (isObjectContainsAttachments)\r\n                        {\r\n                            clearAttachmentsFromData(item, saveOptions);\r\n                            continue;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n\r\n        } else if (typeof data[key] === 'object')\r\n        {\r\n            clearAttachmentsFromData(data[key], saveOptions);\r\n        }\r\n    });\r\n}\r\nfunction fetchAttachmentsFromData(data, saveOptions)\r\n{\r\n    let attachmentProperties = [\"name\", \"originalName\", \"size\", \"storage\", \"type\", \"url\"];\r\n    Object.keys(data).forEach(function (key)\r\n    {\r\n        let attachmentArray = new Array();\r\n        if (Array.isArray(data[key]))\r\n        {\r\n            if (data[key].length > 0)\r\n            {\r\n                for (let i = 0; i < data[key].length; i++)\r\n                {\r\n                    let isAttachment = true;\r\n                    let propertyCount = 0;\r\n                    let item = data[key][i];\r\n                    if (item !== null)\r\n                    {\r\n                        var isObjectContainsAttachments = false;\r\n                        Object.keys(item).forEach(function (key)\r\n                        {\r\n                            if (Array.isArray(item[key]))\r\n                            {\r\n                                isObjectContainsAttachments = true;\r\n                            }\r\n                        });\r\n                        if (isObjectContainsAttachments)\r\n                        {\r\n                            fetchAttachmentsFromData(item, saveOptions);\r\n                            continue;\r\n                        }\r\n                        var hashKey = generateUniqueKey();\r\n                        Object.keys(item).forEach(function (key)\r\n                        {\r\n                            if (key === \"id\")//update mode\r\n                            {\r\n                                propertyCount++;\r\n                            }\r\n                            else\r\n                            {\r\n                                propertyCount++;\r\n                                if (attachmentProperties.indexOf(key) === -1)\r\n                                {\r\n                                    isAttachment = false;\r\n                                }\r\n                            }\r\n                        });\r\n                        if (isAttachment && propertyCount === attachmentProperties.length)\r\n                        {\r\n                            if (item[\"id\"] !== undefined)\r\n                            {\r\n                                if (window.navigator.msSaveBlob)//IE\r\n                                {\r\n                                    let blob = new Blob([]);\r\n                                    blob.name = item[\"id\"];\r\n                                    attachmentArray.push(blob);\r\n                                    item[\"url\"] = \"\";\r\n                                    delete item[\"storage\"];\r\n                                }\r\n                                else\r\n                                {\r\n                                    attachmentArray.push(new File([], item[\"id\"]));\r\n                                    item[\"url\"] = \"\";\r\n                                    delete item[\"storage\"];\r\n                                }\r\n                            }\r\n                            else\r\n                            {\r\n                                if (window.navigator.msSaveBlob)//IE\r\n                                {\r\n                                    if (item.size !== 0)\r\n                                    {\r\n                                        item[\"id\"] = hashKey;\r\n                                        let blob = new Blob([Common.dataURItoBlob(item[\"url\"])], { type: item[\"type\"] });\r\n                                        blob.name = item[\"originalName\"] + \"/\" + hashKey;\r\n                                        attachmentArray.push(blob);\r\n                                        item[\"url\"] = \"\";\r\n                                        delete item[\"storage\"];\r\n                                    }\r\n                                }\r\n                                else\r\n                                {\r\n                                    if (item.size !== 0)\r\n                                    {\r\n                                        item[\"id\"] = hashKey;\r\n                                        attachmentArray.push(new File([Common.dataURItoBlob(item[\"url\"])], item[\"originalName\"] + \"/\" + hashKey, { type: item[\"type\"] }));\r\n                                        item[\"url\"] = \"\";\r\n                                        delete item[\"storage\"];\r\n                                    }\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n                if (attachmentArray.length > 0)\r\n                {\r\n                    if (saveOptions.params[key] !== undefined && saveOptions.params[key].length > 0)\r\n                    {\r\n                        for (var i = 0; i < attachmentArray.length; i++)\r\n                        {\r\n                            saveOptions.params[key].push(attachmentArray[i]);\r\n                        }\r\n                    } else\r\n                    {\r\n                        saveOptions.params[key] = attachmentArray;\r\n                    }\r\n                }\r\n            }\r\n        } else if (typeof data[key] === 'object')\r\n        {\r\n            fetchAttachmentsFromData(data[key], saveOptions);\r\n        }\r\n    });\r\n}\r\nvar gUniqueKeys = [];\r\nfunction generateUniqueKey()\r\n{\r\n    var key = \"#\" + Math.random().toString(36).substr(2, 9) + \"#\";\r\n    while (gUniqueKeys.includes(key))\r\n    {\r\n        key = \"#\" + Math.random().toString(36).substr(2, 9) + \"#\";\r\n    }\r\n    gUniqueKeys.push(key);\r\n    return key;\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartWorkflowView);\r\n\n\n//# sourceURL=webpack://InsightCustomComponents/./wwwroot/components/start-workflow/startWorkflow.js?");

/***/ })

/******/ });
});