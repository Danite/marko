"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_defineWidget_legacy = legacy_helpers.w,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-include-attr/index", function() {
      return marko_defineWidget_legacy(require("./"));
    }),
    marko_rendererLegacy = legacy_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    w_preserve_tag = marko_loadTag(require("marko/src/components/taglib/preserve-tag")),
    marko_attr = marko_helpers.a;

function render(input, out, __component, widget) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "><h1>Header</h1>");

  var __componentId1 = __component.elId("0[]");

  out.w("<div" +
    marko_attr("id", __componentId1) +
    ">");

  w_preserve_tag({
      bodyOnly: true,
      if: !__component.b,
      id: __componentId1,
      renderBody: function renderBody(out) {
        include_tag({
            _target: __component.b
          }, out);
      }
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    split: true,
    type: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        },
      {
          type: "require",
          path: "marko/src/components"
        }
    ],
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/preserve-tag"
    ]
  };
