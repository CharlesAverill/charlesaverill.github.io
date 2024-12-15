let cards = document.getElementsByClassName('gh-card');

function injectStyle(str) {
    let node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function injectStylesheet(url) {
  let node = document.createElement('link');
  node.setAttribute('rel', 'stylesheet');
  node.setAttribute('href', url);
  document.body.appendChild(node);
}

let style = `
.gh h4 {
  padding: 0;
  margin: 0;
}

.gh-card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: inline-block;
  margin: 8px;
  border-radius: 5px;
  width: 44%;
}

.gh-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img.gh {
  border-radius: 5px 5px 0 0;
  width: 100%;
}

.container.gh {
  padding: 16px;
}

.gh p {
  line-height: 1.6;
  margin: 1em 0;
}
`;

// injectStylesheet('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
injectStyle(style);

for(let card of cards) {
  let repo = card.getAttribute('data-repo');
  let url = 'https://api.github.com/repos/' + repo;
  
  fetch(url, {method: 'GET'}).then(resp => {
    return resp.json();
  }).then(json => {
    
    card.innerHTML = `
      <img style="width: 100%; margin-left: auto; margin-right: auto;" class="gh" src="${card.getAttribute('data-image') || json.owner.avatar_url}">
      <div class="gh container">
        <p class="gh" style="word-break: break-all;">
          <a class="gh" href="${json.html_url}">
            <b>${json.full_name}</b>
          </a>
        </p>
        <p class="gh">${json.description}</p>
        <a class="gh" href="${json.html_url}/network">${json.forks_count} forks</a> - 
        <a class="gh" href="${json.html_url}/stargazers">${json.stargazers_count} stars</a>
      </div>
    `;
    
  }).catch(err => {
    console.log(err);
  });
}
