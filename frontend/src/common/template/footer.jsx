import React from "react";

export default (props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <strong>Copyright &copy; {year}</strong>
    </footer>
  );
};
