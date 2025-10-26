(function() {
  "use strict";

  const buttonTempl = document.createElement("button");
  buttonTempl.classList.add("highlight-copy");
  buttonTempl.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16">\
<path d="M 2.9316406,1.25 C 2.2898968,1.25 1.75,1.7898967 1.75,2.4316406 V 11.068359 C 1.75,11.710103 2.2898968,12.25 2.9316406,12.25 H 3.75 v -1.5 h -0.5 v -8 h 7 v 0.5 h 1.5 V 2.4316406 C 11.75,1.7898967 11.210103,1.25 10.568359,1.25 Z m 2.5,2.5 C 4.7898961,3.75 4.25,4.2898961 4.25,4.9316406 V 13.568359 C 4.25,14.210105 4.7898961,14.75 5.4316406,14.75 H 13.068359 C 13.710105,14.75 14.25,14.210105 14.25,13.568359 V 4.9316406 C 14.25,4.2898961 13.710105,3.75 13.068359,3.75 Z M 5.75,5.25 h 7 v 8 h -7 z" />\
</svg>`;

  for (const element of document.querySelectorAll(".highlight")) {
    const button = buttonTempl.cloneNode(true);
    button.addEventListener("click", () => {
      let content = "";
      for (const line of element.querySelectorAll(".cl")) {
        content += line.textContent;
      }
      navigator.clipboard.writeText(content);
    });
    element.appendChild(button);
  }
}());
