"use client";
import { useState } from "react";
import Link from "next/link";
export default function Register(){
   const[formData, setFormData]=
   useState({
    fullName: "",
    email: "",
    universityId: "",
    password: "",
    confirmPassword: "",
    role: "Student",
    department: "",
   });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
     const validateForm = () => {
  const newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email";
  }
  if (!formData.universityId.trim()) {
  newErrors.universityId = "University ID is required";
} else if (!/^[0-9]+$/.test(formData.universityId)) {
  newErrors.universityId = "University ID must contain numbers only";
}

if (
  formData.role === "Student" &&
  !formData.department.trim()
) {
  newErrors.department = "Department is required";
}
if (!formData.password) {
  newErrors.password = "Password is required";
} else if (formData.password.length < 8) {
  newErrors.password = "Password must be at least 8 characters";
}

if (!formData.confirmPassword) {
  newErrors.confirmPassword = "Please confirm your password";
} else if (formData.password !== formData.confirmPassword) {
  newErrors.confirmPassword = "Passwords do not match";
}

  return newErrors;
};
    const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
if(Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSuccessMessage("");
    return;
  }

  setErrors({});
  

  console.log(formData);

  setSuccessMessage("Registration completed successfully!");

  
};
  
   return( 
    <div className="register-container">
      <h1 className="register-title">Create Account </h1>
      <p className="register-subtitle">Academic progress & Early Warning</p>
      {successMessage && (
  <p className="success-message">
    {successMessage}
  </p>
)}
      <form className="register-form" onSubmit={handleSubmit}> 



        <input 
                   className="register-input"
                    name="fullName"
                     type="text" 
              placeholder="Full Name"
              value={formData.fullName}
             onChange={(e) => {
       setFormData({
       ...formData,
       fullName: e.target.value
      });

       setErrors({
       ...errors,
       fullName: ""
       });
}}
              />
              {errors.fullName && (
  <p className="error-text">{errors.fullName}</p>
)}
        <input
                   className="register-input"
                    name="email"  
                 type="email"  
                placeholder="Email" 
                value={formData.email}
              onChange={(e) => {
     setFormData({
    ...formData,
    email: e.target.value
  });

      setErrors({
    ...errors,
    email: ""
  });
}}
                            />
                            {errors.email && (
  <p className="error-text">{errors.email}</p>
)}
        <input
                    className="register-input"
                    name="universityId"  
                         type="text" 
                          placeholder="University ID"
                          value={formData.universityId}
            onChange={(e) => {
  setFormData({
    ...formData,
    universityId: e.target.value
  });

  setErrors({
    ...errors,
    universityId: ""
  });
}}
                            />
                            {errors.universityId && (
  <p className="error-text">{errors.universityId}</p>
)}
                            <select
        className="register-select"
                    name="role"
        value={formData.role}
              onChange={(e) =>
                          setFormData({
                            ...formData,role: e.target.value,department:""}) 
                          }
                            >
          <option value="Student">Student</option>
          <option value="Advisor">Advisor</option>
            <option value="Instructor">Instructor</option>
         </select>
         {formData.role === "Student" && (
          <>
  <input
            className="register-input"
                    name="department"  
    type="text"
    placeholder="Department"
    value={formData.department}
    onChange={(e) => {
  setFormData({
    ...formData,
    department: e.target.value
  });

  setErrors({
    ...errors,
   department:""
  });
}}
       />
         {errors.department && (
  <p className="error-text">{errors.department}</p>
    )}
        </>
        )}
        <input 
        className="register-input"
                    name="password"  
                    type="password"
                     placeholder="Password"
            value={formData.password}
             onChange={(e) => {
  setFormData({
    ...formData,
    password: e.target.value
  });

  setErrors({
    ...errors,
    password: "",
    confirmPassword: ""
  });
}}
                            />
                            {errors.password && (
  <p className="error-text">{errors.password}</p>
)}
        <input  
        className="register-input"
                    name="confirmPassword"
        type="password" 
         placeholder="Confirm Password"
        value={formData.confirmPassword}
              onChange={(e) => {
  setFormData({
    ...formData,
    confirmPassword: e.target.value
  });

  setErrors({
    ...errors,
    confirmPassword: ""
  });
}}
                              />
                              {errors.confirmPassword && (
  <p className="error-text">{errors.confirmPassword}</p>
)}
       
          <button 
          className="register-button"
           type="submit">Create Account</button>
           <p className="login-link">Already have an account?</p>
           <Link href="/login">login here</Link>
      </form>

    </div>
   );
}
  
