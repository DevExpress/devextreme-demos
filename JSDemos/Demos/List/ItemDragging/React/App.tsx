import React from 'react';

import List, { ItemDragging } from 'devextreme-react/list';

import { plannedTasks, doingTasks } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();
    this.state = {
      plannedTasks,
      doingTasks,
    };
    this.onDragStart = this.onDragStart.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onReorder = this.onReorder.bind(this);
  }

  onDragStart(e) {
    e.itemData = this.state[e.fromData][e.fromIndex];
  }

  onAdd(e) {
    const tasks = this.state[e.toData];
    this.setState({
      [e.toData]: [...tasks.slice(0, e.toIndex), e.itemData, ...tasks.slice(e.toIndex)],
    });
  }

  onRemove(e) {
    const tasks = this.state[e.fromData];
    this.setState({
      [e.fromData]: [...tasks.slice(0, e.fromIndex), ...tasks.slice(e.fromIndex + 1)],
    });
  }

  onReorder(e) {
    this.onRemove(e);
    this.onAdd(e);
  }

  render() {
    return (
      <div className="widget-container">
        // @ts-expect-error TS(2786): 'List' cannot be used as a JSX component.
        <List
          dataSource={this.state.plannedTasks}
          keyExpr="id">
          // @ts-expect-error TS(2786): 'ItemDragging' cannot be used as a JSX component.
          <ItemDragging
            // @ts-expect-error TS(2322): Type '{ children: never[]; allowReordering: boolea... Remove this comment to see the full error message
            allowReordering={true}
            group="tasks"
            data="plannedTasks"
            onDragStart={this.onDragStart}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            onReorder={this.onReorder}>
          </ItemDragging>
        </List>
        // @ts-expect-error TS(2786): 'List' cannot be used as a JSX component.
        <List
          dataSource={this.state.doingTasks}
          keyExpr="id">
          // @ts-expect-error TS(2786): 'ItemDragging' cannot be used as a JSX component.
          <ItemDragging
            // @ts-expect-error TS(2322): Type '{ children: never[]; allowReordering: boolea... Remove this comment to see the full error message
            allowReordering={true}
            group="tasks"
            data="doingTasks"
            onDragStart={this.onDragStart}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            onReorder={this.onReorder}>
          </ItemDragging>
        </List>
      </div>
    );
  }
}

export default App;
