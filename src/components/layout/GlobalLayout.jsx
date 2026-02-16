import Navbar from "./Navbar";

function GlobalLayout({ children }) {

  const styles = {
    wrapper: {
      position: "relative",
      width: "100%",
      minHeight: "100vh"
    }
  };

  return (

    <div style={styles.wrapper}>

      <Navbar />

      {children}

    </div>

  );
}

export default GlobalLayout;
