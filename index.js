const jokes = document.getElementById('#joke');
const jokesbtn = document.getElementById('#jokebtn');

const generatejokes = async()=>{
   try{const  setHeader = {
                 headers:{
                    Accept:"application/json"
                 }
    }
         const res= await fetch('https://icanhazdadjoke.com/',setHeader);
         const data = await res.json();
        //  console.log(data);}
          jokes.innerHTML= data.joke;}catch(err){
            console.log(`${err}`);
        }}
        
            

// jokesbtn.addEventListener('click',generatejokes,true);