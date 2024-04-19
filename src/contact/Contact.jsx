import { useState, useEffect } from "react";
import "../styles/header.css";

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:3000/cards");
    const jsonData = await response.json();
    setData(jsonData);
  }

  return (
    <>
      <main className="main-container">
        <div className="container">
          {data.map((item) => (
            <div key={item.id} className="iamge-container">
              <img className="image" src={item.image} alt="personal-image" />
              <div className="information-container">
                <h1 className="fullname">{item.fullname}</h1>
                <h3 className="gender">{item.Gender}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Contact;
