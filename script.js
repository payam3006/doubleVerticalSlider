const q = console.log;

let thisImg = 0;

const items = [
  { infoStyle: "top:-300vh", imgStyle: "" },
  { infoStyle: "top:-200vh", imgStyle: "top:-100vh" },
  { infoStyle: "top:-100vh", imgStyle: "top:-200vh" },
  { infoStyle: "top:0", imgStyle: "top:-300vh" },
];

const next = () => {
  if (thisImg == 3) {
    thisImg = -1;
  }
  thisImg += 1;
  document.getElementById("left").style = `${items[thisImg].infoStyle}`;
  document.getElementById("right").style = `${items[thisImg].imgStyle}`;
};

const previous = () => {
  if (thisImg == 0) {
    thisImg = 4;
  }
  thisImg -= 1;
  document.getElementById("left").style = `${items[thisImg].infoStyle}`;
  document.getElementById("right").style = `${items[thisImg].imgStyle}`;
};
