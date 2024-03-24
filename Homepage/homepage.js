function runAnimations() {
    document.querySelector("#id-111").addEventListener("click", func_111_1396);
  
    function func_111_1396(e) {
      e.stopPropagation();
  
      document.querySelector("#id-12").classList.add("animationClass-12");
      document.querySelector("#id-111").classList.add("animationClass-111");
      document.querySelector("#id-117").classList.add("animationClass-117");
      document.querySelector("#id-15").classList.add("animationClass-15");
      document
        .querySelector(".cultureconnect-1-48124-0")
        .classList.add("animationClass-110-110-0");
      document.querySelector("#id-110").classList.add("animationClass-110");
      document.querySelector("#id-1394").classList.add("animationClass-1394");
      document.querySelector("#id-986").classList.add("animationClass-986");
      document.querySelector("#id-985").classList.add("animationClass-985");
      document
        .querySelector("#id-111")
        .removeEventListener("click", func_111_1396);
    }
  }
  runAnimations();
  