let flag = 0;

const buyMe = () => {
  const tl = gsap.timeline({ defaults: { duration: 2 } });

  tl.to(".christmas-card-container", {
    opacity: 0,
    scale: 0,
    y: "-60%",
    x: "45%",
    ease: "back",
  });
  //   tl.seek(1);
  //   tl();
  //   tl.pause();
  //   tl.resume();
  //   //   tl.seek(-1);
  //   tl.reverse();
};

const showItems = () => {
  console.log("Called!");
  const tl = gsap.timeline({ defaults: { duration: 2 } });

  tl.to(".christmas-card-container", {
    opacity: 1,
    scale: 1,
    y: "0%",
    x: "0%",
    ease: "power4",
  });
};
