import React, { useState } from 'react';

const SignUp = () => {
  const [adminName, setAdminName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Perform sign-up logic with the gathered information
    // For now, let's assume the sign-up is successful
    setIsSignUpSuccessful(true);
  };

  if (isSignUpSuccessful) {
    return (
      <div className="small-container">
        <h1>Sign Up Successful!</h1>
        <p>Thank you for signing up.</p>
      </div>
    );
  }

  return (
    <div className="small-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="adminName">Admin Name</label>
        <input
          id="adminName"
          type="text"
          name="adminName"
          value={adminName}
          onChange={e => setAdminName(e.target.value)}
        />
        <label htmlFor="employeeId">Employee ID</label>
        <input
          id="employeeId"
          type="text"
          name="employeeId"
          value={employeeId}
          onChange={e => setEmployeeId(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        ></textarea>
        <input style={{ marginTop: '12px' }} type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;