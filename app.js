const aside = document.querySelector(".aside");
const mobile = document.querySelector(".mobile");

mobile.addEventListener("click",() => {
  const visibility = aside.getAttribute('data-visible');
  console.log(visibility);

  if( visibility === "false"){
    aside.setAttribute('data-visible',true);
  } else if(visibility === "true"){
    aside.setAttribute('data-visible',false);
  }
});