export const CollapseNavbar = (Collapse) => {
  const $targetEl = document.getElementById("targetEl");
  const $triggerEl = document.getElementById("triggerEl");
  const $hamburgerMenuIcon = document.getElementById("hamburgerMenuIcon");
  const $closeIcon = document.getElementById("closeIcon");

  // optional options with default values and callback functions
  const options = {
    onCollapse: () => {
      $hamburgerMenuIcon.style.display = "block";
      $closeIcon.style.display = "none";
    },
    onExpand: () => {
      $hamburgerMenuIcon.style.display = "none";
      $closeIcon.style.display = "block";
    },
    onToggle: () => {},
  };

  const instanceOptions = {
    id: "targetEl",
    override: true,
  };

  const collapse = new Collapse(
    $targetEl,
    $triggerEl,
    options,
    instanceOptions
  );
};

export const HandleNavbarScroll = (setActiveSection) => {
  const navbar = document.getElementById("navbar");
  const navContent = document.getElementById("navContent");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar li a");

  if (window.scrollY > 0) {
    // Jika scroll ke bawah, tambahkan kelas bg-white/30 dan hapus bg-white
    navbar.classList.remove("bg-white");
    navContent.classList.remove("p-4");
    navbar.classList.add("bg-white/70");
    navContent.classList.add("px-4");
    navContent.classList.add("py-1");
  } else {
    // Jika scroll sudah di atas, kembalikan ke kelas bg-white
    navbar.classList.remove("bg-white/70");
    navContent.classList.remove("px-4");
    navContent.classList.remove("py-1");
    navbar.classList.add("bg-white");
    navContent.classList.add("p-4");
  }

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Tambahkan dan hapus kelas aktif
  navLinks.forEach((link) => {
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add(
        "!text-brown-7",
        "!hover:bg-brown-7",
        "!md:hover:text-brown-7",
        "!md:dark:hover:text-white",
        "!dark:hover:bg-brown-7"
      );
    } else {
      link.classList.remove(
        "!text-brown-7",
        "!hover:bg-brown-7",
        "!md:hover:text-brown-7",
        "!md:dark:hover:text-white",
        "!dark:hover:bg-brown-7"
      );
    }
  });
};

export const handleScrollToSection = (event) => {
  event.preventDefault(); // Mencegah perilaku default <a>
  const targetId = event.target.getAttribute("href").slice(1); // Ambil id dari href (tanpa #)
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Scroll dengan animasi
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const duration = 800; // Durasi animasi dalam milidetik

    const easeInOutQuad = (time, start, change, duration) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }
};
