function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    const options = box.querySelector('.options');
  
    if (box.classList.contains('expanded')) {
      box.classList.remove('expanded');
      options.style.display = 'none';
    } else {
      document.querySelectorAll('.box').forEach(b => {
        b.classList.remove('expanded');
        b.querySelector('.options').style.display = 'none';
      });
      box.classList.add('expanded');
      options.style.display = 'block';
    }
  }
  
  function changeColor(boxId, color) {
    const box = document.getElementById(boxId);
    box.style.backgroundColor = color;
  }
  
  function changeSize(boxId, size) {
    const box = document.getElementById(boxId);
    if (size === 'small') {
      box.style.width = '200px';
    } else if (size === 'medium') {
      box.style.width = '300px';
    } else if (size === 'large') {
      box.style.width = '400px';
    }
  }
  