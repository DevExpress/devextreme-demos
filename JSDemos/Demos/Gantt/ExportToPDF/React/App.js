import React, { useState, useRef } from 'react';
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

const App = () => {
  const [formatBoxValue, setFormatBoxValue] = useState(formats[0]);
  const [exportModeBoxValue, setExportModeBoxValue] = useState(exportModes[0]);
  const [dateRangeBoxValue, setDateRangeBoxValue] = useState(dateRanges[1]);
  const [landscapeCheckBoxValue, setLandscapeCheckBoxValue] = useState(true);
  const [startTaskIndex, setStartTaskIndex] = useState(0);
  const [endTaskIndex, setEndTaskIndex] = useState(3);
  const [startDate, setStartDate] = useState(tasks[0].start);
  const [endDate, setEndDate] = useState(tasks[0].end);
  const [customRangeDisabled, setCustomRangeDisabled] = useState(true);

  const ganttRef = useRef(null);

  const exportButtonOptions = {
    icon: 'exportpdf',
    hint: 'Export to PDF',
    stylingMode: 'text',
    onClick: exportButtonClick,
  };

  const formatBoxSelectionChanged = (e) => {
    setFormatBoxValue(e.value);
  };

  const exportModeBoxSelectionChanged = (e) => {
    setExportModeBoxValue(e.value);
  };

  const dateRangeBoxSelectionChanged = (e) => {
    setDateRangeBoxValue(e.value);
    setCustomRangeDisabled(e.value !== 'Custom');
  };

  const onLandscapeCheckBoxChanged = (e) => {
    setLandscapeCheckBoxValue(e.value);
  };

  const startTaskIndexValueChanged = (e) => {
    setStartTaskIndex(e.value);
  };

  const endTaskIndexValueChanged = (e) => {
    setEndTaskIndex(e.value);
  };

  const startDateValueChanged = (e) => {
    setStartDate(e.value);
  };

  const endDateValueChanged = (e) => {
    setEndDate(e.value);
  };

  const exportButtonClick = () => {
    const gantt = ganttRef.current.instance;
    const format = formatBoxValue.toLowerCase();
    const isLandscape = landscapeCheckBoxValue;
    const exportMode = exportModeBoxValue === 'Tree List' ? 'treeList' : exportModeBoxValue.toLowerCase();
    const dataRangeMode = dateRangeBoxValue.toLowerCase();
    let dataRange;
    if (dataRangeMode === 'custom') {
      dataRange = {
        startIndex: startTaskIndex,
        endIndex: endTaskIndex,
        startDate: startDate,
        endDate: endDate,
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
  };

  return (
    <>
      <Gantt
        ref={ganttRef}
        taskListWidth={500}
        scaleType="weeks"
        height={700}
        rootValue={-1}
      >
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
          <Item widget="dxButton" options={exportButtonOptions} />
        </Toolbar>

        <Column dataField="title" caption="Subject" width={300} />
        <Column dataField="start" caption="Start Date" />
        <Column dataField="end" caption="End Date" />

        <Editing enabled={true} />
      </Gantt>
      <div className="options">
        <div className="column">
          <div className="caption">Export Options</div>
          <div className="option">
            <div className="label">Document format:</div>
            {' '}
            <div className="value">
              <SelectBox items={formats}
                value={formatBoxValue}
                inputAttr={documentFormatLabel}
                onValueChanged={formatBoxSelectionChanged} />
            </div>
          </div>
          <div className="option">
            <div className="label">Landscape orientation:</div>
            {' '}
            <div className="value">
              <CheckBox
                value={landscapeCheckBoxValue}
                onValueChanged={onLandscapeCheckBoxChanged} />
            </div>
          </div>
          <div className="option">
            <div className="label">Export mode:</div>
            {' '}
            <div className="value">
              <SelectBox items={exportModes}
                value={exportModeBoxValue}
                inputAttr={exportModeLabel}
                onValueChanged={exportModeBoxSelectionChanged} />
            </div>
          </div>
          <div className="option">
            <div className="label">Date range:</div>
            {' '}
            <div className="value">
              <SelectBox items={dateRanges}
                value={dateRangeBoxValue}
                inputAttr={dateRangeLabel}
                onValueChanged={dateRangeBoxSelectionChanged} />
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
              <NumberBox
                value={startTaskIndex}
                min={0}
                max={endTaskIndex}
                disabled={customRangeDisabled}
                showSpinButtons={true}
                inputAttr={startTaskIndexLabel}
                onValueChanged={startTaskIndexValueChanged}
              />
            </div>
          </div>
          <div className="option">
            <div className="label">End task (index):</div>
            {' '}
            <div className="value">
              <NumberBox
                value={endTaskIndex}
                min={startTaskIndex}
                max={tasks.length - 1}
                disabled={customRangeDisabled}
                showSpinButtons={true}
                inputAttr={endTaskIndexLabel}
                onValueChanged={endTaskIndexValueChanged}
              />
            </div>
          </div>
          <div className="option">
            <div className="label">Start date:</div>
            {' '}
            <div className="value">
              <DateBox
                value={startDate}
                max={endDate}
                inputAttr={startDateLabel}
                disabled={customRangeDisabled}
                type="date"
                onValueChanged={startDateValueChanged}
              />
            </div>
          </div>
          <div className="option">
            <div className="label">End date:</div>
            {' '}
            <div className="value">
              <DateBox
                value={endDate}
                min={startDate}
                inputAttr={endDateLabel}
                disabled={customRangeDisabled}
                type="date"
                onValueChanged={endDateValueChanged}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;