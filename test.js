const allElementId = {
  //Triangle
  triangleBase: "triangleBase",
  triangleHeight: "triangleHeight",
  triangleBaseInput: "triangleBaseInput",
  triangleHeightInput: "triangleHeightInput",

  //Rectangle
  rectangleWeight: "rectangleWeight",
  rectangleLength: "rectangleLength",
  rectangleWeightInput: "rectangleWeightInput",
  rectangleHeightInput: "rectangleHeightInput",

  //Parallelogram
  parallelogramBase: "parallelogramBase",
  parallelogramHeight: "parallelogramHeight",
  parallelogramBaseInput: "parallelogramBaseInput",
  parallelogramHeightInput: "parallelogramHeightInput",

  //Rhombus
  rhombusBase: "rhombusBase",
  rhombusHeight: "rhombusHeight",
  rhombusInputD1: "rhombusInputD1",
  rhombusInputD2: "rhombusInputD2",

  //Pentagon
  pentagonP: "pentagonP",
  pentagonB: "pentagonB",
  pentagonInputP: "pentagonInputP",
  pentagonInputB: "pentagonInputB",

  //Ellipse
  ellipseA: "ellipseA",
  ellipseB: "ellipseB",
  ellipseInputA: "ellipseInputA",
  ellipseInputB: "ellipseInputB",
};

const buttons = {
  triangleButton: "triangleButton",
  rectangleButton: "rectangleButton",
  parallelogramBtn: "parallelogramBtn",
  rhombusButton: "rhombusButton",
  pentagonButton: "pentagonButton",
  ellipseButton: "ellipseButton",
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  console.log(button);
}

const questionCard = [
  {
    name: "Triangle",
    image: "./images/triangle.png",
    base: "b",
    height: "h",
  },
];
