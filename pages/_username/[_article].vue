<template>
  <div v-if="article" class=article__detail>
    <header>
      <h1>{{ article.title }}</h1>
      <div class="tags">
        <nuxt-link v-for="tag in article.tags" :key="tag" class="tag">
          #{{ tag }}
        </nuxt-link>
      </div>
      <div v-if="article.cover_image" class="image-wrapper">
        <img :src="article.cover_image" :alt="article.title" />
      </div>
      <!-- <div class="meta">
        <div class="scl">
          <span>
            <heart-icon />
            {{ article.positive_reactions_count }}
          </span>
          <span class="comments" @click="scrollToComments">
            <comments-icon />
            {{ article.comments_count }}
          </span>
        </div>
        <time>{{ article.readable_publish_date }}</time>
      </div> -->
    </header>
    <div class="content" v-html="article.body_html" />
  </div>
</template>

<script setup>

const config = useRuntimeConfig()
const route = useRoute()
const { data: article, pending, refresh, error } = await useFetch(() => `articles/${route.params._article}`, { baseURL: config.public.apiBase }
);
console.log(article);

</script>

<style scoped lang="scss">
.article__detail {
  background-color: white;
  border-radius: 1rem;
  padding: 24px;
}

article {
  padding: 0.5rem;
  border-radius: 1rem;
}

header {
  margin-bottom: 1rem;



  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;

    .tag {
      font-weight: 500;
      line-height: 1;
      padding: 0.5rem 0.5rem;
      margin: 0 0.5rem 0.5rem 0;
      border-radius: 0.25rem;
    }
  }

  .image-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
    overflow: hidden;


    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .meta {
    line-height: 1;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .scl {
      display: flex;

      span {
        display: flex;
        align-items: center;
        margin-right: 1rem;

        svg {
          margin-right: 0.25rem;
        }
      }

      .comments {
        cursor: pointer;
      }
    }
  }
}

::v-deep .content {
  .ltag__user {
    display: none;
  }

  iframe {
    max-width: 100%;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  a {}

  p {
    margin-bottom: 1rem;
    line-height: 1.4;

    code {
      background-color: #d2f3e1;
      border-radius: 0.25rem;
      padding: 0.25rem;
    }
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  .highlight {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  ul {
    list-style: numeral;
    margin-bottom: 1rem;

    li p {
      margin-bottom: 0;
    }
  }

  ol {
    margin-bottom: 1rem;
  }
}
</style>