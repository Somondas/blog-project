"use client";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ErrorDialog = () => {
  useEffect(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="/">Go Back</a>',
    });
  }, []);

  return null;
};

export default ErrorDialog;
