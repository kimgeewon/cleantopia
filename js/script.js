// const wrap = document.querySelector(".bubble-wrap");
// const bubbleImg = "images/bubble.png"; 
// window.addEventListener("scroll", () => {
//   createBubble();
// });

// function createBubble() {
//   const bubble = document.createElement("img");
//   bubble.src = bubbleImg;
//   bubble.className = "bubble";

//   const size = Math.random() * 40 + 20;
//   const left = Math.random() * 100;

//   bubble.style.width = size + "px";
//   bubble.style.left = left + "%";
//   bubble.style.setProperty("--scale", Math.random() * 0.5 + 0.7);
//   bubble.style.animationDuration = Math.random() * 6 + 6 + "s";

//   wrap.appendChild(bubble);

//   setTimeout(() => {
//     bubble.remove();
//   }, 12000);
// }

const wrap = document.querySelector(".bubble-wrap");
const bubbleImg = "images/bubble.png";

window.addEventListener("scroll", () => {
  // [수정] 스크롤 시 10번 중 2번만 생성되도록 제한 (간격 넓힘)
  if (Math.random() > 0.2) return; 
  
  createBubble();
});

function createBubble() {
  const bubble = document.createElement("img");
  bubble.src = bubbleImg;
  bubble.className = "bubble";

  // [수정] 크기를 더 크게 변경 (기존 20~60px -> 변경 50~120px)
  // const size = Math.random() * 70 + 50; 
  const size = Math.random() * 60 + 40; 

  const left = Math.random() * 100;

  bubble.style.width = size + "px";
  bubble.style.left = left + "%";
  
  // --scale 값도 조금 더 크게 조정 가능
  bubble.style.setProperty("--scale", Math.random() * 0.5 + 1.0); 
  // bubble.style.animationDuration = Math.random() * 6 + 8 + "s";
  bubble.style.animationDuration = Math.random() * 2 + 3 + "s"; // 약간 더 천천히 올라가게

  wrap.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 14000); // 애니메이션 시간에 맞춰 제거 시간 조정
}




// window.addEventListener('scroll', function() {
//   const heroH1 = document.querySelector('.hero-center h1');
  
//   100px 이상 스크롤 되면 'scrolled' 클래스 추가
//   if (window.scrollY > 100) {
//     heroH1.classList.add('scrolled');
//   } else {
//     heroH1.classList.remove('scrolled');
//   }
// });

window.addEventListener('scroll', function() {
  const heroH1 = document.querySelector('.hero-center h1');
  let scrollPos = window.scrollY;
  
  // 스크롤 0~500px 사이에서 변화율 계산 (0에서 1사이)
  let progress = Math.min(scrollPos / 500, 1);
  
  // 크기 조절: 205px -> 100px
  let newSize = 205 - (105 * progress);
  // 색상 변경: RGB 값을 계산하여 실시간 보간 가능 (복잡할 시 위 클래스 방식 추천)
  
  heroH1.style.fontSize = newSize + 'px';
  
  if (progress > 0.5) {
    heroH1.style.color = '#007BFF';
  } else {
    heroH1.style.color = '#27292b';
  }

});



window.addEventListener('scroll', function() {
  const heroSub = document.querySelector('.hero-sub');
  const highlight = document.querySelector('.hero-sub .highlight');
  if (!heroSub) return;

  let scrollPos = window.scrollY;
  
  // h1과 동일한 변화율 계산 (0에서 500px 사이)
  let progress = Math.min(scrollPos / 500, 1);
  
  // [크기 조절] 24px에서 시작하여 18px까지 실시간 축소 (차이 6px)
  let newSize = 24 - (6 * progress);
  heroSub.style.fontSize = newSize + 'px';
  if (highlight) {
    highlight.style.fontSize = newSize + 'px';
  }
  
  // [색상 변경] progress가 0.5(스크롤 250px)를 넘으면 파란색으로 변경
  if (progress > 0.5) {
    heroSub.classList.add('scrolled');
  } else {
    heroSub.classList.remove('scrolled');
  }

});




// blue 섹션 p태그 나타남
document.addEventListener('DOMContentLoaded', () => {
  const blueInner = document.querySelector('.blue-inner');
  
  if (!blueInner) return; // blue-inner 요소가 없으면 실행 중단

  const firstChild = blueInner.querySelector('p:first-child');
  const lastChild = blueInner.querySelector('p:last-child');

  // Intersection Observer 생성
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 해당 요소가 뷰포트에 진입했을 때 (스크롤하여 보일 때)
      if (entry.isIntersecting) {
        // 애니메이션 클래스 추가
        if (firstChild) firstChild.classList.add('is-visible');
        if (lastChild) lastChild.classList.add('is-visible');
        
        // 애니메이션이 한 번 실행된 후에는 관찰 중단
        observer.unobserve(entry.target); 
      }
    });
  }, {
    root: null, // 뷰포트 기준
    threshold: 0.8 // 요소의 50%가 보일 때 트리거
  });

  // blue-inner 컨테이너 관찰 시작
  observer.observe(blueInner);
});

