document.addEventListener("DOMContentLoaded", () =>{
    let form = document.forms[0];
    let button = form["submit"];
  
    button.addEventListener("click", (event) => {
      let formData = new FormData(form)
  
      console.log(formData.get("Username")) 
      
      if (formData.get("Username") == '')
      {
          Swal.fire({
              icon: 'error',
              title: 'Input field data error'
          })
      }
      else
        location.href='userpage.html'
  
      event.preventDefault()
    })
  })

  
  