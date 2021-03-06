import React from 'react';
import hoist from 'hoist-non-react-statics';
import TabPanel from '../../../../components/TabPanel';

function TabPanelWrapper(props) {
  return <TabPanel {...props} />;
}

export default hoist(TabPanelWrapper, TabPanel);
