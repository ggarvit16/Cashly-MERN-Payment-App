import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { useState, useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";


function App() {
  const { checkAuth, authUser, isAuthLoading} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isAuthLoading) {
    return <div>Loading...</div>; // or a spinner
  }
  
  console.log({ authUser });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authUser? <Dashboard/>:<Navigate to="/signin"/>}/>
        <Route path="/signin" element={!authUser ? <Signin /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/"/>} />
        <Route path="/dashboard" element={authUser? <Dashboard />: <Navigate to="/signin"/>} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
