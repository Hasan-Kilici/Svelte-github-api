let profile, repositories, followers, following, username;

document.addEventListener("click", (e)=>{
 let element = e.srcElement;
 let func = element.getAttribute("hasankilici");
  eval(func);
})

function Search(){
username = document.getElementById("find");
  fetch(`https://api.github.com/users/${username.value}`).then(async (e)=>{
    let user = await e.json();
    profile = {
      username: user.login,
      name: user.username,
      avatar: user.avatar_url,
      url: user.html_url,
      followers: user.followers,
      following: user.following,
      repositories: user.public_repos,
      location: user.location,
      blog: user.blog,
      bio: user.bio,
    }
  });
  
  fetch(`https://api.github.com/users/${username.value}/repos?per_page=100`).then(async (e)=>{
    repositories = await e.json();
  });
  
  fetch(`https://api.github.com/users/${username.value}/followers`).then(async (e)=>{
    followers = await e.json();
  });
  
  fetch(`https://api.github.com/users/${username.value}/following`).then(async (e)=>{
    following = await e.json();
  });
  
  fetch(`https://api.github.com/users/${username.value}/orgs`).then(async (e)=>{
    organizations = await e.json();
  });

  setTimeout(()=>{
  let ProfileBoxs = {
    username: document.getElementById("username"),
    name: document.getElementById("name"),
    followers: document.getElementById("followerCount"),
    following: document.getElementById("followingCount"),
    url: document.getElementById("url"),
    bio: document.getElementById("bio"),
    blog: document.getElementById("blog"),
    location: document.getElementById("location"),
    avatar: document.getElementById("avatar"),
    repoTitle: document.getElementById("repoTitle"),
  }
    
  let RepoContainer, FollowersContainer, FollowingContainer, OrgsContainer;
  RepoContainer = document.getElementById("RepoContainer");
  FollowersContainer = document.getElementById("FollowersContainer");
  FollowingContainer = document.getElementById("FollowingContainer");
  OrgsContainer = document.getElementById("OrgsContainer");

  ProfileBoxs.username.innerHTML = profile.username;
  ProfileBoxs.name.innerHTML = profile.name;
    ProfileBoxs.followers.innerHTML = `${profile.followers} Takipçi`;
    ProfileBoxs.following.innerHTML = `${profile.following} Takip edilen`;
    ProfileBoxs.bio.innerHTML = profile.bio;
    ProfileBoxs.blog.innerHTML = profile.blog;
    ProfileBoxs.location.innerHTML = profile.location;
    ProfileBoxs.avatar.src = profile.avatar;
    ProfileBoxs.repoTitle.innerHTML = `${profile.repositories} Repository`;
    
    for(let i = 0;i < repositories.length;i++){
      RepoContainer.innerHTML += `
      <div class="repos">
      <h4>${repositories[i].name}</h4>
      <b class="repolang">${repositories[i].language}</b>
      </div>
      `;
    }
    
    FollowersContainer.innerHTML = "<h2>Takipçiler</h2>";
    for(let i = 0;i < followers.length;i++){
      FollowersContainer.innerHTML += `
      <div style="display:flex;flex-wrap:wrap;flex-direction:row;">
      <div style="width:90px">
      <img class="followpp" style="width:80px;height:80;border-radius:50%" src="${followers[i].avatar_url}"/>
      </div>
      <div style="width:calc(90% - 100px);">
      ${followers[i].login}
      </div>
      </div>
      `;
    }
    console.log(following)
    FollowingContainer.innerHTML = "<h2>Takip edilenler</h2>";
    for(let i = 0;i < following.length;i++){
       FollowingContainer.innerHTML += `
      <div style="display:flex;flex-wrap:wrap;flex-direction:row;">
      <div style="width:90px">
      <img class="followpp" style="width:80px;height:80;border-radius:50%" src="${following[i].avatar_url}"/>
      </div>
      <div style="width:calc(90% - 100px);">
      ${following[i].login}
      </div>
      </div>
      `;
    }

  },3000)
}