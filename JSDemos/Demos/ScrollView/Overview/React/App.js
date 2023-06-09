import React, { useState, useRef } from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import service from './data.js';

const showScrollBarModeLabel = { 'aria-label': 'Show Scrollbar Mode' };

const App = () => {
  const [showScrollBarMode, setShowScrollBarMode] = useState('onScroll');
  const [pullDown, setPullDown] = useState(false);
  const [scrollByContent, setScrollByContent] = useState(true);
  const [scrollByThumb, setScrollByThumb] = useState(true);
  const [content, setContent] = useState(service.getContent());
  const scrollViewRef = useRef(null);

  const pullDownValueChanged = (args) => {
    setPullDown(args.value);
  };

  const reachBottomValueChanged = (args) => {
    scrollViewRef.current.option('onReachBottom', args.value ? updateBottomContent : null);
  };

  const scrollbarModelValueChanged = (args) => {
    setShowScrollBarMode(args.value);
  };

  const scrollByContentValueChanged = (args) => {
    setScrollByContent(args.value);
  };

  const scrollByThumbValueChanged = (args) => {
    setScrollByThumb(args.value);
  };

  const updateTopContent = (args) => {
    updateContent(args, 'PullDown');
  };

  const updateBottomContent = (args) => {
    updateContent(args, 'ReachBottom');
  };

  const updateContent = (args, eventName) => {
    const updateContentText = `\n Content has been updated on the ${eventName} event.\n\n`;
    if (this.updateContentTimer) { clearTimeout(this.updateContentTimer); }
    this.updateContentTimer = setTimeout(() => {
      setContent(eventName === 'PullDown' ? updateContentText + content : content + updateContentText);
      args.component.release();
    }, 500);
  };

  return (
    <div id="scrollview-demo">
      <ScrollView id="scrollview" ref={scrollViewRef}
        reachBottomText="Updating..."
        scrollByContent={scrollByContent}
        bounceEnabled={pullDown}
        onReachBottom={updateBottomContent}
        onPullDown={updateTopContent}
        showScrollbar={showScrollBarMode}
        scrollByThumb={scrollByThumb}>
        <div className="text-content">
          {content}
        </div>
      </ScrollView>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Show scrollbar: </span>
          <SelectBox
            items={showScrollbarModes}
            valueExpr="value"
            inputAttr={showScrollBarModeLabel}
            displayExpr="text"
            value={showScrollBarMode}
            onValueChanged={scrollbarModelValueChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Update content on the ReachBottom event"
            defaultValue={true}
            onValueChanged={reachBottomValueChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Update content on the PullDown event"
            value={pullDown}
            onValueChanged={pullDownValueChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Scroll by content"
            value={scrollByContent}
            onValueChanged={scrollByContentValueChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Scroll by thumb"
            value={scrollByThumb}
            onValueChanged={scrollByThumbValueChanged}
          />
        </div>
      </div>
    </div>
  );
};

const showScrollbarModes = [{
  text: 'On Scroll',
  value: 'onScroll',
}, {
  text: 'On Hover',
  value: 'onHover',
}, {
  text: 'Always',
  value: 'always',
}, {
  text: 'Never',
  value: 'never',
}];

export default App;