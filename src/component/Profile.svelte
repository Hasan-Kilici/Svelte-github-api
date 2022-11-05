<script>
  
</script>
<div class="container">
<center>
  <div class="row">
  <div class="col-av">
  <img id="avatar">
  </div>
  <div class="col-us">
  <h2 id="username"></h2>
  <span id="name" class="name"></span>
  <p id="followerCount"></p>
  <p id="followingCount"></p>
  <p id="location"></p>
  <p id="blog"></p>
  <pre id="bio"></pre>
  </div>
  </div>
</center>
</div>
<style>
  .container{
    width:min(100% - 20%);
    margin-inline:auto;
    margin-bottom:1vh;
  }
  #avatar{
    width:100%;
    height:25vh;
    border-radius:50%;
  }
  .name{
    font-size:0.3em;
    display:none;
  }
  .row{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  }
  .col-av{
    width:25%;
  }
  .col-us{
    width:75%;
  }
</style>