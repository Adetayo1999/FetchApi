
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const output = document.getElementById('output');
const myForm = document.getElementById("myForm");
const email = document.getElementById("email");
const title = document.getElementById("title");
const comment = document.getElementById("comment");

 button1.addEventListener('click' , () => {
    
    fetch('file.txt')
    .then(res => res.text())
    .then(data => output.innerHTML = data)
        

 })


   button2.addEventListener('click' , () => {
       fetch("http://localhost/Api/users.json")
       .then(res => res.json())
       .then(data =>{
       let items ="<h2>List Of Users </h2>";
             data.map(user => {
                  items += `
                       <ul>
                      <li> ${user.name} </li>
                       <li> ${user.email} </li>
                       </ul>
                       <br>
                  `
             })

             output.innerHTML = items
       })
       .catch(error => console.log(error.message))
   })


   //    

   button3.addEventListener('click' , () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data =>{
    let items ="<h2>List Of Comments </h2>";
          data.map(comment => {
               items += `
                    <div>
                   <h3> ${comment.name} </h3>
                    <p> ${comment.body} </p>
                    </div>
                    <br>
               `
          })

          output.innerHTML = items
    })
    .catch(error => console.log(error.message))
})


 myForm.addEventListener('submit' , (e) => {
         e.preventDefault()
     
     if(email.value !== "" && comment.value !== "" && title.value !== ""){
        
        fetch("https://jsonplaceholder.typicode.com/comments" , {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                 email:email.value,
                 title:title.value,
                 comment:comment.value
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
     }
 })