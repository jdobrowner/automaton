import React, { Component } from 'react';
import GridContainer from './grid-container';
import SidebarContainer from './sidebar';
import Explanation from './explanation';

export default () => {
  return (
    <div className="app">
      <SidebarContainer />
      <GridContainer />
      <Explanation />
    </div>
  )
}
