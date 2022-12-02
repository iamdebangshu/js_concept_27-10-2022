// assigning variable a refernce of page element
let e = document.querySelector('#main');

let x = 0;

let showWarning = () => {
  let d = document.createElement('div');
  d.id = 'warning';
  // creating a circle
  d.style.width = '300px';
  d.style.height = '300px';
  d.style.borderRadius = '50%';
  // console.log(x);
  if (x === 0) {
    d.style.backgroundColor = 'red';
    d.textContent = "Danger !!!"
  } else {
    d.style.backgroundColor = 'yellow';
    d.textContent = "Warning !!!"
  }
  // to center the text inside circle
  d.style.display = 'flex';
  d.style.justifyContent = 'center';
  d.style.alignItems = 'center';
  d.style.fontSize = '50px';
  // to append in the DOM
  e.append(d);
}

showWarning();


setInterval(() => {


  // code starts here
  let e = document.getElementById('warning');
  if (e) {
    e.remove();
    // console.log(true);
  } else {
    // console.log(false);
    if (x===2) {
      x = 0;
    }
    // console.log(x);
    showWarning()
    x = x+1
  }
  // code ends here 

}, 1000);

