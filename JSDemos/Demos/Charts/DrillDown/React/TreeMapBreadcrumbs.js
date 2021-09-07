import React from 'react';

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { info } = this.props;
    return (
      <span>
        <span
          className={info.node ? 'link' : ''}
          onClick={this.onClick}
        >
          {info.text}
        </span>
        {this.props.isLast ? '' : ' > '}
      </span>
    );
  }

  onClick() {
    this.props.onClick(this.props.info.node);
  }
}

class TreeMapBreadcrumbs extends React.Component {
  render() {
    const { treeInfo } = this.props;
    const lastIndex = treeInfo.length - 1;
    return (
      <div className={this.props.className}>
        {
          treeInfo.map((info, index) => (
            <Breadcrumb key={info.text} onClick={this.props.onItemClick} info={info} isLast={index === lastIndex} />
          ))
        }
      </div>
    );
  }
}

export default TreeMapBreadcrumbs;
