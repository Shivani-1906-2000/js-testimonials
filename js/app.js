(function() { 
  var counter=0;
      const pictures = [
        "customer-0",
        "customer-1",
        "customer-2",
        "customer-3",
        "customer-4"
      ];
      const customername=["john",
  "belly",
  "lisa",
  "doe",
  "smily"];
  const text=["I am first customer",
  "I am second customer",
  "I am third customer",
  "I am fourth customer",
  "I am fifth customer"]
  var btn=document.querySelectorAll(".btn");
      btn.forEach(function(event){
       event.addEventListener("click", function(e){
         const value=e.target;
         if(value.classList.contains("prevBtn")) {
         counter--;
        if(counter<0)
    {
    counter=text.length-1;
    }
    document.querySelector(".img-card").src=`img/${pictures[counter]}.jpg`;
    document.getElementById("customer-name").innerHTML=customername[counter];
    document.getElementById("customer-text").innerHTML=text[counter];
         }
         if(value.classList.contains("nextBtn")) {
          counter++;
          if(counter>text.length-1)
          {
            counter=0;
          }
          document.querySelector(".img-card").src=`img/${pictures[counter]}.jpg`;
          document.getElementById("customer-name").innerHTML=customername[counter];
          cus=document.getElementById("customer-text");
          cus.innerHTML=text[counter];
             }
       }
       )
    })
    })();
