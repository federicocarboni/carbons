(function() {
  "use strict";

  function getSections() {
    const headings = new Map();
    const sections = new Map();
    const tocItems = document.querySelectorAll("#TableOfContents li a");
    for (const item of tocItems) {
      headings.set(document.getElementById(new URL(item.href).hash.slice(1)), item);
    }
    for (const [heading, tocItem] of headings) {
      let node = heading;
      sections.set(node, tocItem);
      while ((node = node.nextElementSibling) != null && !headings.has(node)) {
        sections.set(node, tocItem);
      }
    }
    return sections;
  }

  var sections = getSections();
  console.log(sections)
  var observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const item = sections.get(entry.target);
      if (entry.isIntersecting) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  }, {
    threshold: 0
  });
  for (const node of sections.keys()) {
    observer.observe(node);
  }
}());
