import "./style.css";

const COLOR_PALETTE = {
  "#fbf8cc": "Lemon Chiffon",
  "#fde4cf": "Champagne Pink",
  "#ffcfd2": "Baby Pink",
  "#f1c0e8": "Pink Lavender",
  "#cfbaf0": "Mauve",
  "#a3c4f3": "Baby Blue Eyes",
  "#90dbf4": "Non Phot Blue",
  "#8eecf5": "Electric Blue",
  "#98f5e1": "Magic Mint",
  "#b9fbc0": "Granny Smith Apple",
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    colorName.innerText = COLOR_PALETTE[newColor];
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
