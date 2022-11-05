<script>
  import './script.js';

  import Followers from './Followers.svelte';
  import Following from './Following.svelte';
  import Profile from './Profile.svelte';
  import Repositories from './Repositories.svelte';
  import Search from './Search.svelte';
</script>
<Search/>
<svelte:head>
  
</svelte:head>
<div id="Profile">
  <Profile/>
</div>
  <div id="Repositories">
  <Repositories/>
</div>
<div id="Followers">
  <Followers/>
</div>
<div id="Following">
  <Following/>
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