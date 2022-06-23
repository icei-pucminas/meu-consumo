import Swal from "sweetalert2";

const showErrorDialog = (title : string, content : string, confirmButtonText?: string, colorConfirmButton? : string) => {
  Swal.fire({
    title: title ? title : "Error !",
    text: content ? content : "Something went wrong",
    icon: "error",
    confirmButtonText: confirmButtonText ? confirmButtonText : "Ok !",
    confirmButtonColor: colorConfirmButton ? colorConfirmButton : "#f44336",
  });
};
      
export default showErrorDialog;
