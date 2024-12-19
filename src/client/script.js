const fetchUsers = async () => {
  const response = await fetch('http://localhost:3000/users');
  const users = await response.json();
  console.log('Users received in frontend/client:', users);
  
  const ul = document.createElement('ul');
  ul.className = 'users-list';

  users.forEach(user => {
    const li = document.createElement('li');
    li.style.backgroundColor = user.color;
    li.innerHTML = `
      <h3>${user.firstName} ${user.lastName}</h3>
      <p>Username: ${user.username}</p>
    `;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
};

fetchUsers(); 