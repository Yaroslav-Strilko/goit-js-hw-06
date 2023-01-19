const form = document.querySelector(".login-form");
// console.log(form) 

const data = {
  email : ' ',
  password : ' ',
}
// console.log(data)  

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
     
  const { elements: { email, password }, } = event.currentTarget;
  
  // console.log(event.currentTarget)

  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені.');
  }

  data.email = email.value;
  data.password = email.password;

  console.log(`Email: ${data.email}
Password: ${data.password}`);
  event.currentTarget.reset();
}









