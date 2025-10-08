function badtime() {
  const body = document.body;
  const children = Array.from(body.children); // Create a static array of children

  for (const child of children) {
    if (child.id !== "heart") {
      body.removeChild(child);
    }
  }

  document.querySelector("link").href = "badtime.css";

  setInterval(() => {
    document.getElementById("heart").remove();
    var ifr = document.createElement("iframe");
    ifr.src = "https://jcw87.github.io/c2-sans-fight/";
    ifr.width = "600";
    ifr.height = "800";
    document.body.appendChild(ifr);
  }, 3000);
}
