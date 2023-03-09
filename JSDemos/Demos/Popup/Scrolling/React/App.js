import React from 'react';

import { Button } from 'devextreme-react';
import { Popup, ToolbarItem } from 'devextreme-react/popup';
import ScrollView from 'devextreme-react/scroll-view';

export default function App() {
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [popupScrollViewVisible, setPopupScrollViewVisible] = React.useState(false);

  const showScrollablePopup = React.useCallback(() => {
    setPopupVisible(true);
  }, [setPopupVisible]);

  const showScrollViewPopup = React.useCallback(() => {
    setPopupScrollViewVisible(true);
  }, [setPopupScrollViewVisible]);

  const hide = React.useCallback(() => {
    setPopupVisible(false);
    setPopupScrollViewVisible(false);
  }, [setPopupVisible, setPopupScrollViewVisible]);

  const printButtonOptions = React.useMemo(() => ({
    width: 220,
    text: 'Print',
    type: 'default',
    onClick: hide,
  }));

  return (
    <React.Fragment>
      <div className="demo-container">
        <div className="button-container">
          <Button
            text="Show Popup"
            type="default"
            width={300}
            onClick={showScrollablePopup}
          />
          <div className="label"> A native scrollable container </div>
        </div>

        <div className="button-container">
          <Button
            text="Show Popup"
            width={300}
            onClick={showScrollViewPopup}
          />
          <div className="label"> The ScrollView </div>
        </div>
      </div>

      <Popup
        width={500}
        height={400}
        visible={popupVisible}
        onHiding={hide}
        showTitle={true}
        hideOnOutsideClick={true}>
        <div>
          <div className="header">The Popup inner area is divided into three parts:</div>

          <div className="caption">Content area</div>
          To populate the Popup with content, use the <b>contentTemplate</b> property.

          <div className="caption">Top toolbar</div>
          <div>
            Set <b>showTitle</b> to <code>true</code> and use
            the <b>title</b> property to specify the caption.
            The Close button will appear if you do not disable
            the <b>showCloseButton</b> property.<br></br><br></br>
            Add <b>toolbarItems</b> markup and set each item&apos;s
            <b>toolbar</b> property to <code>top</code>.
            If you want to display an item in the overflow menu, as shown in this demo,
            set the item&apos;s <b>locateInMenu</b> property to <code>always</code>.
            You can also assign <code>never</code> to this property to keep the item
            outside the overflow menu, or you can assign <code>auto</code> to hide the item
            in the menu if the Popup&apos;s width decreases.
          </div>

          <div className="caption">Bottom toolbar</div>
          To enable the bottom toolbar, declare
          the <b>toolbarItems</b> array as shown in this demo.
          Set each item&apos;s <b>toolbar</b> property to <code>bottom</code>.
          To learn more about toolbar configuration, refer to the following tutorial: <a
            href="https://js.devexpress.com/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/"
            target="_blank" rel="noreferrer"
          >Getting Started with Toolbar</a>
        </div>
        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="center"
          options={printButtonOptions}
        />
      </Popup>

      <Popup
        width={500}
        height={400}
        visible={popupScrollViewVisible}
        onHiding={hide}
        showTitle={true}
        hideOnOutsideClick={true}>
        <ScrollView width='100%' height='100%'>
          <img src="../../../../images/Popup-Scrolling-Image.jpg" className="center" />
          <div id="textBlock">
              The <b>ScrollView</b> allows users to scroll its content vertically.
              To enable horizontal and vertical scrolling, set the <b>direction</b> option
              to <i>&quot;both&quot;</i>. Horizontal scrolling is available
              only if the content is wider than the <b>ScrollView</b>. Otherwise,
              the content adapts to the widget&apos;s width.<br /><br />The <b>ScrollView</b> uses
              native scrolling on most platforms, except
              desktops. To use it on all platforms, assign <b>true</b> to
              the <b>useNative</b> option. If you assign <b>false</b>, scrolling
              is simulated on all platforms.
          </div>
        </ScrollView>
        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="center"
          options={printButtonOptions}
        />
      </Popup>
    </React.Fragment>
  );
}

