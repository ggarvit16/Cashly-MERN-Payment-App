import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account" />

        <div className="mt-6 space-y-4">
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="joedoe@gmail.com"
            label="Email"
            type="email"
            className="bg-white text-black placeholder-gray-400"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            label="Password"
            type="password"
            className="bg-white text-black placeholder-gray-400"
          />
        </div>

        <div className="mt-6">
          <Button
            onClick={handleSignin}
            label="Sign in"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md w-full"
          />
        </div>

        <div className="mt-4 text-center">
          <BottomWarning
            label="Don't have an account?"
            buttonText="Sign up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
};
