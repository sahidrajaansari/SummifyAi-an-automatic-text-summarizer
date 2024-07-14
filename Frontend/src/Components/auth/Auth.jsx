import React, { useEffect } from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/"); // Redirect to home if the user is signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#d6e3fe]">
      <h2 className="text-2xl font-bold mb-4 text-[#000000]">Sign In to SummifyAI</h2>
      <SignIn />
    </div>
  );
}

export default Auth;
