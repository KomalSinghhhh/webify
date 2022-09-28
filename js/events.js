function controlsManager(controlsName) {
  const controls = document.querySelectorAll(
    `.${controlsName}-controls > button`
  );
  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", function () {
      const current = document.querySelector(
        `.${controlsName}-controls > button.btn-success`
      );
      const content = this.innerText.toLowerCase();
      const newDoc = document.querySelector(`.${controlsName} #${content}`);
      newDoc.classList.remove("hide");
      newDoc.classList.add("show");

      const currentDoc = document.querySelector(
        `.${controlsName} #${current.innerText.toLowerCase()}`
      );
      currentDoc.classList.remove("show");
      currentDoc.classList.add("hide");

      current.classList.remove("btn-success");
      this.classList.add("btn-success");
    });
  }
}

controlsManager("goc");
controlsManager("webify");
controlsManager("shark");
controlsManager("terror");
controlsManager("tech-buzz");
controlsManager("chess");
