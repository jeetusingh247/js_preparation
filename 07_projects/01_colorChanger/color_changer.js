const buttons = document.querySelectorAll('.button'); // select all buttons
const body = document.querySelector('body'); // select body

buttons.forEach(function (button) { // loop through all buttons
  console.log(button); // print button
  button.addEventListener('click', function (e) { // add event listener to each button
    console.log(e); // print event
    console.log(e.target); // print target

    // -- Using if-else statements --\\

    // if (e.target.id === 'grey') { // if target id is grey
    //   body.style.backgroundColor = e.target.id; // change body background color to grey
    // }
    // if (e.target.id === 'green') { // if target id is white
    //   body.style.backgroundColor = e.target.id; // change body background color to white
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }

    // -- Using switch statement --\\
    switch (e.target.id) {
        case 'grey':
          body.style.backgroundColor = e.target.id;
          break;
        case 'green':
          body.style.backgroundColor = e.target.id;
          break;
        case 'blue':
          body.style.backgroundColor = e.target.id;
          break;
        case 'yellow':
          body.style.backgroundColor = e.target.id;
          break;
        case 'orange':
          body.style.backgroundColor = e.target.id;
          break;
        default:
          break;
      }  
  });
});