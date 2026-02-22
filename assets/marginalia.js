document.addEventListener("DOMContentLoaded", () => {
  const footnoteItems = document.querySelectorAll(".footnotes li[id]");
  let created = 0;

  footnoteItems.forEach((item) => {
    const id = item.getAttribute("id");
    if (!id) return;

    const ref = document.querySelector(`a[href="#${id}"]`);
    if (!ref) return;

    ref.classList.add("footnote-ref");

    const aside = document.createElement("aside");
    aside.className = "marginal-note";
    aside.setAttribute("data-footnote", id);

    aside.innerHTML = item.innerHTML;

    const backref = aside.querySelector(".footnote-backref");
    if (backref) backref.remove();

    const number = document.createElement("span");
    number.className = "marginal-note-number";
    number.textContent = ref.textContent;

    aside.insertBefore(number, aside.firstChild);

    const sup = ref.closest("sup");
    if (sup) {
      sup.insertAdjacentElement("afterend", aside);
    } else {
      ref.insertAdjacentElement("afterend", aside);
    }

    created += 1;
  });

  if (created > 0) {
    document.body.classList.add("has-marginalia");
  }
});
