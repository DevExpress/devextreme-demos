import { NgModule, Component, enableProdMode, ViewChild, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxGanttComponent, DxGanttModule, DxDropDownBoxModule, DxListModule, DxDropDownBoxComponent, DxCheckBoxModule, DxNumberBoxModule, DxDateBoxModule } from 'devextreme-angular';

import { Service, Task, Dependency, Resource, ResourceAssignment } from './app.service';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service],
    preserveWhitespaces: true
})
export class AppComponent {
    @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent;
    @ViewChildren(DxDropDownBoxComponent) dropDownBoxes!: QueryList<DxDropDownBoxComponent>;
    

    formats: string[] = ["A0", "A1", "A2", "A3", "A4"];
    exportModes: string[] = [ "All", "Chart", "Tree List" ];
    dateRanges: string[] = [ "All", "Visible", "Custom" ];

    formatBoxValue: string;
    exportModeBoxValue: string;
    dateRangeBoxValue: string;
    landscapeCheckBoxValue: boolean;
    startTaskIndex: number;
    endTaskIndex: number;
    startDate: Date;
    endDate: Date;

    tasks: Task[];
    dependencies: Dependency[];
    resources: Resource[];
    resourceAssignments: ResourceAssignment[];
    exportButtonOptions: any;

    constructor(service: Service, private ref: ChangeDetectorRef) {
        this.tasks = service.getTasks();
        this.dependencies = service.getDependencies();
        this.resources = service.getResources();
        this.resourceAssignments = service.getResourceAssignments();

        this.exportButtonOptions = {
            hint: 'Export to PDF',
            icon: 'exportpdf',
            stylingMode: 'text',
            onClick: () => this.exportButtonClick()
        };        

        this.formatBoxValue = this.formats[0];
        this.landscapeCheckBoxValue = true;
        this.exportModeBoxValue = this.exportModes[0];
        this.dateRangeBoxValue = this.dateRanges[1];
        this.startTaskIndex = 0;
        this.endTaskIndex = 3;
        this.startDate = this.tasks[0].start;
        this.endDate = this.tasks[0].end;
    }
    exportButtonClick() {
        const gantt = this.gantt.instance;  
        const format = this.formatBoxValue.toLowerCase();
        const isLandscape = this.landscapeCheckBoxValue;
        const exportMode = this.exportModeBoxValue === "Tree List" ? "treeList" : this.exportModeBoxValue.toLowerCase();
        const dataRangeMode = this.dateRangeBoxValue.toLowerCase();
        let dataRange;
        if(dataRangeMode === 'custom') {
            dataRange = { 
                    startIndex: this.startTaskIndex, 
                    endIndex: this.endTaskIndex,
                    startDate:  this.startDate,
                    endDate: this.endDate
            }
        }
        else {
            dataRange = dataRangeMode
        }
        gantt.exportToPdf(
            {
                docCreateMethod: jsPDF,
                format: format,
                landscape: isLandscape,
                exportMode: exportMode,
                dateRange: dataRange
            }            
        ).then(doc => doc.save('gantt.pdf'));
    }
    onFormatBoxSelectionChanged(e) {
        this.formatBoxValue = e.addedItems[0];
        this.ref.detectChanges();
        
        const formatBox = this.dropDownBoxes.first.instance;
        formatBox.close();
    }
    onExportModeBoxSelectionChanged(e) {
        this.exportModeBoxValue = e.addedItems[0];
        this.ref.detectChanges();

        const exportModeBox = this.dropDownBoxes.toArray()[1].instance;
        exportModeBox.close();
    }
    onDateRangeBoxSelectionChanged(e) {
        this.dateRangeBoxValue = e.addedItems[0];
        this.ref.detectChanges();

        const dateRangeBox = this.dropDownBoxes.last.instance;
        dateRangeBox.close();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxGanttModule,
        DxDropDownBoxModule,
        DxListModule,
        DxCheckBoxModule,
        DxNumberBoxModule,
        DxDateBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);