import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashin from "./components/Dashin";
import Login from "./screen/Login/Login";


import Hmpage from "./screen/Pages/Pharmacy/Pharmacy";

import NewSlider from "./screen/Pages/Slider/NewSlider";



import NewStaff from "./screen/Pages/NewStaff/Staff";
import Support from "./screen/Pages/Support/Support";







// import Paricipant from "./screen/Pages/Participant/Participant";


// import Form from "./screen/Pages/Form/Form";



import Users from "./screen/Pages/Users/Users";
import Dashboard from "./screen/Pages/Dashboard/Dashbord";
import Category from "./screen/Pages/Category/Category";











import Register from "./screen/Register/Register";


import City from "./screen/Pages/Cities/City";
import DashMain from "./screen/Pages/Dashboard/Dashbord";
import Orders from "./screen/Pages/Orders/Orders";
import Pharmacy from "./screen/Pages/Pharmacy/Pharmacy";
import Sms from "./screen/Pages/Sms/Sms";
import Faq from "./screen/Pages/Sms/Faq";
import Commission from "./screen/Pages/Commission/Commission";
import Payments from "./screen/Pages/Payments/Payments";
import Notifications from "./screen/Pages/Notifications/Notifications";
import Staff from "./screen/Pages/Staff/Staff";
import CreateSlider from "./screen/Pages/Slider/CreateSlider";
import EditSlider from "./screen/Pages/Slider/EditSlider";
import AddCity from "./screen/Pages/Cities/AddCity";
import EditCity from "./screen/Pages/Cities/EditCity";
import PreviewImages from "./screen/Pages/Pharmacy/PreviewImages";
import Swiper from "./components/Swiper";


function App() {




  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashin" element={<Dashin />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Dashin />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/images" element={<PreviewImages />} />
            <Route path="/users" element={<Users />} />
            <Route path="/commissions" element={<Commission />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/notifications" element={<Staff />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/newslider" element={<NewSlider />} />
            <Route path="/create_slider" element={<CreateSlider />} />
            <Route path="/edit_slider/:id" element={<EditSlider />} />
            <Route path="/staff" element={<NewStaff />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sms" element={<Sms />} />
            <Route path="/sms/:id" element={<Faq />} />
            <Route path="/city" element={<City />} />
            <Route path="/edit_city/:id" element={<EditCity />} />
            <Route path="/add_city" element={<AddCity />} />
            <Route path="/category" element={<Category />} />
            <Route path="/swiper" element={<Swiper />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;




