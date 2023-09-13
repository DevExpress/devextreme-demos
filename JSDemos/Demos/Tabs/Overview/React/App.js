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

  const widgetContainerRef = React.useRef(null);

  const stylingModeChanged = React.useCallback((e) => {
    setStylingMode(e.value);
  }, [setStylingMode]);

  const iconPositionChanged = React.useCallback((e) => {
    setIconPosition(e.value);
  }, [setIconPosition]);

  const orientationChanged = React.useCallback((e) => {
    widgetContainerRef.current.style.flexDirection = e.value === 'horizontal' ? 'column' : 'row';
    setOrientation(e.value);
  }, [setOrientation]);

  const showNavigationChanged = React.useCallback((e) => {
    setShowNavigation(e.value);
  }, [setShowNavigation]);

  const scrollContentChanged = React.useCallback((e) => {
    setScrollContent(e.value);
  }, [setScrollContent]);

  return (
    <div id="tabs-demo">
      <div className="widget-container" ref={widgetContainerRef}>
        <div className="tabs-container">
          <Tabs id="withText"
            dataSource={tabsText}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
          />
        </div>
        <div className="tabs-container">
          <Tabs id="withIconAndText"
            dataSource={tabsIconAndText}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
          />
        </div>
        <div className="tabs-container">
          <Tabs id="withIcon"
            dataSource={tabsIcon}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
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
            inputAttr={showNavigationLabel}
            text="Show navigation buttons"
            value={showNavigation}
            onValueChanged={showNavigationChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            id="scroll-content"
            inputAttr={scrollContentLabel}
            text="Scroll content"
            value={scrollContent}
            onValueChanged={scrollContentChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
