import React from 'react';
import Breadcrumb from './Breadcrumb.js';

interface TreeMapBreadcrumbsProps {
className: string;
onItemClick: (node: any) => void;
treeInfo: any;
}

class TreeMapBreadcrumbs extends React.Component<TreeMapBreadcrumbsProps> {
  render() {
    const { treeInfo } = this.props;
    const lastIndex = treeInfo.length - 1;
    return (
      <div className={this.props.className}>
        {
          treeInfo.map((info: { text: any; }, index: number) => (
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
