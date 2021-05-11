import React from 'react';

import { List, DropDownBox, CheckBox, NumberBox, DateBox } from 'devextreme-react';
import { Gantt, Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Toolbar, Item } from 'devextreme-react/gantt';

import { tasks, dependencies, resources, resourceAssignments } from './data.js';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const formats = ['A0', 'A1', 'A2', 'A3', 'A4'];
const exportModes = ['All', 'Chart', 'Tree List' ];
const dateRanges = [ 'All', 'Visible', 'Custom' ];

class App extends React.Component {
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
      endDate: tasks[0].end
    };
    this.exportButtonOptions = {
      icon: 'exportpdf',
      hint: 'Export to PDF',
      stylingMode: 'text',
      onClick: this.exportButtonClick.bind(this)
    };
    this.formatBoxRender = this.formatBoxRender.bind(this);
    this.formatBoxSelectionChanged = this.formatBoxSelectionChanged.bind(this);
    this.exportModeBoxRender = this.exportModeBoxRender.bind(this);
    this.exportModeBoxSelectionChanged = this.exportModeBoxSelectionChanged.bind(this);
    this.dateRangeBoxRender = this.dateRangeBoxRender.bind(this);
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
        <Gantt
          ref={this.ganttRef}
          taskListWidth={500}
          scaleType="weeks"
          height={700}
          rootValue={-1}>

          <Tasks dataSource={tasks} />
          <Dependencies dataSource={dependencies} />
          <Resources dataSource={resources} />
          <ResourceAssignments dataSource={resourceAssignments} />

          <Toolbar>
            <Item name="undo" />
            <Item name="redo" />
            <Item name="separator" />
            <Item name="zoomIn" />
            <Item name="zoomOut" />
            <Item name="separator" />
            <Item widget="dxButton" options={this.exportButtonOptions} />
          </Toolbar>

          <Column dataField="title" caption="Subject" width={300} />
          <Column dataField="start" caption="Start Date" />
          <Column dataField="end" caption="End Date" />

          <Editing enabled={true} />
        </Gantt>
        <div className="options">
          <div className="column">
            <div className="option">
              <div className="label">Document format</div>
              {' '}
              <div className="value">
                <DropDownBox
                  value={this.state.formatBoxValue}
                  ref={(ref) => this.formatBoxRef = ref}
                  dataSource={formats}
                  contentRender={this.formatBoxRender}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">Landscape orientation</div>
              {' '}
              <div className="value">
                <CheckBox value={this.state.landscapeCheckBoxValue} onValueChanged={this.onLandscapeCheckBoxChanged} />
              </div>
            </div>
            <div className="option">
              <div className="label">Export mode </div>
              {' '}
              <div className="value">
                <DropDownBox
                  value={this.state.exportModeBoxValue}
                  ref={(ref) => this.exportModeBoxRef = ref}
                  dataSource={exportModes}
                  contentRender={this.exportModeBoxRender}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">Date range </div>
              {' '}
              <div className="value">
                <DropDownBox
                  value={this.state.dateRangeBoxValue}
                  ref={(ref) => this.dateRangeBoxRef = ref}
                  dataSource={dateRanges}
                  contentRender={this.dateRangeBoxRender}
                />
              </div>
            </div>
          </div>
          {' '}
          <div className="column">
            <div className="option">
              <div className="label">Start task (index) </div>
              {' '}
              <div className="value">
                <NumberBox
                  value={this.state.startTaskIndex}
                  min={0}
                  max={this.state.endTaskIndex}
                  showSpinButtons={true}
                  onValueChanged={this.startTaskIndexValueChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">End task (index) </div>
              {' '}
              <div className="value">
                <NumberBox
                  value={this.state.endTaskIndex}
                  min={this.state.startTaskIndex}
                  max={tasks.length - 1}
                  showSpinButtons={true}
                  onValueChanged={this.endTaskIndexValueChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">Start date </div>
              {' '}
              <div className="value">
                <DateBox
                  value={this.state.startDate}
                  max={this.state.endDate}
                  type="date"
                  onValueChanged={this.startDateValueChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">End date </div>
              {' '}
              <div className="value">
                <DateBox
                  value={this.state.endDate}
                  min={this.state.startDate}
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
    if(dataRangeMode === 'custom') {
      dataRange = {
        startIndex: this.state.startTaskIndex,
        endIndex: this.state.endTaskIndex,
        startDate:  this.state.startDate,
        endDate: this.state.endDate
      };
    }
    else {
      dataRange = dataRangeMode;
    }
    gantt.exportToPdf(
      {
        docCreateMethod: jsPDF,
        format: format,
        landscape: isLandscape,
        exportMode: exportMode,
        dateRange: dataRange
      }).then(doc => doc.save('gantt.pdf'));
  }
  formatBoxRender(e) {
    return (
      <List dataSource={e.component.option('dataSource')}
        selectionMode='single'
        onSelectionChanged = {this.formatBoxSelectionChanged}
      />
    );
  }
  formatBoxSelectionChanged(e) {
    this.setState({ formatBoxValue: e.addedItems[0] });
    this.formatBoxRef.instance.close();
  }
  exportModeBoxRender(e) {
    return (
      <List dataSource={e.component.option('dataSource')}
        selectionMode='single'
        onSelectionChanged = {this.exportModeBoxSelectionChanged}
      />
    );
  }
  exportModeBoxSelectionChanged(e) {
    this.setState({ exportModeBoxValue: e.addedItems[0] });
    this.exportModeBoxRef.instance.close();
  }
  dateRangeBoxRender(e) {
    return (
      <List dataSource={e.component.option('dataSource')}
        selectionMode='single'
        onSelectionChanged = {this.dateRangeBoxSelectionChanged}
      />
    );
  }
  dateRangeBoxSelectionChanged(e) {
    this.setState({ dateRangeBoxValue: e.addedItems[0] });
    this.dateRangeBoxRef.instance.close();
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
