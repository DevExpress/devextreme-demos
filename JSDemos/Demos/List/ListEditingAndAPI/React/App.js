import React from 'react';

import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import List from 'devextreme-react/list';

import { tasks } from './data.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allowDeletion: false,
      deleteType: 'toggle',
    };
    this.onAllowDeletionChange = this.onAllowDeletionChange.bind(this);
    this.onDeleteTypeChange = this.onDeleteTypeChange.bind(this);
  }
  onAllowDeletionChange(args) {
    this.setState({
      allowDeletion: args.value
    });
  }
  onDeleteTypeChange(args) {
    this.setState({
      deleteType: args.value
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="widget-container">
          <List
            dataSource={tasks}
            height={400}
            allowItemDeleting={this.state.allowDeletion}
            itemDeleteMode={this.state.deleteType}>
          </List>
        </div>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <CheckBox
              text="Allow deletion"
              value={this.state.allowDeletion}
              onValueChanged={this.onAllowDeletionChange}>
            </CheckBox>
          </div>
          <div className="option">
            <span>Item delete mode </span>
            <SelectBox
              disabled={!this.state.allowDeletion}
              items={['static', 'toggle', 'slideButton', 'slideItem', 'swipe', 'context']}
              value={this.state.deleteType}
              onValueChanged={this.onDeleteTypeChange}>
            </SelectBox>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
