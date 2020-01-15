import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";

const Layout = ({ children, location }) => {
  return (
    <div className="App">
      <Header location={location} />
      {children}
      <Footer />
    </div>
  );
};

export default withRouter(Layout);
