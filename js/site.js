document.addEventListener("DOMContentLoaded", () =>{
  let form = document.forms[0];
  let button = form["submit"];

  button.addEventListener("click", (event) => {
    let formData = new FormData(form)

    printToConsole(formData)
    
    if (formData.get("IsFilterByLvl") == null && (formData.get("FromElo") == '' 
        || formData.get("ToElo") == '' 
        || formData.get("FromElo") < 0 
        || formData.get("ToElo") < 0 
        || Number(formData.get("FromElo")) > Number(formData.get("ToElo"))))
    {
        Swal.fire({
            icon: 'error',
            title: 'Input field data error'
        })
    }
    else
    {
        let timerInterval
        Swal.fire({
            title: 'Loading',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }

    event.preventDefault()
  })
})

function printToConsole(formData)
{
  console.log(formData.get("Lvl"))
  console.log(formData.get("IsFilterByLvl"))
  console.log(formData.get("FromElo"))
  console.log(formData.get("ToElo")) 
}

