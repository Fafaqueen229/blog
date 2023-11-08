<template>
    <div class="article-editor">
      <div class="image-uploader">
        <label for="imageInput" class="upload-label">
          Télécharger une image
          <input type="file" id="imageInput" @change="handleImageUpload" hidden/>
        </label>
        <div v-if="image" class="preview-image">
          <img :src="imagePreview" alt="Aperçu de l'image" style="width: 250px; height: 250px; object-fit: contain;" />
        </div>
      </div>
      <div class="input-wrapper">
        <input type="text" v-model="title" placeholder="Titre de l'article" class="input-title" />
      </div>
      <div class="input-wrapper">
        <input type="text" v-model="shortDescription" placeholder="Description courte" class="input-description" />
      </div>
      <div class="textarea-wrapper">
        <textarea v-model="content" placeholder="Rédigez votre article ici..." class="textarea-content"></textarea>
      </div>
      <div class="input-wrapper">
        <select v-model="category" class="select-category">
          <option disabled value="">Sélectionnez une catégorie</option>
          <option>Culture</option>
          <option>Technologie</option>
          <option>Politique</option>
          <!-- Ajoutez d'autres catégories ici -->
        </select>
      </div>
      <div class="submit-wrapper">
        <button @click="submitArticle" class="btn-submit">Publier l'article</button>
      </div>
    </div>
  </template>
  
  <script>
  import articleService from '../services/articlesServices';
  export default {
    data() {
      return {
        title: '',
        shortDescription: '',
        content: '',
        category: '',
        image: null,
        imagePreview: ''
      };
    },
    methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.image = file;
      this.imagePreview = URL.createObjectURL(file);
    },
    async submitArticle() {
      // Assurez-vous que tous les champs nécessaires sont remplis
      if (!this.title || !this.shortDescription || !this.content || !this.category || !this.image) {
        alert("Tous les champs doivent être remplis.");
        return;
      }

      // Préparer le formData pour l'envoi de l'image
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('desc', this.shortDescription);
      formData.append('content', this.content);
      formData.append('category', this.category);
      formData.append('image', this.image);

      try {
        // Utiliser le service API pour envoyer la requête
        const response = await articleService.createArticle(formData);
        console.log(response.data); // Traitement en cas de succès
        
        // Réinitialiser le formulaire après le succès
        this.title = '';
        this.shortDescription = '';
        this.content = '';
        this.category = '';
        this.image = null;
        this.imagePreview = '';
      } catch (error) {
        console.error(error); // Traitement en cas d'erreur
      }
    }
  }
};
  </script>
  
  <style scoped>
  .article-editor {
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    background: #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 0;
  }
  
  .input-wrapper, .textarea-wrapper, .submit-wrapper {
    margin-bottom: 20px;
  }
  
  .upload-label {
    display: block;
    padding: 10px 20px;
    background: #176d6d;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .upload-label:hover {
    background: #4cae4c;
  }
  
  .preview-image {
    margin-top: 10px;
    text-align: center;
  }
  
  .preview-image img {
    max-width: 100%;
    border-radius: 5px;
  }
  
  .input-title, .input-description, .textarea-content, .select-category {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .textarea-content {
    height: 200px;
    resize: vertical;
  }
  
  .btn-submit {
    padding: 10px 20px;
    background: #337ab7;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-submit:hover {
    background: #286090;
  }
  
  .select-category {
    height: 40px;
  }
  </style>
  