let userData = null;

async function fetchUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  userData = data.results[0];
  displayUser(userData);
}

function displayUser(user) {
  document.getElementById('userImage').src = user.picture.large;
  document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
  document.getElementById('additionalInfoText').textContent = '';
}

// Handle info button clicks
document.addEventListener('click', (e) => {
  if (e.target && e.target.dataset.attr) {
    const attr = e.target.dataset.attr;
    let info = '';

    if (!userData) return;

    switch (attr) {
      case 'age':
        info = `Age: ${userData.dob.age}`;
        break;
      case 'email':
        info = `Email: ${userData.email}`;
        break;
      case 'phone':
        info = `Phone: ${userData.phone}`;
        break;
    }

    document.getElementById('additionalInfoText').textContent = info;
  }

  if (e.target && e.target.id === 'getUser') {
    fetchUser();
  }
});

// Load user on page load
window.onload = fetchUser;
