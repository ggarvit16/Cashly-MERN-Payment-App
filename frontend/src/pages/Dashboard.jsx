import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useAuthStore } from "../store/useAuthStore";
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState("");
    const handleBalance=async()=>{
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setBalance(parseInt(response.data.balance))
            
        } catch (error) {
            console.error("Error in fetching balance", error)
        }
    }

    useEffect(() => {
        handleBalance();
    }, [balance]);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
};
