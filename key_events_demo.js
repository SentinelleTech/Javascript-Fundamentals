document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name === 'Control') {
      // Do nothing when only the Control key is pressed.
      return;
    }
    if (event.ctrlKey) {
      alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
    } else {
      alert(`Key pressed ${name} \n Key code Value: ${code}`);
    }
  }, false);
  // Add event listener on keyup
  document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'Control') {
      alert('Control key released');
    }
  }, false);
