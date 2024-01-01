url = "https://startling-pavlova-95436c.netlify.app/.netlify/functions/api/employee"

fetch(url)
 .then(res => res.json())
 .then(res =>
 {
    console.table(res);
   
    output = ' '

    for(let i=0;i<res.length;i++)
    { 
        output +=`<tr>
         <td>${res[i]['employee_id']}</td>  
         <td>${res[i]['name']}</td>
         <td>${res[i]['contact_number']}</td>
         <td>${res[i]['address']}</td>
         <td>${res[i]['salary']}</td>
         <td>${res[i]['role']}</td>
         <td><button style="color:" class="btn btn-danger"  onclick="deleteEmployee('${res[i]['_id']}')">Delete</button>
         <a class="btn btn-info" href='editinfo.html?id=${res[i]['_id']}'>Edit</a>  
            </td>
         
         </tr>`       
    }

    document.getElementById("records").innerHTML= output
 })


 fetch(url)
  .then(res => res.json())
  .then(res =>
  {  
     console.log(res); 
     console.table(res) 
     document.getElementById('emp_id').value=res['employee_id']
     document.getElementById('name').value=res['name']
     document.getElementById('salary').value=res['salary'] 
     document.getElementById('contact_number').value=res['contact_number']
     document.getElementById('location').value=res['address']
     document.getElementById('role').value=res['role']

    l
   

  })





function deleteEmployee(id)
{

     flag=confirm("Are you sure you want to delete this record ?? ..")
    if(flag==true){
    fetch(`${url}?id=${id}` , {method:"DELETE"})
    .then(res => res.json())
    .then(res =>
    {
     window.location.reload()
     } 
     )
    }
}





function addData(){
     
      data={
       
       "name":document.getElementById("name").value,
       "contact_number":document.getElementById("contact_number").value,
       "address":document.getElementById("location").value,
       "salary":document.getElementById("salary").value,
       "employee_id":document.getElementById("emp_id").value,
       "role":document.getElementById("role").value

      }

 ] 
  
   
    fetch(url , 
    {
    method:"POST" ,
     headers:{
     'Accept':'application/json',
     'Content-Type':'application/json'
     },
    body: JSON.stringify(data)
     })
    .then(res => res.json())
    .then(res =>
    {
     window.location.href='frentend.html'
   
     } 

     )

    
     alert('|| Congrasulation Data Added Succesfully ||')

    }
    function putData(){
     
      data={
        "id":id,
       "name":document.getElementById("name").value,
       "contact_number":document.getElementById("contact_number").value,
       "address":document.getElementById("location").value,
       "salary":document.getElementById("salary").value,
       "employee_id":document.getElementById("emp_id").value,
       "role":document.getElementById("role").value

      }

   
    fetch(url , 
    {
    method:"PUT" ,
     headers:{
     'Accept':'application/json',
     'Content-Type':'application/json'
     },
    body: JSON.stringify(data)
     })
    .then(res => res.json())
    .then(res =>
    {
     window.location.href='frentend.html'
    
     } ,

     alert('|| Record Updated ||')
     )
   }



