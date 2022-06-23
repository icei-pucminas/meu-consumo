import Swal from "sweetalert2";

interface Device {
  name: string;
  power: string;
}

const devices: Array<Device> = [
  { name: "Aspirador de pó", power: "600 watts" },
  { name: "Ar condicionado", power: "1400 watts" },
  { name: "Computador", power: "300 watts" },
  { name: "Video Game", power: "20 watts" },
  { name: "Microondas", power: "2000 watts" },
  { name: "Ventilador", power: "100 watts" },
  { name: "Geladeira", power: "500 watts" },
  { name: "Chuveiro", power: "5500 watts" },
  { name: "Fogão", power: "4500 watts" },
];

const returnDevice = () =>
  devices
    .map(
      (item) =>
        `
        <div style="position: relative">
        <span style="right: 50%; position: absolute;">${item.name}:</span> <span style="color: #CFA200;position: relative; left: 15%; display: inline-block;">${item.power}</span> <br>
        </div>`
    )
    .join("");

const showDevicesSuggestions = () => {
  Swal.fire({
    title: "<strong>Sugestões</strong>",
    html: `${returnDevice()}`,
    showCancelButton: false,
    confirmButtonColor: "#CFA200",
    focusConfirm: false,
    confirmButtonText: "Ok",
  });
};

export default showDevicesSuggestions;
