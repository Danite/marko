"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    marko_componentBoundary = "d",
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-vdom/boundary-html-tag/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("5b1bc3"),
    marko_node0 = marko_createElement("HEAD", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("TITLE", null, 1)
        .t("Hello"),
    marko_node1 = marko_createElement("H1", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Hello");

function render(input, out, __component, component, state) {
  var data = input;

  out.be("HTML");

  out.n(marko_node0);

  out.be("BODY");

  component_globals_tag({}, out);

  out.n(marko_node1);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.ee();

  out.ee();

  __component.___boundary = marko_componentBoundary;
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
