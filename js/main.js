AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
});

const headerInner = document.getElementById("header-inner");
const brand = document.getElementById("brand");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    headerInner.classList.remove("bg-transparent", "border-transparent");
    headerInner.classList.add("bg-white", "border-gray-200");

    brand.classList.remove("text-white");
    brand.classList.add("text-black");
  } else {
    headerInner.classList.add("bg-transparent", "border-transparent");
    headerInner.classList.remove("bg-white", "border-gray-200");

    brand.classList.add("text-white");
    brand.classList.remove("text-black");
  }
});

setTimeout(() => {
  const wrapper = document.getElementById("videoWrapper");

  wrapper.innerHTML = `
      <iframe
        class="w-full h-[260px] md:h-[380px]"
        src="https://www.youtube.com/embed/5ECv0XLOBaI?autoplay=1&mute=1&loop=1&playlist=5ECv0XLOBaI"
        title="Virtual Tour"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>

      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span class="bg-black/60 px-6 py-2 rounded-full text-white">
          Take the Virtual Tour
        </span>
      </div>
    `;
}, 5000);
