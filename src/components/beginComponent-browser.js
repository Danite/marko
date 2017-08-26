var ComponentDef = require('./ComponentDef');

module.exports = function(component, isSplitComponen, parentComponentDeft) {
    var componentId = component.id;

    var globalContext = this.___globalContext;
    var componentDef = this.___componentDef = new ComponentDef(component, componentId, globalContext);
    this.___components.push((globalContext.___componentsById[componentId] = componentDef));

    return componentDef;
};
