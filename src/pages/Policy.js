import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Our Family"}>
    <div className="text-center mt-5">
      <h1>Our Family</h1>
    </div>
      <div className="row contactus ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/An_Oberoi_Hotel_employee_doing_Namaste%2C_New_Delhi.jpg/250px-An_Oberoi_Hotel_employee_doing_Namaste%2C_New_Delhi.jpg"
            alt="contactus"
            style={{ width: "20%", height: "300px" }}
          />
        </div>
    </Layout>
  );
};

export default Policy;