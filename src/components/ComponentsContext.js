'use strict';
var componentsUtil = require('./util');

var beginComponent = require('./beginComponent');

var EMPTY_OBJECT = {};

function GlobalComponentsContext(out) {
    this.___preserved = EMPTY_OBJECT;
    this.___preservedBodies = EMPTY_OBJECT;
    this.___preservedComponents = EMPTY_OBJECT;
    this.___componentsById = {};
    this.___out = out;
    this.___rerenderComponent = undefined;
    this.___nextIdLookup = null;
    this.___nextComponentId = componentsUtil.___nextComponentIdProvider(out);
}

GlobalComponentsContext.prototype = {
    ___preserveDOMNode: function(elId, bodyOnly) {
        var preserved = bodyOnly === true ? this.___preservedBodies : this.___preserved;
        if (preserved === EMPTY_OBJECT) {
            if (bodyOnly === true) {
                preserved = this.___preservedBodies = {};
            } else {
                preserved = this.___preserved = {};
            }
        }
        preserved[elId] = true;
    },
    ___preserveComponent: function(componentId) {
       var preserved = this.___preservedComponents;
       if (preserved === EMPTY_OBJECT) {
           preserved = this.___preservedComponents = {};
       }
       preserved[componentId] = true;
   },
    ___nextRepeatedId: function(parentId, key) {
        var nextIdLookup = this.___nextIdLookup || (this.___nextIdLookup = {});

        var indexLookupKey = parentId + '-' + key;
        var currentIndex = nextIdLookup[indexLookupKey];
        if (currentIndex == null) {
            currentIndex = nextIdLookup[indexLookupKey] = 0;
        } else {
            currentIndex = ++nextIdLookup[indexLookupKey];
        }

        return indexLookupKey.slice(0, -2) + '[' + currentIndex + ']';
    }
};

function ComponentsContext(out, parentComponentsContext) {
    var globalComponentsContext;
    var componentDef;
    var components;

    if (parentComponentsContext) {
        components = parentComponentsContext.___components;
        globalComponentsContext = parentComponentsContext.___globalContext;
        componentDef = parentComponentsContext.___componentDef;
    } else {
        globalComponentsContext = out.global.___components;
        if (globalComponentsContext === undefined) {
            out.global.___components = globalComponentsContext = new GlobalComponentsContext(out);
        }
        components = [];
    }

    this.___globalContext = globalComponentsContext;
    this.___components = components;
    this.___out = out;
    this.___componentDef = componentDef;
}

ComponentsContext.prototype = {
    ___beginComponent: beginComponent,

    ___initComponents: function(doc) {
        var componentDefs = this.___components;

        ComponentsContext.___initClientRendered(componentDefs, doc);

        // Reset things stored in global since global is retained for
        // future renders
        this.___out.global.___components = undefined;

        return componentDefs;
    },
};

function getComponentsContext(out) {
    return out.___components || (out.___components = new ComponentsContext(out));
}

module.exports = exports = ComponentsContext;

exports.___getComponentsContext = getComponentsContext;
