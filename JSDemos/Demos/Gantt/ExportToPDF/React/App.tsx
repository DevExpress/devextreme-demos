import React from 'react';

import { SelectBox } from 'devextreme-react/select-box';
import { CheckBox } from 'devextreme-react/check-box';
import { NumberBox } from 'devextreme-react/number-box';
import { DateBox } from 'devextreme-react/date-box';
import {
  Gantt, Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Toolbar, Item,
} from 'devextreme-react/gantt';

import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';

import { jsPDF } from 'jspdf';
import {
  tasks, dependencies, resources, resourceAssignments, startDateLabel, endDateLabel,
  documentFormatLabel, exportModeLabel, dateRangeLabel,
} from './data.js';

import 'jspdf-autotable';

const formats = ['A0', 'A1', 'A2', 'A3', 'A4', 'Auto'];
const exportModes = ['All', 'Chart', 'Tree List'];
const dateRanges = ['All', 'Visible', 'Custom'];
const startTaskIndexLabel = { 'aria-label': 'Start Task Index' };
const endTaskIndexLabel = { 'aria-label': 'End Task Index' };

class App extends React.Component {
  dateRangeBoxRef: any;

  exportButtonOptions: any;

  exportModeBoxRef: any;

  formatBoxRef: any;

  ganttRef: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.formatBoxRef = null;
    this.exportModeBoxRef = null;
    this.dateRangeBoxRef = null;
    this.ganttRef = React.createRef();
    this.state = {
      formatBoxValue: formats[0],
      exportModeBoxValue: exportModes[0],
      dateRangeBoxValue: dateRanges[1],
      landscapeCheckBoxValue: true,
      startTaskIndex: 0,
      endTaskIndex: 3,
      startDate: tasks[0].start,
      endDate: tasks[0].end,
      customRangeDisabled: true,
    };
    this.exportButtonOptions = {
      icon: 'exportpdf',
      hint: 'Export to PDF',
      stylingMode: 'text',
      onClick: this.exportButtonClick.bind(this),
    };
    this.formatBoxSelectionChanged = this.formatBoxSelectionChanged.bind(this);
    this.exportModeBoxSelectionChanged = this.exportModeBoxSelectionChanged.bind(this);
    this.dateRangeBoxSelectionChanged = this.dateRangeBoxSelectionChanged.bind(this);
    this.onLandscapeCheckBoxChanged = this.onLandscapeCheckBoxChanged.bind(this);
    this.startTaskIndexValueChanged = this.startTaskIndexValueChanged.bind(this);
    this.endTaskIndexValueChanged = this.endTaskIndexValueChanged.bind(this);
    this.startDateValueChanged = this.startDateValueChanged.bind(this);
    this.endDateValueChanged = this.endDateValueChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Gantt' cannot be used as a JSX component.
        <Gantt
          ref={this.ganttRef}
          taskListWidth={500}
          scaleType="weeks"
          height={700}
          rootValue={-1}>

