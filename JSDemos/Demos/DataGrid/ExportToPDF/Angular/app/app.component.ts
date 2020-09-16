import { NgModule, Component, enableProdMode, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxButtonModule, DxDataGridComponent } from 'devextreme-angular';
import { Service, Employee } from './app.service';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


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
    @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

    dataSource: Employee[];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
    }

    onExport(e) {
        const pdfDoc = new jsPDF('p', 'pt', 'a4');
        const options = {
            jsPDFDocument: pdfDoc,
            component: this.dataGrid.instance
        };
        exportDataGrid(options).then(function(){
        pdfDoc.save("dxDataGrid.pdf");
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule,
        DxButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
