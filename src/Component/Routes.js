import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import UserDetRedux from "./UserDetRedux";


function PageRoutes({ data }) {

    return (
        <div>
            <Header data={data}></Header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutUs />} />
                <Route exact path="/user" element={<UserDetRedux />} />
                <Route exact path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default PageRoutes;