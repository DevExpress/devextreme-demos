import React from 'react';
import { ButtonGroup } from 'devextreme-react/button-group';
import notify from 'devextreme/ui/notify';
import { alignments, fontStyles } from './data.js';

const selectedItemKeys = ['left'];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="buttongroups-container">
          // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
          <ButtonGroup
            items={alignments}
            keyExpr="alignment"
            stylingMode="outlined"
            selectedItemKeys={selectedItemKeys}
            onItemClick={itemClick}
          />
          // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
          <ButtonGroup
            items={fontStyles}
            keyExpr="style"
            stylingMode="outlined"
            selectionMode="multiple"
            onItemClick={itemClick}
          />
        </div>
        <div className="buttongroups-container">
          // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
          <ButtonGroup
            items={alignments}
            keyExpr="alignment"
            stylingMode="text"
            selectedItemKeys={selectedItemKeys}
            onItemClick={itemClick}
          />
          // @ts-expect-error TS(2786): 'ButtonGroup' cannot be used as a JSX component.
          <ButtonGroup
            className="multiple-selection-styling-mode"
            items={fontStyles}
            keyExpr="style"
            stylingMode="text"
            selectionMode="multiple"
            onItemClick={itemClick}
          />
        </div>
      </div>
    );
  }
}

function itemClick(e) {
  notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
}

export default App;
