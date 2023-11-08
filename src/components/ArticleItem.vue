<template>
    <div class="article-item">
        <img :src="article.photo" alt="Article Image" style="width: 100%; height: 200px; object-fit: cover;" />
        <h2 style=" padding-left: 10px; padding-right: 10px; ">{{ article.title }}</h2>
        <div class="metadata">
            <span class="author">{{ article.author }}</span> |
            <span class="date">{{ formatDate(article.createdAt) }}</span>
        </div>
        <p class="excerpt">{{ article.desc }}</p>
        <RouterLink :to="`/article/${article.id}`" style=" padding-left: 10px; padding-right: 10px; ">Read More...</RouterLink>
    </div>
</template>


  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink,
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }
    }
  };
  </script>
    
  <style scoped>
  .article-item {
    margin-bottom: 24px;
    border-radius: 10px;
    width: 30%;
    margin: 10px 1.5% 40px 1.5%;
    cursor: pointer;
    overflow: hidden;
    transition: .5s ease;
    padding-bottom: 10px;
  }

  .article-item:hover {
    box-shadow: 0px 1px 25px #adc5c5;
    
  }
  
  .article-item h2 {
    margin: 0 0 8px 0;
  }
  
  .metadata {
    font-size: 0.9em;
    color: #666;
    padding-right: 10px;
    padding-left: 10px;
  }
  
  .excerpt {
    color: #333;
    padding-left: 10px;
    padding-right: 10px;
  }
  </style>
  