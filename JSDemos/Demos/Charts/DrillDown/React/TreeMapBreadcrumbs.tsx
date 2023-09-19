
import React from 'react';
import Breadcrumb from './Breadcrumb.tsx';

interface TreeMapBreadcrumbsProps {
  className: string;
  onItemClick: (node: any) => void;
  treeInfo: any;
}

function TreeMapBreadcrumbs({ className, treeInfo, onItemClick }: TreeMapBreadcrumbsProps) {
  const lastIndex = treeInfo.length - 1;
  return (
    <div className={className}>
      {
        treeInfo.map((info: { text: any; }, index: number) => (
          <Breadcrumb
            key={info.text}
            onClick={onItemClick}
            info={info}
            isLast={index === lastIndex} />
        ))
      }
    </div>
  );
}

export default TreeMapBreadcrumbs;
