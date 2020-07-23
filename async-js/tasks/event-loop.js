var clickCount = 0;
document.addEventListener("click", function () {
  clickCount++;
  console.log("clicked", clickCount);
});

const func = () => {
  if (clickCount !== 5) {
    console.log("wait");
    setTimeout(func, 0);
  } else console.log("5 clicks!");
};

setTimeout(func, 0);
