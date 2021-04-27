import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import FirebaseContext from "../context/firebase";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return <p>This is Login page</p>;
}
