
const leftlines = document.querySelectorAll(".leftline span")
console.log(leftlines)

const lineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.parentNode.classList.add("show");
      // lineObserver.unobserve(entry.target);
    }else{
      entry.target.parentNode.classList.remove("show");
    }
  });
}, {
  root: null,

  // 👇 여기서 마진값 조절
  // 위에서 100px 전에 감지
  rootMargin: "0px 0px -100px 0px",

  // 화면에 30% 보이면 발동
  // threshold: 0.3
});

leftlines.forEach((line, index) => {
  console.log("intersecting!")

  // 👇 두 번째 인수 index 활용
  // line.style.transitionDelay = index * 0.2 + "s";

  lineObserver.observe(line);
});