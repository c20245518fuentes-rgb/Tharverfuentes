import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".neu-card:not(#services)").forEach((card) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from("#services", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.fromTo(
  "#progressBar",
  { scaleX: 0 },
  {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.2,
    },
  },
);

ScrollTrigger.create({
  trigger: "#services",
  start: "top 80%",
  end: "top 30%",
  pin: true,
});

      // 1. Tween
      // gsap.from("#hero-name", { y: -100, opacity: 0, duration: 1, ease: "bounce.out" });
      // gsap.from("#hero-name", { x: -150, opacity: 0, duration: 1, ease: "power2.out" });
      // gsap.from("#hero-name", { x: -100, y: -60, rotation: -20, opacity: 0, duration: 1.2, ease: "back.out(2.5)" });

      // 2. Easing
      // gsap.from("h1", { y: -60,capacity:0 duration: 1 });
      //ease: "power2.out"});
      //ease: "back.out(2.5)"});
      //ease: "bounce.out"}); 
      //ease: "elastic.out"(1, 0.5)"});
      
      // 3. Stagger
      // gsap.from("nav a", { y: -20, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.5 });

      // 4. Timeline
const playIntro = () => {
  const intro = gsap.timeline({ defaults: { duration: 0.4, ease: "bounce.out" } });
  intro
    .from("nav a", { y: -60, duration: 0.35, stagger: 0.035 })
    .fromTo(
      "#hero-status, #hero-copy > *:not(#hero-name), #hero-art",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: "bounce.out",
        stagger: 0.05,
      },
    )
    .fromTo(
      "#hero-name",
      { x: -40, y: -100, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 0.75, ease: "bounce.out" },
      "<",
    )
    .fromTo(
      "#about .info-pill, #about h2, #projects h2, #services h2, #contact h2, #approach .info-pill, #approach h2",
      { y: -120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "bounce.out",
        stagger: 0.07,
      },
    );
  return intro;
};

const introTimeline = playIntro();
document.querySelector("#replay-intro")?.addEventListener("click", () => {
  introTimeline.restart();
  gsap
    .timeline({ defaults: { overwrite: "auto" } })
    .to("#replay-intro-icon", { rotation: "+=360", duration: 0.6, ease: "power2.inOut" }, 0)
    .to("#replay-intro-icon", { y: -4, scale: 1.2, duration: 0.16, ease: "power2.out" }, 0)
    .to("#replay-intro-icon", { y: 0, scale: 1, duration: 0.45, ease: "bounce.out" }, 0.16);
});

const button = document.querySelector("#toggle-dark");
button?.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  button.setAttribute("aria-pressed", String(isDark));
  gsap.to(button, {
    rotation: "+=360",
    duration: 0.6,
    ease: "power2.inOut",
    overwrite: "auto",
  });
});