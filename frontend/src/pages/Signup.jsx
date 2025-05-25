import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Signup failed. Please check your inputs.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <Heading label="Sign up" />
        <SubHeading label="Enter your information to create an account" />

        <div className="mt-4 space-y-4">
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            label="First Name"
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            label="Last Name"
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="you@example.com"
            label="Email"
            type="email"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            label="Password"
            type="password"
          />
        </div>

        <div className="pt-6">
          <Button onClick={handleSignup} label="Sign up" />
        </div>

        <div className="pt-4 text-center">
          <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin" />
        </div>
      </div>
    </div>
  );

  
};
