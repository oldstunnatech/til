import { DotLottie } from '@lottiefiles/dotlottie-web';


const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "<https://lottie.host/YOUR_ANIMATION_ID.lottie>", // replace with your .lottie or .json file URL
});


function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");

  const icon = document.getElementById("icon");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
}

{/* <script>
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
</script> */}