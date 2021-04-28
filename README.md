# DevExtreme Demos
 
This repository contains technical DevExtreme demos for Angular, React, Vue, jQuery, ASP.NET MVC, and ASP.NET Core.

To run the demos on your machine, clone this repository, run `npm install`, and follow the instructions below.

## Prepare Demos for Development

To prepare demos for development, you can run a script for all technologies or scripts for JavaScript and ASP.NET individually:

```
npm run prepare-all
```
```
npm run prepare-js
```
```
npm run prepare-mvc
```

Angular, Vue, and React demos can use bundles instead of separate files from `node_modules`. With bundles, demos launch faster but become harder to debug. Run the following command to create the bundles and replace the SystemJS configuration:

```
npm run prepare-bundles
```

To return to using separate files from `node_modules`, run `npm run prepare-js`.


## JavaScript Demos

### Launch

1. Run the launch script:

    ```
    npm run launch-demo
    ```

1. Use the built-in CLI to choose the category, the demo that you want to launch, and the technology.
1. Navigate to http://localhost:3000/.

### Development

1. Run the following script to add a new demo:

    ```
    npm run add-demo
    ```

1. Use the built-in CLI to choose or enter the category, the demo name, and the technology for the new demo.

## ASP.NET Demos

1. Open the `repository.config.json` file and set the `hg` property to a path where your clone of the `mobile` repository is located, for example:

    ````
    {
      "hg": "/home/user/my-repos/mobile"
    }
    ````

1. Prepare ASP.NET demos for launch and development:

    ```
    npm run prepare-mvc
    ```

1. Open the ASP.NET or ASP.NET Core project in Visual Studio and add or edit demos there.

## See Also

- [Technical demos online](https://js.devexpress.com/Demos/)
- [Examples on GitHub](https://github.com/DevExpress/DevExtreme-examples)
