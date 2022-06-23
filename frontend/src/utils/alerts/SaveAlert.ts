import Swal from "sweetalert2";

const showSaveDialog = (accept: () => void, reject: () => void, consumo: string, valor: string) => {
  Swal.fire({
    title: 'Deseja salvar os dados de consumo ?',
    icon: 'info',
    html:`Consumo: ${consumo} <br> Valor: ${valor}`,
    showCancelButton: false,
    showDenyButton: true,
    confirmButtonText: 'Salvar',
    confirmButtonColor: '#26AADD',
    denyButtonText: 'Cancelar',
    denyButtonColor: '#f44336',
  }).then((result) => {
    if (result.isConfirmed) {
      accept();
    } else if (result.isDenied) {
      reject();
    }
  })
}
      
export default showSaveDialog;
