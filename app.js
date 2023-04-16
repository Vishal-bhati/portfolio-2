




const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  })
})



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


