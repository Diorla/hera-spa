import React from "react";

const styles = {
  height: 120,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
export default function Footer() {
  return (
    <section id="bottom" style={styles}>
      <div>&copy; 2020 Hera spa. All Rights Reserved</div>
    </section>
  );
}
