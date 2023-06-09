import React from 'react';
import Breadcrumb from './Breadcrumb.js';

class TreeMapBreadcrumbs extends React.Component {
  props: any;

  render() {
    const { treeInfo } = this.props;
    const lastIndex = treeInfo.length - 1;
    return (
      <div className={this.props.className}>
        {
          treeInfo.map((info, index) => (
            // @ts-expect-error TS(2786): 'Breadcrumb' cannot be used as a JSX component.
            <Breadcrumb
              key={info.text}
              onClick={this.props.onItemClick}
              info={info}
              isLast={index === lastIndex} />
          ))
        }
      </div>
    );
  }
}

export default TreeMapBreadcrumbs;
