const cards = document.querySelectorAll(".card");
const stats = document.querySelectorAll(".stat");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

},{
  threshold:0.2
});

[...cards, ...stats].forEach(item => {

  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "0.6s ease";

  observer.observe(item);

});

function whatsapp(plan){

  const numero = "5493765205306";

  const mensaje =
  "Hola, quiero información sobre el plan " + plan;

  const url =
  "https://wa.me/" +
  numero +
  "?text=" +
  encodeURIComponent(mensaje);

  window.open(url,"_blank");

}
