# DevExtreme Demos
 
This repository contains technical DevExtreme demos for Angular, React, Vue, jQuery, ASP.NET MVC, and ASP.NET Core.

To run the demos on your machine, clone this repository, run `npm install`, and follow the instructions below.

## Prepare Demos for Development

The following script prepares demos in all technologies for development. If you run it, you can skip step 1 in the other instructions and start straight from step 2.
 
```
npm run prepare-all
```

## JavaScript Demos

### Launch

1. Prepare JavaScript demos for launch:

    ```
    npm run prepare-js
    ```

1. Run the launch script:

    ```
    npm run launch-demo
    ```

1. Choose the category, the demo that you want to launch, and the technology using the built-in CLI.
1. Navigate to http://localhost:3000/.

### Development

1. Prepare JavaScript demos for development:

    ```
    npm run prepare-js:dev
    ```

1. Run the following script to add a new demo:

    ```
    npm run add-demo
    ```

1. Choose or enter the category, the demo name, and the technology for the new demo using the built-in CLI.

## ASP.NET Demos

1. Prepare ASP.NET demos for launch and development:

    ```
    npm run prepare-mvc
    npm run prepare-netcore
    ```

1. Open the ASP.NET or ASP.NET Core project in Visual Studio and add or edit demos there.

## See Also

- [Technical demos online](https://js.devexpress.com/Demos/)
- [Examples on GitHub](https://github.com/DevExpress/DevExtreme-examples)
