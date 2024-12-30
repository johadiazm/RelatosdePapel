import React from 'react';
import Filter from './Filter';

const Sidebar = ({ setSearchTerm }) => {
  return (
    <aside className='App_sidebar'>
      <Filter setSearchTerm={setSearchTerm} />
    </aside>
  );
};

export default Sidebar;