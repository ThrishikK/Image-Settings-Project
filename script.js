const imgElement = document.querySelector("#imgElement");
const borderRadLabel = document.querySelector("#borderRadLabel");
const borderRadInputEl = document.querySelector("#b-rad");
const opacityLabel = document.querySelector("#opacityLabel");
const opacityInput = document.querySelector("#opacityInput");
const hOffsetLabel = document.querySelector("#hOffsetLabel");
const hOffsetInput = document.querySelector("#h-offset");
const vOffsetLabel = document.querySelector("#vOffsetLabel");
const vOffsetInput = document.querySelector("#v-offset");
const blurRadLabel = document.querySelector("#blurRadLabel");
const blurRadInput = document.querySelector("#blur-radius");
const spreadRadLabel = document.querySelector("#spreadRadLabel");
const spreadRadInput = document.querySelector("#spread-radius");
const redLabel = document.querySelector("#redLabel");
const greenLabel = document.querySelector("#greenLabel");
const blueLabel = document.querySelector("#blueLabel");
const shadowOpacLabel = document.querySelector("#shadowOpacLabel");

const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");
const shadowOpacityInput = document.querySelector("#shadowOpacity");

const sepiaLabel = document.querySelector("#sepiaLabel");
const sepiaInput = document.querySelector("#sepia");
const contrastLabel = document.querySelector("#contrastLabel");
const contrastInput = document.querySelector("#contrast");
const clipPath = document.querySelector("#clip-path");

// BOX SHADOW
function boxShadowFormatter(array) {
  const result = array.join("px ") + "px";
  return result;
}

const boxShadowArray = [0, 0, 0, 0];

// RGB VALUE

function rgbaFormatter(array) {
  const result = "rgba(" + array.join(", ") + ")";
  return result;
}

const rgbaValues = [10, 10, 10, 10];

function finalShadowValue() {
  const value =
    boxShadowFormatter(boxShadowArray) + " " + rgbaFormatter(rgbaValues);
  return value;
}

const imgStylingsObject = {
  borderRadius: "",
  opacity: "1",
  boxShadow: finalShadowValue(),
  filter: "sepia(0%) contrast(100%)",
  clipPath: "",
};

// BORDER RADIUS CHANGES
borderRadInputEl.addEventListener("change", function (e) {
  const borderRadVal = e.target.value;
  borderRadLabel.textContent = borderRadVal + "px";
  imgStylingsObject.borderRadius = `${borderRadVal}px`;
  addStyles();
});

// OPACITY CHANGES
opacityInput.addEventListener("change", function (e) {
  const opacityValue = e.target.value;
  opacityLabel.textContent = opacityValue;
  imgStylingsObject.opacity = opacityValue;
  addStyles();
});

// HORIZONTAL OFFSET
hOffsetInput.addEventListener("change", function (e) {
  const hOffsetValue = e.target.value;
  hOffsetLabel.textContent = `Horizontal offset - ${hOffsetValue} px`;
  boxShadowArray[0] = hOffsetValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// VERTICAL OFFSET
vOffsetInput.addEventListener("change", function (e) {
  const vOffsetValue = e.target.value;
  vOffsetLabel.textContent = `Vertical offset - ${vOffsetValue} px`;

  boxShadowArray[1] = vOffsetValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// BLUR RADIUS
blurRadInput.addEventListener("change", function (e) {
  const blurRadValue = e.target.value;
  blurRadLabel.textContent = `Blur Radius - ${blurRadValue} px`;
  boxShadowArray[2] = blurRadValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// SPREAD RADIUS
spreadRadInput.addEventListener("change", function (e) {
  const spredRadValue = e.target.value;
  spreadRadLabel.textContent = `Spread Radius - ${spredRadValue} px`;
  boxShadowArray[3] = spredRadValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// RED VALUE
redInput.addEventListener("change", function (e) {
  const redValue = e.target.value;
  redLabel.textContent = `Red - ${redValue}`;
  rgbaValues[0] = redValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// GREEN VALUE
greenInput.addEventListener("change", function (e) {
  const greenValue = e.target.value;
  greenLabel.textContent = `Green - ${greenValue}`;

  rgbaValues[1] = greenValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// BLUE VALUE
blueInput.addEventListener("change", function (e) {
  const blueValue = e.target.value;
  blueLabel.textContent = `Blue - ${blueValue}`;

  rgbaValues[2] = blueValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

// SHADOW VALUE
shadowOpacityInput.addEventListener("change", function (e) {
  const shadowValue = e.target.value;
  shadowOpacLabel.textContent = `Opacity  - ${shadowValue}`;

  rgbaValues[3] = shadowValue;
  imgStylingsObject.boxShadow = finalShadowValue();
  addStyles();
});

function filterValue(array) {
  const result = `sepia(${array[0]}%) contrast(${array[1]}%)`;
  return result;
}

const filterArray = [0, 100];

// SEPAIA CHANGES
sepiaInput.addEventListener("change", function (e) {
  const sepiaVal = e.target.value;
  sepiaLabel.textContent = `${sepiaVal}%`;
  filterArray[0] = sepiaVal;
  imgStylingsObject.filter = filterValue(filterArray);
  addStyles();
});

// CONTRAST CHANGES
contrastInput.addEventListener("change", function (e) {
  const contrastVal = e.target.value;
  contrastLabel.textContent = `${contrastVal}%`;
  filterArray[1] = contrastVal;
  imgStylingsObject.filter = filterValue(filterArray);
  addStyles();
});

const clipPathObject = {
  none: "",
  ellipse: "ellipse(50% 30%)",
  hexagon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  "rounded rectangle": "inset(10% 20% round 10px 20px)",
};

// CLIP PATH CHANGES
clipPath.addEventListener("change", function (e) {
  const clipValue = e.target.value;
  imgStylingsObject.clipPath = clipPathObject[clipValue];
  addStyles();
});

// APPLYING STYLES
function addStyles() {
  console.log(imgStylingsObject);
  Object.assign(imgElement.style, imgStylingsObject);
}
