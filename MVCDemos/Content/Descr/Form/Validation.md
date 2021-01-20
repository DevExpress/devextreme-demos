This demo shows how you can validate form editors when using ASP.NET MVC controls. Form editors extract validation rules from data annotations attributes to the fields of the model (see the _EditorsViewModel.cs_ file). Custom data annotations are supported as well (_AgeVerification_ in this demo).
  
  
Note that the _"Register"_ button here does not implement the usual **onClick** event handler. Instead, it has the **useSubmitBehavior** property set to _true_. This setting tells the button to validate and submit the HTML form in which it is nested, with no further configuration required.