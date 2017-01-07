import React from 'react';
import GridContainer from './grid-container';
import Sidebar from './sidebar';

export default () => {
  return (
    <div className="app">
      <Sidebar />
      <GridContainer />
    </div>
  )
}
