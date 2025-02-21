import React, { useState } from 'react';
import './FormExample.css';

export default function Loginform() {
  const [formData, setFormData] = useState({
    fname: '',
    sname: '',
    gmail: '',
    password: '',
    gender: '',
    question: '',
    answer: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="container ">
      <h2>Registration Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="form-group">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            placeholder="First name"
            name="fname"
            id="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sname">Second Name:</label>
          <input
            type="text"
            placeholder="Second name"
            name="sname"
            id="sname"
            value={formData.sname}
            onChange={handleChange}
            required
          /> </div>
          {/* <br /><br /> */}
          <div className='form-group'>
          <label htmlFor="gmail">Mail Address:</label>
          <input
            type="email"
            placeholder="Enter your mail here"
            name="gmail"
            id="gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
          /></div>
          
       

        {/* Password Section */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender Section */}
        <fieldset>
          <legend>Enter Your Gender:</legend>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              name="gender"
              id="other"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
              required
            />
            Other
          </label>
        </fieldset>

        {/* Security Question Section */}
        <div className="form-group">
          <label htmlFor="question">Security Question:</label>
          <select
            name="question"
            id="question"
            value={formData.question}
            onChange={handleChange}
            required
          >
            <option value="">--Select a question--</option>
            <option value="q1">What is your favourite color?</option>
            <option value="q2">What is your favourite food?</option>
            <option value="q3">What is your favourite animal?</option>
          </select>
        </div>

        {/* Security Answer Section */}
        <div className="form-group">
          <label htmlFor="answer">Security Answer:</label>
          <input
            type="text"
            placeholder="Answer here"
            name="answer"
            id="answer"
            value={formData.answer}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bio Section */}
        <div className="bio">
          <label htmlFor="bio">Your Bio:</label>
          <br />
          <textarea
            name="bio"
            id="bio"
            cols="40"
            rows="10"
            placeholder="Enter your bio here..."
            value={formData.bio}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
