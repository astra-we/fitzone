function whatsapp(plan){
  let numero = "549XXXXXXXXXX";
  let mensaje = "Hola, quiero el plan " + plan;
  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  window.open(url,"_blank");
}
