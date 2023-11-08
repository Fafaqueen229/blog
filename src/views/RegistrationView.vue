<template>
    <div class="container">
      <div class="box">
        <img :src="imageSrc" alt="Background" style="width: 50%; height: 100%; object-fit: cover;" />
        <form @submit.prevent="submitForm">
          <h5>Créez un compte</h5>
          <!-- <p style="font-size: 13px;">Commencez l'aventure en créant un compte maintenant</p> -->
  
          <div class="inputs-container">
            <!-- Correction: Ajout d'un champ pour le nom d'utilisateur -->
            <label for="username">Nom d'utilisateur</label>
            <input id="username" type="text" placeholder="Nom d'utilisateur" v-model="username" />
  
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Email" v-model="email" />
  
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Mot de passe" v-model="password" />
  
            <label for="confirmPassword">Confirmation</label>
            <input id="confirmPassword" type="password" placeholder="Confirmez le mot de passe" v-model="confirmPassword" />
  
          </div>
          <button type="submit" class="submit-btn">S'inscrire</button>

          <p style="margin-top: 20px;">
            Déjà inscrit ?
            <router-link to="/login">
              Connectez-vous
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'; // Assurez-vous d'importer axios
  
  // Références pour les données du formulaire
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const imageSrc = ref(new URL('@/assets/bk2.jpg', import.meta.url).href);
  
  // Fonction pour soumettre le formulaire
  async function submitForm() {
    if (password.value !== confirmPassword.value) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
  
    try {
      // Envoi de la requête POST pour s'inscrire
      const response = await axios.post('http://localhost:3015/users/register', {
        username: username.value,
        email: email.value,
        password: password.value,
      });
  
      // Gestion de la réponse ici, par exemple redirection ou message de succès
      alert("Inscription réussie");
      console.log(response.data);
    } catch (error) {
      // Gestion des erreurs ici
      alert("Erreur lors de l'inscription: " + error.response.data);
      console.error(error.response.data);
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
        height: 90%;
        width: 76%;
        display: flex;
        background-color: rgb(250, 250, 250);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        width: 50%;
    }

    form h5 {
        color: #115252;
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 10px;
    }

    form p {
        font-size: 14px;
        color: #677;
        text-align: center;
        line-height: 1.5rem;
    }

    form input {
        background-color: rgb(240, 240, 240);
        padding: 14px;
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
        margin-top: 20px;
        cursor: pointer;
    }

    .inputs-container label {
        font-size: 13px;
    }
</style>