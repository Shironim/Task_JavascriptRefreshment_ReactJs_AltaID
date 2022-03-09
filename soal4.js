// kalian memiliki sebuah variable
// let bdays = ['10-17', '05-19', '20-19']; ubahlah tanda (-) dalam variable tersebut menjadi (/)
let bdays = ['10-17', '05-19', '20-19'];

bdays.forEach(el => {
  console.log(el.replace("-", "/"));
});