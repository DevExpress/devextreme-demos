testUtils.postponeUntilFound('.dx-datagrid').then(() => testUtils.importAnd(() => ['devextreme/ui/data_grid', 'devextreme/data/data_source'], () => [DevExpress.ui.dxDataGrid, DevExpress.data.DataSource], function (dxDataGrid, DataSource) {
    dxDataGrid
        .getInstance(document.querySelector('.dx-datagrid').parentElement)
        .option('dataSource', new DataSource([
            {
                "ProductID": 1,
                "ProductName": "Product 1",
                "UnitPrice": 238,
                "Quantity": 1249,
                "Amount": 297262,
                "OrderCount": 118
            },
            {
                "ProductID": 2,
                "ProductName": "Product 2",
                "UnitPrice": 147,
                "Quantity": 2939,
                "Amount": 432033,
                "OrderCount": 260
            },
            {
                "ProductID": 3,
                "ProductName": "Product 3",
                "UnitPrice": 962,
                "Quantity": 2525,
                "Amount": 2429050,
                "OrderCount": 243
            },
            {
                "ProductID": 4,
                "ProductName": "Product 4",
                "UnitPrice": 529,
                "Quantity": 2682,
                "Amount": 1418778,
                "OrderCount": 256
            },
            {
                "ProductID": 5,
                "ProductName": "Product 5",
                "UnitPrice": 166,
                "Quantity": 3303,
                "Amount": 548298,
                "OrderCount": 294
            },
            {
                "ProductID": 6,
                "ProductName": "Product 6",
                "UnitPrice": 460,
                "Quantity": 3611,
                "Amount": 1661060,
                "OrderCount": 309
            },
            {
                "ProductID": 7,
                "ProductName": "Product 7",
                "UnitPrice": 865,
                "Quantity": 3111,
                "Amount": 2691015,
                "OrderCount": 286
            },
            {
                "ProductID": 8,
                "ProductName": "Product 8",
                "UnitPrice": 128,
                "Quantity": 2770,
                "Amount": 354560,
                "OrderCount": 266
            },
            {
                "ProductID": 9,
                "ProductName": "Product 9",
                "UnitPrice": 64,
                "Quantity": 2840,
                "Amount": 181760,
                "OrderCount": 267
            },
            {
                "ProductID": 10,
                "ProductName": "Product 10",
                "UnitPrice": 491,
                "Quantity": 2778,
                "Amount": 1363998,
                "OrderCount": 257
            },
            {
                "ProductID": 11,
                "ProductName": "Product 11",
                "UnitPrice": 947,
                "Quantity": 2968,
                "Amount": 2810696,
                "OrderCount": 278
            },
            {
                "ProductID": 12,
                "ProductName": "Product 12",
                "UnitPrice": 609,
                "Quantity": 3162,
                "Amount": 1925658,
                "OrderCount": 293
            },
            {
                "ProductID": 13,
                "ProductName": "Product 13",
                "UnitPrice": 126,
                "Quantity": 2834,
                "Amount": 357084,
                "OrderCount": 263
            },
            {
                "ProductID": 14,
                "ProductName": "Product 14",
                "UnitPrice": 620,
                "Quantity": 3233,
                "Amount": 2004460,
                "OrderCount": 297
            },
            {
                "ProductID": 15,
                "ProductName": "Product 15",
                "UnitPrice": 570,
                "Quantity": 3095,
                "Amount": 1764150,
                "OrderCount": 277
            },
            {
                "ProductID": 16,
                "ProductName": "Product 16",
                "UnitPrice": 871,
                "Quantity": 2737,
                "Amount": 2383927,
                "OrderCount": 256
            },
            {
                "ProductID": 17,
                "ProductName": "Product 17",
                "UnitPrice": 35,
                "Quantity": 3161,
                "Amount": 110635,
                "OrderCount": 286
            },
            {
                "ProductID": 18,
                "ProductName": "Product 18",
                "UnitPrice": 245,
                "Quantity": 3157,
                "Amount": 773465,
                "OrderCount": 292
            },
            {
                "ProductID": 19,
                "ProductName": "Product 19",
                "UnitPrice": 627,
                "Quantity": 3364,
                "Amount": 2109228,
                "OrderCount": 297
            },
            {
                "ProductID": 20,
                "ProductName": "Product 20",
                "UnitPrice": 58,
                "Quantity": 3368,
                "Amount": 195344,
                "OrderCount": 310
            },
        ]));
}));
