import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import TabPanel from 'devextreme-react/tab-panel';
import TabPanelItem from './TabPanelItem.js';

import {
  tabsPositionsSelectBoxLabel,
  tabsPositions,
  stylingModesSelectBoxLabel,
  stylingModes,
  iconPositionsSelectBoxLabel,
  iconPositions,
  navButtonsCheckBoxLabel,
  dataSource,
} from './data.js';

const App = () => {
  const [tabsPosition, setTabsPosition] = React.useState(tabsPositions[0]);
  const [stylingMode, setStylingMode] = React.useState(stylingModes[0]);
  const [iconPosition, setIconPosition] = React.useState(iconPositions[0]);
  const [showNavButtons, setShowNavButtons] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onTabsPositionChanged = React.useCallback((args) => {
    setTabsPosition(args.value);
  }, [setTabsPosition]);

  const onStylingModeChanged = React.useCallback((args) => {
    setStylingMode(args.value);
  }, [setStylingMode]);

  const onIconPositionChanged = React.useCallback((args) => {
    setIconPosition(args.value);
  }, [setIconPosition]);

  const onShowNavButtonsChanged = React.useCallback((args) => {
    setShowNavButtons(args.value);
  }, [setShowNavButtons]);

  const onSelectionChanged = React.useCallback((args) => {
    if (args.name === 'selectedIndex') {
      setSelectedIndex(args.value);
    }
  }, [setSelectedIndex]);

  return (
    <div className="tabpanel-demo">
      <div className="widget-container">
        <TabPanel
          width="100%"
          height={418}
          animationEnabled={true}
          swipeEnabled={true}
          dataSource={dataSource}
          selectedIndex={selectedIndex}
          tabsPosition={tabsPosition}
          stylingMode={stylingMode}
          iconPosition={iconPosition}
          showNavButtons={showNavButtons}
          itemComponent={TabPanelItem}
          onOptionChanged={onSelectionChanged}
        />
      </div>

      <div className="options">
        <div className="caption">Options</div>

        <div className="option">
          <div className="option-label">Tabs position</div>

          <SelectBox
            inputAttr={tabsPositionsSelectBoxLabel}
            items={tabsPositions}
            value={tabsPosition}
            onValueChanged={onTabsPositionChanged}
          />
        </div>

        <div className="option">
          <div className="option-label">Styling mode</div>

          <SelectBox
            inputAttr={stylingModesSelectBoxLabel}
            items={stylingModes}
            value={stylingMode}
            onValueChanged={onStylingModeChanged}
          />
        </div>

        <div className="option">
          <div className="option-label">Icon position</div>

          <SelectBox
            inputAttr={iconPositionsSelectBoxLabel}
            items={iconPositions}
            value={iconPosition}
            onValueChanged={onIconPositionChanged}
          />
        </div>

        <div className="option">
          <CheckBox
            text="Show navigation buttons"
            elementAttr={navButtonsCheckBoxLabel}
            value={showNavButtons}
            onValueChanged={onShowNavButtonsChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
