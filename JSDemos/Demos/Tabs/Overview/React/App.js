import React from 'react';

import Tabs from 'devextreme-react/tabs';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';

import {
  orientations,
  tabsText,
  stylingModeLabel,
  iconPositionLabel,
  scrollContentLabel,
  fullWidthLabel,
  showNavigationLabel,
  tabsIconAndText,
  stylingModes,
  iconPositions,
  tabsIcon,
  orientationLabel,
} from './data.js';

function OptionWrapper(props) {
  return (
    <div className="option">
      {props.caption && <span>{props.caption}</span>}
      {props.children}
    </div>
  );
}

const App = () => {
  const [orientation, setOrientation] = React.useState(orientations[0]);
  const [stylingMode, setStylingMode] = React.useState(stylingModes[0]);
  const [iconPosition, setIconPosition] = React.useState(iconPositions[0]);
  const [showNavigation, setShowNavigation] = React.useState(false);
  const [scrollContent, setScrollContent] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(false);
  const [widgetWrapperClasses, setWidgetWrapperClasses] = React.useState('widget-container widget-container-horizontal');

  const stylingModeChanged = React.useCallback((e) => {
    setStylingMode(e.value);
  }, [setStylingMode]);

  const iconPositionChanged = React.useCallback((e) => {
    setIconPosition(e.value);
  }, [setIconPosition]);

  const orientationChanged = React.useCallback(
    (e) => {
      setWidgetWrapperClasses(`widget-wrapper widget-wrapper-${e.value}`);
      setOrientation(e.value);
    }, [setOrientation, setWidgetWrapperClasses],
  );

  const showNavigationChanged = React.useCallback((e) => {
    setShowNavigation(e.value);
  }, [setShowNavigation]);

  const scrollContentChanged = React.useCallback((e) => {
    setScrollContent(e.value);
  }, [setScrollContent]);

  const fullWidthChanged = React.useCallback((e) => {
    setFullWidth(e.value);
  }, [setFullWidth]);

  return (
    <div id="tabs-demo">
      <div className="widget-container">
        <div className={widgetWrapperClasses}>
          <Tabs
            id="withText"
            width="auto"
            dataSource={tabsText}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            selectedIndex={0}
          />
          <Tabs
            id="withIconAndText"
            width="auto"
            dataSource={tabsIconAndText}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
            selectedIndex={0}
          />
          <Tabs
            id="withIcon"
            width="auto"
            dataSource={tabsIcon}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
            selectedIndex={0}
          />
        </div>
      </div>

      <div className="options">
        <div className="caption">Options</div>

        <OptionWrapper caption='Orientation'>
          <SelectBox
            items={orientations}
            inputAttr={orientationLabel}
            value={orientation}
            onValueChanged={orientationChanged}
          />
        </OptionWrapper>

        <OptionWrapper caption='Styling mode'>
          <SelectBox
            items={stylingModes}
            inputAttr={stylingModeLabel}
            value={stylingMode}
            onValueChanged={stylingModeChanged}
          />
        </OptionWrapper>

        <OptionWrapper caption='Icon position'>
          <SelectBox
            items={iconPositions}
            inputAttr={iconPositionLabel}
            value={iconPosition}
            onValueChanged={iconPositionChanged}
          />
        </OptionWrapper>

        <div className="option">
          <CheckBox
            id="show-navigation-buttons"
            text="Show navigation buttons"
            inputAttr={showNavigationLabel}
            value={showNavigation}
            onValueChanged={showNavigationChanged}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Scroll content"
            inputAttr={scrollContentLabel}
            value={scrollContent}
            onValueChanged={scrollContentChanged}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Full width"
            inputAttr={fullWidthLabel}
            value={fullWidth}
            onValueChanged={fullWidthChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
