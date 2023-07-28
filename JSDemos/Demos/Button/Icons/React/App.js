import React from 'react';
import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

const App = () => {
  const weatherClick = React.useCallback(() => {
    notify('The Weather button was clicked');
  });

  const doneClick = React.useCallback(() => {
    notify('The Done button was clicked');
  });

  const sendClick = React.useCallback(() => {
    notify('The Send button was clicked');
  });

  const plusClick = React.useCallback(() => {
    notify('The button was clicked');
  });

  const backClick = React.useCallback(() => {
    notify('The button was clicked');
  });

  return (
    <div>
      <div className="dx-fieldset">
        <div className="fields-container">
          <div className="dx-field">
            <div className="dx-field-label">Built-in icon</div>
            <div className="dx-field-value">
              <Button icon="check"
                type="success"
                text="Done"
                onClick={doneClick} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Image icon</div>
            <div className="dx-field-value">
              <Button icon="../../../../images/icons/weather.png"
                text="Weather"
                onClick={weatherClick} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">External icon</div>
            <div className="dx-field-value">
              <Button className="send"
                icon="fa fa-envelope-o"
                text="Send"
                onClick={sendClick} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Icon only</div>
            <div className="dx-field-value">
              <Button icon="plus"
                onClick={plusClick} />
              <Button icon="back"
                id="icon-back"
                onClick={backClick} />
            </div>
          </div>
        </div>
      </div>
      <div className="dx-fieldset">
        <div className="dx-fieldset-header">DISABLED</div>
        <div className="fields-container">
          <div className="dx-field">
            <div className="dx-field-value">
              <Button icon="check"
                type="success"
                text="Done"
                disabled={true} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-value">
              <Button icon="../../../../images/icons/weather.png"
                text="Weather"
                disabled={true} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-value">
              <Button className="send"
                icon="fa fa-envelope-o"
                text="Send"
                disabled={true} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-value">
              <Button icon="plus"
                disabled={true} />
              <Button icon="back"
                id="icon-disabled-back"
                disabled={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
