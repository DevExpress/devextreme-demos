import React from 'react';

import List, { ItemDragging } from 'devextreme-react/list';

import { plannedTasks, doingTasks } from './data.js';

class App extends React.Component {
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

  onDragStart(e: { itemData: any; fromData: string | number; fromIndex: string | number; }) {
    e.itemData = this.state[e.fromData][e.fromIndex];
  }

  onAdd(e: { toData: string | number; toIndex: any; itemData: any; }) {
    const tasks = this.state[e.toData];
    this.setState({
      [e.toData]: [...tasks.slice(0, e.toIndex), e.itemData, ...tasks.slice(e.toIndex)],
    });
  }

  onRemove(e: { fromData: string | number; fromIndex: number; }) {
    const tasks = this.state[e.fromData];
    this.setState({
      [e.fromData]: [...tasks.slice(0, e.fromIndex), ...tasks.slice(e.fromIndex + 1)],
    });
  }

  onReorder(e: { fromData?: string | number; fromIndex?: number; toData?: string | number; toIndex?: any; itemData?: any; }) {
    this.onRemove(e);
    this.onAdd(e);
  }

  render() {
    return (
      <div className="widget-container">
        <List
          dataSource={this.state.plannedTasks}
          keyExpr="id">
          <ItemDragging
            allowReordering={true}
            group="tasks"
            data="plannedTasks"
            onDragStart={this.onDragStart}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            onReorder={this.onReorder}>
          </ItemDragging>
        </List>
        <List
          dataSource={this.state.doingTasks}
          keyExpr="id">
          <ItemDragging
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
