import { useNavigate } from "react-router-dom";

function TrackingCard() {

  const navigate = useNavigate();

  const styles = {

    wrapper: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      padding: "0 8%"
    },

    /* 🎬 VIDEO BACKGROUND */
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -2
    },

    /* 🌫️ OVERLAY */
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(15,25,60,0.75) 0%, rgba(15,25,60,0.55) 45%, rgba(15,25,60,0.1) 75%)",
      zIndex: -1
    },

    content: {
      maxWidth: "650px",
      color: "white"
    },

    heading: {
      fontSize: "clamp(42px,5vw,70px)",
      lineHeight: "1.1",
      fontWeight: "700"
    },

    highlight: {
      color: "#9fc5ff"
    },

    paragraph: {
      marginTop: "25px",
      fontSize: "18px",
      lineHeight: "1.6",
      opacity: 0.95
    },

    buttons: {
      marginTop: "35px",
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    },

    primaryBtn: {
      background: "#3aa67c",
      color: "white",
      border: "none",
      padding: "16px 28px",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer"
    },

    secondaryBtn: {
      border: "2px solid white",
      background: "transparent",
      padding: "16px 28px",
      borderRadius: "12px",
      color: "white",
      fontWeight: "600",
      cursor: "pointer"
    }

  };

  return (

    <section style={styles.wrapper}>

      {/* 🎬 VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline style={styles.video}>
        <source src="/card3.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div style={styles.overlay}></div>

      {/* CONTENT */}
      <div style={styles.content}>

        <h1 style={styles.heading}>
          Smart <span style={styles.highlight}>Growth Tracking</span><br/>
          & Health Monitoring
        </h1>

        <p style={styles.paragraph}>
          Track milestones, monitor development, manage vaccinations,
          and receive personalized health insights designed to support
          both newborns and growing children.
        </p>

        <div style={styles.buttons}>
          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/auth")}
          >
            Start Tracking
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => navigate("/auth")}
          >
            Learn More
          </button>
        </div>

      </div>

    </section>
  );
}

export default TrackingCard;
