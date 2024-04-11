import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.tripsavvy.com/thmb/Cjsmx_lulaKttELOXOPq87QFD2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_DSC0657_Snapseed_Fotorc_Snapseeda-56a3c2355f9b58b7d0d39c07.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="p-2 text-white text-center conhead">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "EthniXx - BUY NOW",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb,gaming joystick,videogames,ecommerce",
  author: "Pranjal Sharma",
};

export default Contact;
