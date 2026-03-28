import Navbar from "./Navbar";

function GlobalLayout({ children }) {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <Navbar />
      {children}
    </div>
  );
}

export default GlobalLayout;
