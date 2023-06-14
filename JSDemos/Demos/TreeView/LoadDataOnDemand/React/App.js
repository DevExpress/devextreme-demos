import React, { useEffect } from 'react';
import TreeView from 'devextreme-react/tree-view';
import 'whatwg-fetch';

const App = () => {
  const createChildren = (parent) => {
    const parentId = parent ? parent.itemData.id : '';

    return fetch(`https://js.devexpress.com/Demos/Mvc/api/TreeViewData?parentId=${parentId}`)
      .then((response) => response.json())
      .catch(() => { throw new Error('Data Loading Error'); });
  };

  useEffect(() => {
    createChildren();
  }, []);

  return (
    <React.Fragment>
      <TreeView
        id="simple-treeview"
        dataStructure="plain"
        rootValue=""
        height={500}
        expandNodesRecursive={false}
        createChildren={createChildren}
      />
    </React.Fragment>
  );
};

export default App;
