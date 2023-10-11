import React from 'react';
import TagBox, { TagBoxTypes } from 'devextreme-react/tag-box';
import { categories, categoryLabel } from './data.ts';

// eslint-disable-next-line no-unused-vars
export class EditorComponent extends React.Component<{ data: { value: any, setValue: (value: any) => void } }> {
  constructor(props) {
    super(props);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  render() {
    return (
      <TagBox
        inputAttr={categoryLabel}
        defaultValue={this.props.data.value}
        items={categories}
        onValueChanged={this.onValueChanged}
        width="auto"
      />
    );
  }

  onValueChanged(e: TagBoxTypes.ValueChangedEvent) {
    this.props.data.setValue(e.value && e.value.length ? e.value : null);
  }
}
