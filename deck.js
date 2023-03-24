let shuffledUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"


let imageHolder = document.getElementById("cardDiv")








let shuffleBtn = document.getElementById("shuffleDeck")
shuffleBtn.addEventListener("click" , async (e) =>{
    e.preventDefault()
    let res = await axios.get(shuffledUrl)
    console.log("card button ")
    try{
        
    console.log("shuffled" , res.data.deck_id)
    localStorage.setItem("shuffledId",res.data.deck_id)
        
    location.reload()
    }catch(e){
        console.log(e)
    }
 
    
  
})




let drawUrl = `https://deckofcardsapi.com/api/deck/${localStorage.getItem("shuffledId")}/draw/?count=1`
let cardBtn = document.getElementById("pickCard")
cardBtn.addEventListener("click" , async (e) =>{
    e.preventDefault()
    let id = Math.floor(Math.random() * 10)
    let res = await axios.get(drawUrl)
    console.log(drawUrl)
    try{
    
            let img = document.createElement("img")
            img.src = `${res.data.cards[0].image}`
            img.id = `c${id}`
            imageHolder.append(img)
            console.log(imageHolder)
            console.log(res.data.cards[0].image)
        }catch(e){
            console.log(e)
        }
    console.log("works")
    
    
})