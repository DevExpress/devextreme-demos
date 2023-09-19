

interface BreadcrumbProps {
key: any;
onClick: any;
info: any;
isLast: boolean;
}import React from 'react';

function Breadcrumb(props: BreadcrumbProps) {
  const onClick = React.useCallback(() => {
    props.onClick(props.info.node);
  }, [props]);

  return (
    <span>
      <span
        className={props.info.node ? 'link' : ''}
        onClick={onClick}
      >
        {props.info.text}
      </span>
      {props.isLast ? '' : ' > '}
    </span>
  );
}

export default Breadcrumb;
