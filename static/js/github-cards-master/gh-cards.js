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
  display: flex;
  margin: 8px;
  border-radius: 5px;
}

.gh-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img.gh {
  border-radius: 5px 5px 5px 5px;
  width: 100%;
}

.container.gh {
  padding: 16px;
}

.gh p {
  line-height: 1.6;
  margin: 1em 0;
  text-align: left;
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card img {
  width: 50%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card-content {
  padding: 1.5em;
  flex: 1;
}

.card-content h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.card-content p {
  font-size: 1em;
}
`;

// injectStylesheet('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
injectStyle(style);

for(let card of cards) {
  let repo = card.getAttribute('data-repo');
  let url_override = card.getAttribute('url-override');
  let object_fit = card.getAttribute('object-fit');
  if (url_override == null) {
    let url = 'https://api.github.com/repos/' + repo;
  
    fetch(url, {method: 'GET'}).then(resp => {
      return resp.json();
    }).then(json => {
      
      // <a class="gh" href="${json.html_url}/network">${json.forks_count} forks</a> - 
      card.innerHTML = `
        <img class="gh" src="${card.getAttribute('data-image') || json.owner.avatar_url}" style="object-fit: ${object_fit || 'cover'};">
        <div class="gh container card-content">
          <p class="gh" style="word-break: break-all;">
            <a class="gh" href="${json.html_url}">
              <b>${json.name}</b>
            </a>
          </p>
          <p class="gh">${json.description || 'If this is showing, the site got rate-limited!'}</p>
          <a class="gh" href="${json.html_url}/stargazers">${json.stargazers_count} stars</a>
        </div>
      `;
      
    }).catch(err => {
      console.log(err);
    });
  } else {
    let name = card.getAttribute('name');
    let descr = card.getAttribute('description') || "";
    let object_fit = card.getAttribute('object-fit');
    card.innerHTML = `
    <img class="gh" src="${card.getAttribute('data-image') || json.owner.avatar_url}" style="object-fit: ${object_fit || 'cover'};">
        <div class="gh container card-content">
          <p class="gh" style="word-break: break-all;">
            <a class="gh" href="${url_override}">
              <b>${name}</b>
            </a>
          </p>
          <p class="gh">${descr}</p>
        </div>
    `;
  }
}
