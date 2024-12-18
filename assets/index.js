let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark__theme";
  } else {
    document.body.classList.remove("dark__theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_olyne3m",
      "template_f78yg69",
      event.target,
      "w5ie2FScyLVWpYuLP"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable, Please contact me directly on email @ ralphandymenz@gmail.com"
      );
    });
}

function toggleModal() {
  document.body.classList += " modal__open";
  console.log("toggleModal()");
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  return (document.body.classList += " modal__open");
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolint = isOdd ? -1 : 1;

    shapes[i].style.transform = `translate(${x * boolint}px  ,${
      y * boolint
    }px)`;
  }
}

function moveProject(event) {
  const project = document.querySelectorAll(".project__wrapper");
  const scaleFactor = 1;
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < project.length; ++i) {

    const isOdd = i % 2 !== 0;
    const boolint = isOdd ? -1 : 1;
    project[i].style.transformStyle = `preserve-3d`;

    project[i].style.transform = `perspective(650px) rotateX(${
      y * boolint
    }deg) rotateY(${x * boolint}deg) scale3d(1, 1, 1)`;
  }
}

const projects = document.querySelectorAll("div.project__wrapper--bg");
const scalefacterProject = 1 / 21;

function moveProject(event) {
  projects.forEach(project => {
    project.style.transform = `perspective(800px) rotateX(${
      (event.clientY - window.innerHeight / 2) * scalefacterProject
    }deg) rotateY(${(event.clientX - window.innerWidth / 2) * scalefacterProject}deg) scale3d(1, 1, 1)`;
  });
}

function reset() {
  projects.forEach(project => {
    project.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
    project.style.transition = `transform 0.2s`;
    console.log(project)
  });
}

document.addEventListener("mousemove", moveProject);
document.addEventListener("mouseleave", reset);
``