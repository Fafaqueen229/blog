<template>
    <div class="container">
      <div class="box">
        <img :src="imageSrc" alt="Background" style="width: 50%; height: 100%;" />
        <form @submit.prevent="submitForm">
          <h5>Login Account</h5>
          <p>Connectez-vous pour accéder à votre interface privée de gestion du blog</p>
  
          <div class="inputs-container">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Email" v-model="email" />
    
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password" v-model="password" />
    
          </div>
          <button type="submit" class="submit-btn">Login</button>

          <p style="margin-top: 20px;">
            Pas encore inscrit ?
            <router-link to="/registration">
              Créez un compte !
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; // Import useRouter to programmatically navigate
  
  const email = ref('');
  const password = ref('');
  const imageSrc = ref(new URL('@/assets/bk1.jpg', import.meta.url).href);
  const router = useRouter(); // Initialise the router
  
  async function submitForm() {
    const loginData = {
      email: email.value,
      password: password.value
    };
  
    try {
      const response = await fetch('http://localhost:3015/users/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const userData = await response.json();
      console.log('Login successful:', userData);
      
      router.push('/articles');
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  </script>

<style scoped>
    .container {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgb(240, 240, 240);
    }

    .box {
        height: 80%;
        width: 70%;
        display: flex;
        background-color: rgb(250, 250, 250);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
    }

    form h5 {
        color: #115252;
        font-size: 20px;
        font-weight: 900;
    }

    form p {
        font-size: 15px;
        color: #677;
        text-align: center;
        line-height: 1.5rem;
    }

    form input {
        background-color: rgb(240, 240, 240);
        padding: 15px;
        border: none;
        border-left: 4px solid #115252;
        margin: 10px 0;
    }

    .inputs-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .submit-btn {
        background-color: #115252;
        width: 100%;
        padding: 15px;
        color: #fff;
        outline: none;
        border: none;
        margin-top: 30px;
        cursor: pointer;
    }
</style>