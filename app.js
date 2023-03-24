let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let factSection = document.getElementById("numFact")
let factSection2 = document.getElementById("numFact2")


btn.addEventListener("click" , async (e) =>{
    e.preventDefault()
    let numVal = document.getElementById("num").value
    console.log("works")
    try{
        let res = await axios.get(`http://numbersapi.com/${numVal}?json`)
    factSection.innerText = res.data.text
    console.log(res.data.text)
    
    }catch(e){
        console.log(e)
    }
    
    
})

btn2.addEventListener("click" , async (e)=>{
    e.preventDefault()
    console.log("button 2")
    let numVal = Array.from((document.getElementById("nums").value))
    try{
        for(let i = 0 ; i < numVal.length ; i ++){
            let res = await axios.get(`http://numbersapi.com/${numVal[i]}?json`)
            let html = `${res.data.text}`
            factSection2.append(html)
            console.log(res.data.text)
        }
    }catch(e){
        console.log(e)
    }
    
})

