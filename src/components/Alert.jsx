import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCasse();
    return lower.charAt(0).tuUpdateCase().lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`}>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
