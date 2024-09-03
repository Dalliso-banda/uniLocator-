/*written by frendolsk.com. api by http://universities.hipolabs.com.*/

/*i suck at variable naming*/
/*0976557875 whatsapp*/
alert('some countries are not in the database')
let country;
const countrySelector= document.getElementById('country');
let search= document.querySelector('input');
let display= document.getElementById('displayField');
countrySelector.onchange=(event)=>{
   country=event.target.value;
   alert(`you selected ${country} wait for database to load`)
   if(country){
      getUnis(country);
   }
   else{
       console.log(new Error)
   }
}

  

   function getUnis(country){
let API = `https://universities.hipolabs.com/search?country=${country}`;
fetch(API)
.then(res=>res.json()).then(data=>{
   let results= data.map((uni)=>{
       return uni;
   })
   
   alert('database loaded')
    search.oninput=(event)=>{
      const value=event.target.value;
      display.innerHTML="";
     results.forEach((result)=>{
              if(result.name.toLowerCase().trim().includes(value.toLowerCase().trim())){
            
         let name =document.createElement('a');
         name.innerHTML= result.name;
         name.href=result.web_pages;
         display.appendChild(name)
         name.onclick=()=>{
         if(!result.web_pages){
             alert('link could not be found')
         }
         }
         
      }
      
      })
    }
}).catch(error=>alert(`${error} data`))
}
/*functional programming*/
