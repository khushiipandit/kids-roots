import { useState } from "react";

function AuthPage() {

  const [isSignup, setIsSignup] = useState(true);

  const styles = {

    wrapper: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(120deg,#a6b8e9,#cbb7ea)"
    },

    card: {
      background: "white",
      padding: "40px",
      borderRadius: "20px",
      width: "400px"
    },

    input: {
      width: "100%",
      padding: "12px",
      marginTop: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc"
    },

    button: {
      marginTop: "20px",
      width: "100%",
      padding: "14px",
      background: "#6b6bd6",
      color: "white",
      border: "none",
      borderRadius: "10px"
    },

    toggle: {
      marginTop: "15px",
      cursor: "pointer",
      color: "#6b6bd6"
    }

  };

  return (

    <div style={styles.wrapper}>

      <div style={styles.card}>

        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

        {isSignup && <input placeholder="Full Name" style={styles.input}/>}

        <input placeholder="Email" style={styles.input}/>
        <input placeholder="Password" type="password" style={styles.input}/>

        <button style={styles.button}>
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        <p
          style={styles.toggle}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Already have account? Sign in" : "New here? Create account"}
        </p>

      </div>

    </div>
  );
}

export default AuthPage;
