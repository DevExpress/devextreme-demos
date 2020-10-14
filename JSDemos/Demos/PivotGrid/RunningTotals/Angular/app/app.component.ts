import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { Service, Sale } from './app.service';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service]
})
export class AppComponent {
    pivotGridDataSource: any;

    constructor(service: Service) {
        this.pivotGridDataSource = new PivotGridDataSource({
            fields: [{
                caption: "Region",
                width: 120,
                dataField: "region",
                area: "row"
            }, {
                caption: "City",
                dataField: "city",
                width: 150,
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                groupInterval: "year",
                area: "column",
                expanded: true
            }, {
                area: "column",
                expanded: true,
                selector: function({date}) {
                    const currDate = new Date(date);
                    const currMonth = currDate.getMonth();
                    return currMonth <= 5
                        ? "H1"
                        : "H2";
                }
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }, {
                caption: "Running Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data",
                runningTotal: "row",
                allowCrossGroupCalculation: true
            }, {
                caption: "Profit/Loss",
                dataType: "number",
                format: "currency",
                area: "data",
                calculateSummaryValue: function(summaryCell) {
                    const prevCell = summaryCell.prev('column', true);
                    if(prevCell) {
                        const prevVal = prevCell.value("Total");
                        const currVal = summaryCell.value("Total");
                        return currVal - prevVal;
                    }
                    return null;
                }
            }],
            store: service.getSales()
        });
    }

    onCellPrepared(e) {
        if(e.area === "data" && e.cell.dataIndex === 2) {
            e.cellElement.style.color = e.cell.value < 0
                ? "red"
                : "green";
        }
    }

    checkBoxChanged(e) {
        this.pivotGridDataSource.field(5, { allowCrossGroupCalculation: e.value });
        this.pivotGridDataSource.load();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxPivotGridModule,
        DxCheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);