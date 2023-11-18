function con() {
  var name = prompt('Enter name:');
  var num = prompt('Enter number:');
  var out = document.getElementById('output');

  fetch('2temp.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'text=' + encodeURIComponent(name) + '&name=' + encodeURIComponent(num),
  })
  .then(response => response.text())
  .then(data => {
      console.log(data);
       out.innerHTML =
          'You have entered-Name: ' +
          name +
          '<br>Phone Number: ' +
          num +
          '<br>Thank you, we will contact soon';
  })
  .catch(error => {
      console.error('Error:', error);
  });
}


  const gridContainer = document.querySelector('.grid-container');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => changePage(1));
    prevButton.addEventListener('click', () => changePage(-1));
  }

  function changePage(direction) {
    const scrollAmount = gridContainer.clientWidth;
    const maxScroll = gridContainer.scrollWidth - gridContainer.clientWidth;
    const currentScroll = gridContainer.scrollLeft;

    let newScroll = currentScroll + direction * scrollAmount;
    newScroll = Math.min(maxScroll, Math.max(0, newScroll));

    gridContainer.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  }

