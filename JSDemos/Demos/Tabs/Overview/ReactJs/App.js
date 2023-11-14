import React from 'react';
import Tabs from 'devextreme-react/tabs';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import {
  orientations,
  tabsText,
  stylingModeLabel,
  iconPositionLabel,
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
  const [stylingMode, setStylingMode] = React.useState(stylingModes[1]);
  const [iconPosition, setIconPosition] = React.useState(iconPositions[0]);
  const [showNavigation, setShowNavigation] = React.useState(false);
  const [scrollContent, setScrollContent] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(false);
  const [width, setWidth] = React.useState('auto');
  const [rtlEnabled, setRtlEnabled] = React.useState(false);
  const [selectedIndex1, setSelectedIndex1] = React.useState(0);
  const [selectedIndex2, setSelectedIndex2] = React.useState(0);
  const [selectedIndex3, setSelectedIndex3] = React.useState(0);
  const [widgetWrapperClasses, setWidgetWrapperClasses] = React.useState(
    'widget-wrapper widget-wrapper-horizontal',
  );
  const toggleShouldRestrictWidth = React.useCallback(
    (shouldRestrictWidth) => {
      if (shouldRestrictWidth) {
        setWidgetWrapperClasses(`${widgetWrapperClasses} strict-width`);
      } else {
        const currentClassesArray = widgetWrapperClasses.split(' ');
        const newClassesString = currentClassesArray
          .filter((className) => className !== 'strict-width')
          .join(' ');
        setWidgetWrapperClasses(newClassesString);
      }
    },
    [widgetWrapperClasses, setWidgetWrapperClasses],
  );
  const stylingModeChanged = React.useCallback(
    (e) => {
      setStylingMode(e.value);
    },
    [setStylingMode],
  );
  const iconPositionChanged = React.useCallback(
    (e) => {
      setIconPosition(e.value);
    },
    [setIconPosition],
  );
  const orientationChanged = React.useCallback(
    (e) => {
      setWidgetWrapperClasses(`widget-wrapper widget-wrapper-${e.value}`);
      setOrientation(e.value);
    },
    [setOrientation, setWidgetWrapperClasses],
  );
  const showNavigationChanged = React.useCallback(
    (e) => {
      const shouldRestrictWidth = e.value || scrollContent;
      toggleShouldRestrictWidth(shouldRestrictWidth);
      setShowNavigation(e.value);
    },
    [scrollContent, setShowNavigation, toggleShouldRestrictWidth],
  );
  const scrollContentChanged = React.useCallback(
    (e) => {
      const shouldRestrictWidth = e.value || showNavigation;
      toggleShouldRestrictWidth(shouldRestrictWidth);
      setScrollContent(e.value);
    },
    [showNavigation, setScrollContent, toggleShouldRestrictWidth],
  );
  const fullWidthChanged = React.useCallback(
    (e) => {
      setFullWidth(e.value);
      setWidth(e.value ? '100%' : 'auto');
    },
    [setFullWidth, setWidth],
  );
  const rtlEnabledChanged = React.useCallback(
    (e) => {
      setRtlEnabled(e.value);
    },
    [setRtlEnabled],
  );
  const selectionChanged1 = React.useCallback(
    (args) => {
      if (args.name === 'selectedIndex') {
        setSelectedIndex1(args.value);
      }
    },
    [setSelectedIndex1],
  );
  const selectionChanged2 = React.useCallback(
    (args) => {
      if (args.name === 'selectedIndex') {
        setSelectedIndex2(args.value);
      }
    },
    [setSelectedIndex2],
  );
  const selectionChanged3 = React.useCallback(
    (args) => {
      if (args.name === 'selectedIndex') {
        setSelectedIndex3(args.value);
      }
    },
    [setSelectedIndex3],
  );
  return (
    <div id="tabs-demo">
      <div className="widget-container">
        <div className={widgetWrapperClasses}>
          <Tabs
            id="withText"
            width={width}
            selectedIndex={selectedIndex1}
            rtlEnabled={rtlEnabled}
            dataSource={tabsText}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
            onOptionChanged={selectionChanged1}
          />

          <Tabs
            id="withIconAndText"
            width={width}
            selectedIndex={selectedIndex2}
            rtlEnabled={rtlEnabled}
            dataSource={tabsIconAndText}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
            onOptionChanged={selectionChanged2}
          />

          <Tabs
            id="withIcon"
            width={width}
            selectedIndex={selectedIndex3}
            rtlEnabled={rtlEnabled}
            dataSource={tabsIcon}
            scrollByContent={scrollContent}
            showNavButtons={showNavigation}
            orientation={orientation}
            stylingMode={stylingMode}
            iconPosition={iconPosition}
            onOptionChanged={selectionChanged3}
          />
        </div>
      </div>

      <div className="options">
        <div className="caption">Options</div>

        <OptionWrapper caption="Orientation">
          <SelectBox
            items={orientations}
            inputAttr={orientationLabel}
            value={orientation}
            onValueChanged={orientationChanged}
          />
        </OptionWrapper>

        <OptionWrapper caption="Styling mode">
          <SelectBox
            items={stylingModes}
            inputAttr={stylingModeLabel}
            value={stylingMode}
            onValueChanged={stylingModeChanged}
          />
        </OptionWrapper>

        <OptionWrapper caption="Icon position">
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
            value={showNavigation}
            onValueChanged={showNavigationChanged}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Scroll content"
            value={scrollContent}
            onValueChanged={scrollContentChanged}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Full width"
            value={fullWidth}
            onValueChanged={fullWidthChanged}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Right-to-left mode"
            value={rtlEnabled}
            onValueChanged={rtlEnabledChanged}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
