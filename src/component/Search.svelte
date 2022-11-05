<script>
import './script.js';
</script>
<div class="container">
 <div class="searchBox">
  <input type="text" class="search" id="find">
   <button hasankilici="Search()">Search</button>
 </div>
</div>
<style>
  .container{
    width:min(100% - 20%);
    margin-inline:auto;
    margin-bottom:1vh;
  }
  .searchBox{
    padding:8px;
    background-color:orange;
    border-radius:8px;
  }
  .search{
    border:none;
    padding:8px;
    background-color:#fefefe;
    width:80%;
    margin-right:10px;
    border-radius:4px;
  }
  .search:focus{
    outline: none;
  }
  button{
    border:none;
    padding:8px;
    background-color:darkorange;
    color:white;
    border-radius:4px;
    width:calc(20% - 40px);
  }
</style>