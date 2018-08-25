const app = "I don't do much.";

const token = 'f8be1180423cd5fbcc367e5f0baf93ef990d2d96'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
