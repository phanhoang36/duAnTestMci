import React from "react";
import Footer from "~/componates/Footer";
import Header from "~/componates/Header";

const MainLayout = ({ children }) => {

    return <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
};

export default MainLayout;