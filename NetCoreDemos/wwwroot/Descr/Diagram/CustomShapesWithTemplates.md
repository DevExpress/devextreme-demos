The Diagram component provides the following properties to create custom shape templates.

* The [CustomShapeTemplate](https://docs.devexpress.com/AspNetCore/DevExtreme.AspNet.Mvc.Builders.DiagramBuilder.CustomShapeTemplate.overloads) method defines a common template for all shapes in the component.
* The [Template](https://docs.devexpress.com/AspNetCore/DevExtreme.AspNet.Mvc.Builders.DiagramCustomShapeBuilder.Template.overloads) method defines a template for an individual shape. 

Template content must be presented as SVG elements. 

In this demo, the [CustomShapeTemplate](https://docs.devexpress.com/AspNetCore/DevExtreme.AspNet.Mvc.Builders.DiagramBuilder.CustomShapeTemplate.overloads) method adds the 'Show Details' link to a shape. When clicked, it displays a popup window that contains additional information about an employee.