import React from 'react';
import TagBox from 'devextreme-react/tag-box';
import { categories, categoryLabel } from './data.js';

export class EditorComponent extends React.Component {
  props: any;

  constructor(props) {
    super(props);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'TagBox' cannot be used as a JSX component.
      <TagBox
        inputAttr={categoryLabel}
        defaultValue={this.props.data.value}
        items={categories}
        onValueChanged={this.onValueChanged}
        width="auto"
      />
    );
  }

  onValueChanged(e) {
    this.props.data.setValue(e.value && e.value.length ? e.value : null);
  }
}
