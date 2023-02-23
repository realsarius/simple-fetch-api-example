getText = () => {
  fetch('test.txt')
    .then((res) => {
      if (res.ok) {
        return res.text();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => {
      document.querySelector('#output').innerText = data;
    })
    .catch((err) => {
      console.log(err);
    });
};

getJSON = () => {
  fetch('posts.json')
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => {
      document.querySelector('#output').innerText = '';
      const posts = data;
      posts.forEach((post) => {
        const title = document.createElement('h3');
        const body = document.createElement('p');
        const jsonDiv = document.createElement('div');
        title.textContent = post['title'];
        body.textContent = post['body'];
        jsonDiv.appendChild(title);
        jsonDiv.appendChild(body);
        document.querySelector('#output').appendChild(jsonDiv);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getExternalData = () => {
  fetch('https://api.github.com/users')
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => {
      console.log(data);
      document.querySelector('#output').innerText = '';
      data.forEach((user) => {
        const userDiv = document.createElement('div');
        const userLink = document.createElement('a');
        const userImg = document.createElement('img');
        userDiv.id = 'userDiv';
        userImg.setAttribute('src', user['avatar_url']);
        userImg.id = 'userId';
        userLink.href = `${user['html_url']}`;
        userLink.style.textDecoration = 'none';
        userLink.setAttribute('target', '_blank');
        userDiv.textContent = `User ${user['id']} ${userLink.text}`;
        userDiv.appendChild(userImg);
        userLink.textContent = `${user['login']}`;
        userDiv.appendChild(userLink);
        document.querySelector('#output').style.fontSize = '2rem';
        document.querySelector('#output').appendChild(userDiv);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getExternalData);
