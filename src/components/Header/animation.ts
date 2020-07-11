

  import { TweenMax } from "gsap";
  const burger = document.querySelector('.burger');


export const openAnimation = () => {

  const oa1 = TweenMax;

  oa1.to("body", 0.5, {
      height: "100%",
      overflow: "hidden",
    });
    oa1.to(burger, 0.3, {
      gridGap: "4px",
      width: "100%",
      height: "100vh",
      opacity: 0.9,
      zIndex: 2,
    });
    oa1.to("body", 0.5, {
      height: "100%",
      overflow: "hidden",
    });
    oa1.to(".nav", {
      width: "100%",
      height: "100vh",
      left: "0%",
      opacity: 1,
      zIndex: 3,
    });
    oa1.to(".nav__wrapper", 0.5, {
      width: "100%",
      height: "100vh",
      opacity: 1,
      zIndex: 1,
    });
    oa1.to(".burger", 0, {
      zIndex: 2,
    });

    oa1.to(".burger", 0.5, {
      width: "100%",
      height: "100vh",
      background: '#000',
      opacity: 0.9,
    });

    oa1.to(".burger__line", 0.5, {
      background: "#fff",
    });
    oa1.to(".cross", 0.5, {
      height: "12vh",
      zIndex: 7,
    });
    oa1.to(".cross__line--1st", 0.3, {
      transform: "translate(-50%, -50%) rotate(45deg)",
    });
    oa1.to(".cross__line--2nd", 0.3, {
      transform: "translate(-50%, -50%) rotate(-45deg)",
    });
    oa1.from(".nav__list, .nav__logo", 0.8, {
      delay: 0.3,
      opacity: 0,
      y: 100,
    });
}

export const closeAnimation = () => {

  const ca1 = TweenMax;

  ca1.to(".nav", 0.2, {
    width: '0%',
    height: '0vh',
    gridAutoFlow: 'row',
    opacity: 0,
  });

  ca1.to(".nav__wrapper", 0.2, {
      height: '0vh',
      width: '0%',
      opacity: 0,
    });

  ca1.to(".burger", 0.2, {
    width: '50px',
    height: '100%',
    opacity: 0,
    });

  ca1.to(".cross", 0.2, {
        height: '8.1vh',

    });
  ca1.to(".cross__line--1st, .cross__line--2nd", 0.2, {
    transform: 'translate(-50%, -50%) rotate(0deg)',
    });

  ca1.to(".burger, .nav, .nav__wrapper", {
    zIndex: -1,
  });

  ca1.to("body", 0.5, {
    height: "auto",
    overflow: "auto",
  });
}
