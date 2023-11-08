<template>
    <div class="sidebar">
      <nav class="menu">

        <div class="logo-box">
            <img style="width: 30px; height: 30px;" src="../assets/logo.png" />
            <h5>TopBlog</h5>
        </div>

        <hr>

        <ul>
          <li>
            <router-link to="/">
              <font-awesome-icon icon="home" /> &nbsp; &nbsp; Tableau de bord
            </router-link>
          </li>
          <li>
            <router-link to="/create-articles">
              <font-awesome-icon icon="pen-nib" /> &nbsp; &nbsp; Rédiger un Article
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <font-awesome-icon icon="tags" /> &nbsp; &nbsp; Articles
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              <font-awesome-icon icon="chart-line" /> &nbsp; &nbsp; Analytics
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              <font-awesome-icon icon="sign-in-alt" /> &nbsp; &nbsp; Connexion
            </router-link>
          </li>
          <li>
            <router-link to="/registration">
              <font-awesome-icon icon="user-plus" /> &nbsp; &nbsp; Inscription
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  };
  </script>
  
  <style scoped>

  .logo-box {
    border: 1px solid #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin: 30px 20px 40px 20px;
    padding: 10px;
  }

  .logo-box h5 {
    font-weight: 900;
    font-size: 18px;
    margin-left: 15px;
  }

  .sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #176d6d;
    color: white;
  }
  
  .menu ul {
    list-style-type: none;
    padding: 0;
    padding-top: 20px;
  }
  
  .menu li {
    padding: 5px;
  }
  
  .menu li a {
    color: white;
    text-decoration: none;
    min-height: 50px;
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #597a7a;
  }
  
  .menu li a:hover {
    background-color: #115252;
    width: 100%;
  }
  
  .font-awesome-icon {
    margin-right: 10px;
  }
  </style>
  