//trust
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.5 // 요소가 50% 정도 보였을 때 실행
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, observerOptions);

  // 대상 요소 관찰 시작
  const title = document.querySelector(".main-title");
  const text=document.querySelector(".brand-text");
  if (title) observer.observe(title);
  if (text) observer.observe(text);
});



// trust
const trustSection = document.querySelector('.trust');
const trust1 = document.querySelector('.trust-1 img');
const trust2 = document.querySelector('.trust-2 img');

let lastScroll = window.scrollY;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > lastScroll;
    lastScroll = currentScroll;

    if (entry.isIntersecting && scrollingDown) {

      // trust-1 먼저
      trust1.classList.add('active');

      // trust-2 살짝 겹쳐서 등장
      setTimeout(() => {
        trust2.classList.add('active');
      }, 350);

    } 
    else if (!entry.isIntersecting && !scrollingDown) {

      // 역스크롤 → 반대로 제거
      trust2.classList.remove('active');

      setTimeout(() => {
        trust1.classList.remove('active');
      }, 300);
    }

  });
}, {
  threshold: 0.4
});

observer.observe(trustSection);




// service
// const section = document.querySelector(".service");
// const title = section.querySelector("h3");
// const subtitle = section.querySelector("p");
// const icons = section.querySelectorAll(".icon-item");

// window.addEventListener("scroll", () => {
//   const rect = section.getBoundingClientRect();
//   const trigger = window.innerHeight * 0.7;

//   if (rect.top < trigger) {
//     // TITLE
//     title.style.opacity = 1;
//     title.style.transform = "translateY(0)";

//     // SUBTITLE
//     setTimeout(() => {
//       subtitle.style.opacity = 1;
//       subtitle.style.transform = "translateY(0)";
//     }, 300);

//     // ICONS
//   icons.forEach((el, i) => {
//       setTimeout(() => {
//         el.classList.add("show");
//       }, 600 + i * 150);
//     });
//   }
// });


const section = document.querySelector(".service");
const title = section.querySelector("h3");
const subtitle = section.querySelector("p");
const icons = section.querySelectorAll(".icon-item");

let triggered = false;

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const sectionTrigger = rect.height * 0.4;
  const visible = window.innerHeight - rect.top;

  if (!triggered && visible >= sectionTrigger) {
    triggered = true;

    title.style.opacity = 1;
    title.style.transform = "translateY(0)";

    setTimeout(() => {
      subtitle.style.opacity = 1;
      subtitle.style.transform = "translateY(0)";
    }, 300);

    icons.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("show");
      }, 600 + i * 150);
    });
  }
});



// 스크롤
// document.addEventListener("DOMContentLoaded", () => {

//   const cta = document.querySelector(".scroll-cta");
//   const footer = document.querySelector("footer");

//   if (!cta || !footer) return;

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         cta.style.opacity = "0";
//         cta.style.transform = "translateX(-50%) translateY(10px)";
//       } else {
//         cta.style.opacity = "1";
//         cta.style.transform = "translateX(-50%) translateY(0)";
//       }
//     },
//     {
//       threshold: 0.1
//     }
//   );

//   observer.observe(footer);

// });



// 선영님 js
document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});

const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal();

// fade-section 애니메이션 추가
const fadeSection = document.querySelector('.fade-section');

function checkFadeSection() {
  const windowHeight = window.innerHeight;
  const fadeSectionTop = fadeSection.getBoundingClientRect().top;
  const revealPoint = 150;

  if (fadeSectionTop < windowHeight - revealPoint) {
    fadeSection.classList.add('active');
  }
}

window.addEventListener('scroll', checkFadeSection);
checkFadeSection();


// content
document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector('.content');

  const observerOptions = {
    threshold: 0.4 // 섹션이 40% 이상 보일 때 애니메이션 시작
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 화면에 들어오면 active 클래스 추가
        entry.target.classList.add('active');
      } else {
        // 다시 스크롤해서 올라갔을 때 효과를 리셋하고 싶다면 아래 주석 제거
        // entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  observer.observe(content);
});