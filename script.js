 fetch("https://cataas.com/api/cats?tags=cute")
 .then((data) =>{
     return data.json();
 })
 .then((completedata)=>{
     let data1="";
     completedata.map((values) => {
         data1+=`<div>
         <img src=${values.tags[0]} alt="img" class="img">
         </div>
         
         `;
     })
   console.log(data1);
   document.getElementById("demo").innerHTML = data1
 })
 .catch((err) =>{
     console.log(err);
 })