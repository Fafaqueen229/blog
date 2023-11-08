<template>
    <main>
        <header>
            <div class="create-btn-row">
                <h5>Communauté</h5>
                <button>
                    <font-awesome-icon icon="pen-nib" /> &nbsp;
                    Rédiger un article
                </button>
            </div>

            <div class="search-bar-row">
                <div class="search-bar">
                    <font-awesome-icon icon="search" /> &nbsp;
                    <input type="text" placeholder="Rechercher un article" />
                </div>

                <div class="filter-box">
                    <h6>Category</h6>
                    <select>
                        <option value="*">Toutes les catégories</option>
                        <option value="tech">Technologies</option>
                        <option value="art">Art</option>
                    </select>
                </div>

                <div class="filter-box">
                    <h6>Date</h6>
                    <input type="date" />
                </div>  
            </div>
        </header>

        <div class="articles-container">
            <ArticleItem
            v-for="article in articles"
            :key="article.id"
            :article="article"
            />
        </div>
    </main>
</template>

<script>
import ArticleItem from '../components/ArticleItem.vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    ArticleItem
  },
  setup() {
    const articles = ref([]);

    // Fonction pour charger les articles
    const loadArticles = async () => {
      try {
        const response = await fetch('http://localhost:3015/posts/');
        const data = await response.json();
        articles.value = data;
      } catch (error) {
        console.error('There was an error fetching the articles:', error);
      }
    };

    onMounted(() => {
      loadArticles();
    });

    return {
      articles
    };
  }
};
</script>


<style scoped>
    header {
        background-color: #61a3a3;
        padding-bottom: 20px;
        margin-bottom: 40px;
    }

    main {
        flex: 1;
        height: 100%;
        background-color: rgb(245, 245, 246);
        overflow: hidden;
        overflow-y: scroll;
        scrollbar-color: #176d6d;
        position: absolute;
        left: 250px;
        right: 0;
        top: 0;
    }

    .create-btn-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }

    .create-btn-row h5 {
        font-size: 25px;
        font-weight: 700;
    }

    .create-btn-row button {
        padding: 18px;
        background-color: #176d6d;
        border-radius: 12px;
        font-size: 14px;
        color: #fff;
        border: none;
        box-shadow: 0px 1px 20px #9ebbbb;
    }

    .search-bar-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 15px;
    }

    .search-bar {
      background-color: rgb(240, 240, 240);
      padding: 0 10px 0 10px;
      width: 30%;
      border-radius: 8px;
    }

    .search-bar input {
        padding: 15px;
        background: none;
        border: none;
        margin-left: -8px;
        outline: none;
    }

    .filter-box {
        width: 30%;
    }

    .filter-box h6 {
        font-size: 14px;
        font-weight: 800;
        margin-left: 0px;
    }

    .filter-box select, .filter-box input {
        background-color: rgb(252, 252, 253);
        border-radius: 10px;
        border-width: 1px;
        border-color: #bbb;
        width: 100%;
        padding: 15px;
        outline: none !important;
    }

    .articles-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>