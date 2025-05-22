import React, { useState } from "react";
import "./FileUploader.css";

export default function FileUploader() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      file,
    });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        First Name:
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        Last Name:
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        Email:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          required
        />
        <br />
        Phone:
        <input
          type="tel"
          placeholder="123-456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          title="Please enter a valid phone number in the format 123-456-7890"
          required
        />
        <br />
        Address:
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />
        City:
        <select value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Select City</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
          <option>India</option>
          <option>London</option>
        </select>
        <br />
        Upload File:
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
