function generateKey() {
    const groups = [];
    for (let i = 0; i < 5; i++) {
      let group = '';
      for (let j = 0; j < 4; j++) {
        group += Math.floor(Math.random() * 10);
      }
      groups.push(group);
    }
    document.getElementById('serialKey').textContent = groups.join('-');
  }
