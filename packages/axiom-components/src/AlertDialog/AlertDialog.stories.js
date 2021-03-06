import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import AlertDialogHeader from "./AlertDialogHeader";
import AlertDialogBody from "./AlertDialogBody";
import Button from "../Button/Button";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
};

export function Default() {
  const [showDialog, setshowDialog] = useState(true);

  return (
    <div>
      <Button onClick={() => setshowDialog(true)}>Open Dialog</Button>

      <AlertDialog
        isOpen={showDialog}
        onRequestClose={() => setshowDialog(false)}
      >
        <AlertDialogHeader>Lorem ipsum dolor sit amet</AlertDialogHeader>

        <AlertDialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dignissim sollicitudin quam at lacinia. Quisque a dignissim ipsum.
          Nunc congue, nisi quis venenatis dignissim, nisl quam aliquet sem, vel
          consectetur purus sapien nec libero. Donec ullamcorper dictum tellus
          in mattis. Nunc vel est et felis ornare accumsan.
        </AlertDialogBody>
      </AlertDialog>
    </div>
  );
}