          // @ts-expect-error TS(2786): 'Tasks' cannot be used as a JSX component.
          <Tasks dataSource={tasks} />
          // @ts-expect-error TS(2786): 'Dependencies' cannot be used as a JSX component.
          <Dependencies dataSource={dependencies} />
          // @ts-expect-error TS(2786): 'Resources' cannot be used as a JSX component.
          <Resources dataSource={resources} />
          // @ts-expect-error TS(2786): 'ResourceAssignments' cannot be used as a JSX comp... Remove this comment to see the full error message
          <ResourceAssignments dataSource={resourceAssignments} />

          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="undo" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="redo" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="zoomIn" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="zoomOut" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="separator" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item widget="dxButton" options={this.exportButtonOptions} />
          </Toolbar>

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="title" caption="Subject" width={300} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="start" caption="Start Date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="end" caption="End Date" />

          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing enabled={true} />
        </Gantt>
        <div className="options">
          <div className="column">
            <div className="caption">Export Options</div>
            <div className="option">
              <div className="label">Document format:</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
                <SelectBox items={formats}
                  value={this.state.formatBoxValue}
                  inputAttr={documentFormatLabel}
                  onValueChanged={this.formatBoxSelectionChanged} />
              </div>
            </div>
            <div className="option">
              <div className="label">Landscape orientation:</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
                <CheckBox
                  value={this.state.landscapeCheckBoxValue}
                  onValueChanged={this.onLandscapeCheckBoxChanged} />
              </div>
            </div>
            <div className="option">
              <div className="label">Export mode:</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
                <SelectBox items={exportModes}
                  value={this.state.exportModeBoxValue}
                  inputAttr={exportModeLabel}
                  onValueChanged={this.exportModeBoxSelectionChanged} />
              </div>
            </div>
            <div className="option">
              <div className="label">Date range:</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
                <SelectBox items={dateRanges}
                  value={this.state.dateRangeBoxValue}
                  inputAttr={dateRangeLabel}
                  onValueChanged={this.dateRangeBoxSelectionChanged} />
              </div>
            </div>
          </div>
          {' '}
          <div className="column">
            <div className="caption">Task Filter Options</div>
            <div className="option">
              <div className="label">Start task (index):</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  value={this.state.startTaskIndex}
                  min={0}
                  max={this.state.endTaskIndex}
                  disabled={this.state.customRangeDisabled}
                  showSpinButtons={true}
                  inputAttr={startTaskIndexLabel}
                  onValueChanged={this.startTaskIndexValueChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">End task (index):</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  value={this.state.endTaskIndex}
                  min={this.state.startTaskIndex}
                  max={tasks.length - 1}
                  disabled={this.state.customRangeDisabled}
                  showSpinButtons={true}
                  inputAttr={endTaskIndexLabel}
                  onValueChanged={this.endTaskIndexValueChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">Start date:</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'DateBox' cannot be used as a JSX component.
                <DateBox
                  value={this.state.startDate}
                  max={this.state.endDate}
                  inputAttr={startDateLabel}
                  disabled={this.state.customRangeDisabled}
                  type="date"
                  onValueChanged={this.startDateValueChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">End date:</div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'DateBox' cannot be used as a JSX component.
                <DateBox
                  value={this.state.endDate}
                  min={this.state.startDate}
                  inputAttr={endDateLabel}
                  disabled={this.state.customRangeDisabled}
                  type="date"
                  onValueChanged={this.endDateValueChanged}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  exportButtonClick() {
    const gantt = this.ganttRef.current.instance;
    const format = this.state.formatBoxValue.toLowerCase();
    const isLandscape = this.state.landscapeCheckBoxValue;
    const exportMode = this.state.exportModeBoxValue === 'Tree List' ? 'treeList' : this.state.exportModeBoxValue.toLowerCase();
    const dataRangeMode = this.state.dateRangeBoxValue.toLowerCase();
    let dataRange;
    if (dataRangeMode === 'custom') {
      dataRange = {
        startIndex: this.state.startTaskIndex,
        endIndex: this.state.endTaskIndex,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      };
    } else {
      dataRange = dataRangeMode;
    }
    exportGanttToPdf(
      {
        component: gantt,
        // eslint-disable-next-line new-cap
        createDocumentMethod: (args) => new jsPDF(args),
        format,
        landscape: isLandscape,
        exportMode,
        dateRange: dataRange,
      },
    ).then((doc) => doc.save('gantt.pdf'));
  }

  formatBoxSelectionChanged(e) {
    this.setState({ formatBoxValue: e.value });
  }

  exportModeBoxSelectionChanged(e) {
    this.setState({ exportModeBoxValue: e.value });
  }

  dateRangeBoxSelectionChanged(e) {
    this.setState({
      dateRangeBoxValue: e.value,
      customRangeDisabled: e.value !== 'Custom',
    });
  }

  onLandscapeCheckBoxChanged(e) {
    this.setState({ landscapeCheckBoxValue: e.value });
  }

  startTaskIndexValueChanged(e) {
    this.setState({ startTaskIndex: e.value });
  }

  endTaskIndexValueChanged(e) {
    this.setState({ endTaskIndex: e.value });
  }

  startDateValueChanged(e) {
    this.setState({ startDate: e.value });
  }

  endDateValueChanged(e) {
    this.setState({ startDate: e.value });
  }
}

export default App;
