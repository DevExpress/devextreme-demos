import React from 'react';
import ColorBox from 'devextreme-react/color-box';

class App extends React.Component {
  handleColorChange: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = { color: '#f05b41' };
    this.handleColorChange = ({ value }) => this.setState({ color: value });
  }

  render() {
    return (
      <React.Fragment>
        <div className="form">
          <div className="dx-fieldset">
            <div className="dx-field">
              <div className="dx-field-label">Default mode</div>
              <div className="dx-field-value">
                // @ts-expect-error TS(2786): 'ColorBox' cannot be used as a JSX component.
                <ColorBox
                  defaultValue="#f05b41"
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">With alpha channel editing</div>
              <div className="dx-field-value">
                // @ts-expect-error TS(2786): 'ColorBox' cannot be used as a JSX component.
                <ColorBox
                  defaultValue="#f05b41"
                  editAlphaChannel={true}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Custom button captions</div>
              <div className="dx-field-value">
                // @ts-expect-error TS(2786): 'ColorBox' cannot be used as a JSX component.
                <ColorBox
                  defaultValue="#f05b41"
                  applyButtonText="Apply"
                  cancelButtonText="Decline"
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Read only</div>
              <div className="dx-field-value">
                // @ts-expect-error TS(2786): 'ColorBox' cannot be used as a JSX component.
                <ColorBox
                  defaultValue="#f05b41"
                  readOnly={true}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Disabled</div>
              <div className="dx-field-value">
                // @ts-expect-error TS(2786): 'ColorBox' cannot be used as a JSX component.
                <ColorBox
                  defaultValue="#f05b41"
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="dx-fieldset">
            <div className="dx-fieldset-header">Event Handling</div>
            <div className="hero-block">
              <div className="color-block" style={{ backgroundColor: this.state.color }}>
                <div className="superhero"></div>
              </div>
              <div className="hero-color-box">
                // @ts-expect-error TS(2786): 'ColorBox' cannot be used as a JSX component.
                <ColorBox
                  value={this.state.color}
                  applyValueMode="instantly"
                  onValueChanged={this.handleColorChange}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
