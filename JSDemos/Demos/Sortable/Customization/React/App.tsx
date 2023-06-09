import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import Sortable from 'devextreme-react/sortable';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import NumberBox from 'devextreme-react/number-box';
import {
  tasks, scrollSensitivityLabel, scrollSpeedLabel, dropFeedbackModeLabel,
  dragDirectionLabel, itemOrientationLabel,
} from './data.js';
import Item from './Item.js';
import DragItem from './DragItem.js';

const dropFeedbackModes = ['push', 'indicate'];
const itemOrientations = ['vertical', 'horizontal'];
const verticalDragDirections = ['both', 'vertical'];
const horizontalDragDirections = ['both', 'horizontal'];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      dropFeedbackMode: 'push',
      itemOrientation: 'vertical',
      dragDirection: 'both',
      scrollSpeed: 30,
      scrollSensitivity: 60,
      handle: '',
      dragComponent: null,
      cursorOffset: null,
    };

    this.onDragStart = this.onDragStart.bind(this);
    this.onReorder = this.onReorder.bind(this);
    this.onDropFeedbackModeChanged = this.onDropFeedbackModeChanged.bind(this);
    this.onItemOrientationChanged = this.onItemOrientationChanged.bind(this);
    this.onDragDirectionChanged = this.onDragDirectionChanged.bind(this);
    this.onScrollSpeedChanged = this.onScrollSpeedChanged.bind(this);
    this.onScrollSensitivityChanged = this.onScrollSensitivityChanged.bind(this);
    this.onHandleChanged = this.onHandleChanged.bind(this);
    this.onDragTemplateChanged = this.onDragTemplateChanged.bind(this);
  }

  render() {
    const {
      items,
      dropFeedbackMode,
      itemOrientation,
      dragDirection,
      scrollSpeed,
      scrollSensitivity,
      handle,
      dragComponent,
      cursorOffset,
    } = this.state;
    return (
      <div id="demo-container">
        <div className="widget-container">
          <ScrollView
            id="scroll"
            className={itemOrientation === 'horizontal' ? 'horizontal' : ''}
            direction={itemOrientation}
            showScrollbar="always"
          >
            <Sortable
              id="list"
              dropFeedbackMode={dropFeedbackMode}
              itemOrientation={itemOrientation}
              dragDirection={dragDirection}
              scrollSpeed={scrollSpeed}
              scrollSensitivity={scrollSensitivity}
              handle={handle}
              dragComponent={dragComponent}
              cursorOffset={cursorOffset}
              onDragStart={this.onDragStart}
              onReorder={this.onReorder}
            >
              {items.map((item: { Task_ID: any; Task_Subject: any; }) => (
                <Item
                  key={item.Task_ID}
                  text={item.Task_Subject}
                  handle={handle}
                />
              ))}
            </Sortable>
          </ScrollView>
        </div>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Drop Feedback Mode:</span>
            <SelectBox
              items={dropFeedbackModes}
              inputAttr={dropFeedbackModeLabel}
              value={dropFeedbackMode}
              onValueChanged={this.onDropFeedbackModeChanged}
            />
          </div>
          <div className="option">
            <span>Item Orientation:</span>
            <SelectBox
              items={itemOrientations}
              inputAttr={itemOrientationLabel}
              value={itemOrientation}
              onValueChanged={this.onItemOrientationChanged}
            />
          </div>
          <div className="option">
            <span>Drag Direction:</span>
            <SelectBox
              items={
                itemOrientation === 'vertical'
                  ? verticalDragDirections
                  : horizontalDragDirections
              }
              value={dragDirection}
              inputAttr={dragDirectionLabel}
              onValueChanged={this.onDragDirectionChanged}
            />
          </div>
          <div className="option">
            <span>Scroll Speed:</span>
            <NumberBox
              value={scrollSpeed}
              inputAttr={scrollSpeedLabel}
              onValueChanged={this.onScrollSpeedChanged}
            />
          </div>
          <div className="option">
            <span>Scroll Sensitivity:</span>
            <NumberBox
              value={scrollSensitivity}
              inputAttr={scrollSensitivityLabel}
              onValueChanged={this.onScrollSensitivityChanged}
            />
          </div>
          <div className="option">
            <CheckBox text="Use Handle" onValueChanged={this.onHandleChanged} />
          </div>
          <div className="option">
            <CheckBox
              text="Use Drag Template"
              onValueChanged={this.onDragTemplateChanged}
            />
          </div>
        </div>
      </div>
    );
  }

  onDragStart(e: { itemData: any; fromIndex: string | number; }) {
    e.itemData = this.state.items[e.fromIndex];
  }

  onReorder(e: { fromIndex: number; toIndex: any; itemData: any; }) {
    let { items } = this.state;

    items = [...items.slice(0, e.fromIndex), ...items.slice(e.fromIndex + 1)];
    items = [
      ...items.slice(0, e.toIndex),
      e.itemData,
      ...items.slice(e.toIndex),
    ];

    this.setState({
      items,
    });
  }

  onDropFeedbackModeChanged(e: { value: any; }) {
    this.setState({
      dropFeedbackMode: e.value,
    });
  }

  onItemOrientationChanged(e: { value: any; }) {
    this.setState({
      itemOrientation: e.value,
      dragDirection: 'both',
    });
  }

  onDragDirectionChanged(e: { value: any; }) {
    this.setState({
      dragDirection: e.value,
    });
  }

  onScrollSpeedChanged(e: { value: any; }) {
    this.setState({
      scrollSpeed: e.value,
    });
  }

  onScrollSensitivityChanged(e: { value: any; }) {
    this.setState({
      scrollSensitivity: e.value,
    });
  }

  onHandleChanged(e: { value: any; }) {
    this.setState({
      handle: e.value ? '.handle' : '',
    });
  }

  onDragTemplateChanged(e: { value: any; }) {
    this.setState({
      dragComponent: e.value ? DragItem : null,
      cursorOffset: e.value ? { x: 10, y: 20 } : null,
    });
  }
}

export default App;
