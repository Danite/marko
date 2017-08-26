'use strict';

const ComponentDef = require('./ComponentDef');
const hasRenderBodyKey = Symbol.for("hasRenderBody");

function isInputSerializable(component) {
    var input = component.___input;
    if (!input) {
        return true;
    }

    if (input[hasRenderBodyKey] === true || input.renderBody !== undefined) {
        return false;
    } else {
        return true;
    }
}

module.exports = function beginComponent(component, isSplitComponent, parentComponentDef) {
    var globalContext = this.___globalContext;

    var componentId = component.id;

    var componentDef = this.___componentDef = new ComponentDef(component, componentId, globalContext);

    // On the server
    if (parentComponentDef && parentComponentDef.___willRerenderInBrowser === true) {
        componentDef.___willRerenderInBrowser = true;
        return componentDef;
    }

    this.___components.push(componentDef);

    if (isSplitComponent === false &&
        this.___out.global.noBrowserRerender !== true &&
        isInputSerializable(component)) {

        componentDef.___willRerenderInBrowser = true;
    }

    return componentDef;
};
