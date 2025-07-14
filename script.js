const heart = document.querySelector('.heart');
const burst = document.querySelector('.burst');

heart.addEventListener('click', () => {
  heart.classList.toggle('liked');

  // Show burst animation
  burst.classList.remove('show');
  void burst.offsetWidth; // trigger reflow
  burst.classList.add('show');
});
