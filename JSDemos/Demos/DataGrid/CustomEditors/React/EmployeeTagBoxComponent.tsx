import React from 'react';
import TagBox from 'devextreme-react/tag-box';

const nameLabel = { 'aria-label': 'Name' };

export default class EmployeeTagBoxComponent extends React.Component {
  props: any;

  constructor(props) {
    super(props);
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  onValueChanged(e) {
    this.props.data.setValue(e.value);
  }

  onSelectionChanged() {
    this.props.data.component.updateDimensions();
  }

  render() {
    // @ts-expect-error TS(2786): 'TagBox' cannot be used as a JSX component.
    return <TagBox
      dataSource={this.props.data.column.lookup.dataSource}
      defaultValue={this.props.data.value}
      valueExpr="ID"
      displayExpr="FullName"
      showSelectionControls={true}
      maxDisplayedTags={3}
      inputAttr={nameLabel}
      showMultiTagOnly={false}
      applyValueMode="useButtons"
      searchEnabled={true}
      onValueChanged={this.onValueChanged}
      onSelectionChanged={this.onSelectionChanged} />;
  }
}
