// functionality for love icon
const love = document.getElementsByClassName("love-icon")
for(const loveIcon of love){
  loveIcon.addEventListener("click",function(){
    const updatedValue = parseInt(document.getElementById("love-icon-updated").innerText)
    const value = updatedValue + 1 ;
    document.getElementById("love-icon-updated").innerText = value
  })
}

// functionality for callbtn
const callbtns = document.getElementsByClassName("call-btns")
for(const callbtn of callbtns){
  callbtn.addEventListener("click",function(){
    if(coinbtn.innerText>=20){
        alert("national")
    const coin = parseInt(document.getElementById("coinbtn").innerText)
    document.getElementById("coinbtn").innerText = coin - 20
    }
    else{
        alert("You have no sufficient coin for call. ")
        document.getElementById("coinbtn").innerText=0
        
    }
  })
  
}


