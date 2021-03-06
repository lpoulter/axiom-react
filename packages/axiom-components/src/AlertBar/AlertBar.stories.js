import React, { useState } from "react";
import AlertBar from "./AlertBar";

export default {
  title: "Components/AlertBar",
  component: AlertBar,
};

export function Info() {
  return <AlertBar>Info AlertBar</AlertBar>;
}

export function Success() {
  return <AlertBar type="success">Success AlertBar</AlertBar>;
}

export function Error() {
  return <AlertBar type="error">Error AlertBar</AlertBar>;
}

export function Warning() {
  return <AlertBar type="warning">Warning AlertBar</AlertBar>;
}

export function Dismissible() {
  const [showAlert, setShowAlert] = useState(true);
  const hideAlert = () => setShowAlert(false);

  return (
    <React.Fragment>
      {showAlert && (
        <AlertBar onRemoveClick={hideAlert}>Info AlertBar</AlertBar>
      )}
    </React.Fragment>
  );
}
