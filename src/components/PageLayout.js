import React from 'react';
import Header from './SectionTitle';
import SideNav from './SideNav';


const PageLayout = ({ title, children }) => {
  return (
    <main className="container">
      <Header title={title} />
      {children}
      <SideNav />
    </main>
  );
};

export default PageLayout;