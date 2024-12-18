import { useState } from "react";
import "../styles/generalInfo.css";

const GeneralInfo = ({ fullName, companyTitle, contactNo, email }) => {
  const [image, setImage] = useState("/portrait.jpg"); // Default image

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update the state with the new image
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  return (
    <section className="GeneralInfo">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }} // Hide the file input
        id="imageUpload" // ID for the label to trigger
      />
      <label htmlFor="imageUpload">
        <img
          src={image}
          alt={fullName}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </label>
      <div>
        <h1>{fullName}</h1>
        <h2>{companyTitle}</h2>
      </div>
      <div className="reach">
        <div className="phoneNo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={40}
            height={40}
          >
            <title>phone</title>
            <path
              d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
              fill="#fff"
            />
          </svg>
          <p>{contactNo}</p>
        </div>
        <div className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={40}
            height={40}
          >
            <title>email-outline</title>
            <path
              d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
              fill="#fff"
            />
          </svg>
          <p>{email}</p>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
