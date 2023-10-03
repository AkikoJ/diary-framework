<template>
  <div class="res-cons">
    <article>
      <header>
        <h1 class="title">测试文章</h1>
      </header>
      <div class="date">2020年1月1日</div>
      <div class="category">
        |
        <span>java</span>
      </div>
      <div class="content">
        开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开
      </div>
      <p class="readmore clearfix">
        <span>阅读更多</span>
      </p>
      <p style="border-bottom: 1px solid #eee"></p>
    </article>
    <article>
      <header>
        <h1 class="title">测试文章</h1>
      </header>
      <div class="date">2020年1月1日</div>
      <div class="category">
        |
        <span>java</span>
      </div>
      <div class="content">
        开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开
      </div>
      <p class="readmore clearfix">
        <span>阅读更多</span>
      </p>
      <p style="border-bottom: 1px solid #eee"></p>
    </article>
    <article>
      <header>
        <h1 class="title">测试文章</h1>
      </header>
      <div class="date">2020年1月1日</div>
      <div class="category">
        |
        <span>java</span>
      </div>
      <div class="content">
        开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开
      </div>
      <p class="readmore clearfix">
        <span>阅读更多</span>
      </p>
      <p style="border-bottom: 1px solid #eee"></p>
    </article>
    <article>
      <header>
        <h1 class="title">测试文章</h1>
      </header>
      <div class="date">2020年1月1日</div>
      <div class="category">
        |
        <span>java</span>
      </div>
      <div class="content">
        开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开
      </div>
      <p class="readmore clearfix">
        <span>阅读更多</span>
      </p>
      <p style="border-bottom: 1px solid #eee"></p>
    </article>
    <article>
      <header>
        <h1 class="title">测试文章</h1>
      </header>
      <div class="date">2020年1月1日</div>
      <div class="category">
        |
        <span>java</span>
      </div>
      <div class="content">
        开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开
      </div>
      <p class="readmore clearfix">
        <span>阅读更多</span>
      </p>
      <p style="border-bottom: 1px solid #eee"></p>
    </article>
    <article>
      <header>
        <h1 class="title">测试文章</h1>
      </header>
      <div class="date">2020年1月1日</div>
      <div class="category">
        |
        <span>java</span>
      </div>
      <div class="content">
        开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开发开
      </div>
      <p class="readmore clearfix">
        <span>阅读更多</span>
      </p>
      <p style="border-bottom: 1px solid #eee"></p>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>
<style scoped lang="scss">
.res-cons {
  background-color: #fff;
  article {
    background-color: #fff;
    margin: {
      left: 10px;
      top: 10px;
    }

    header {
      margin-bottom: 10px;
      margin-top: 20px;
      .title {
        margin: 0 0 10px 0;
        color: #555;
        text-align: left;
        font-size: 30px;
        font-weight: bold;
      }
    }
    .date {
      display: inline-block;
      font-size: 15px;
      color: #999;
    }
    .category {
      color: #999;
      font-size: 15px;
      display: inline-block;
      margin-left: 10px;
      span {
        margin-left: 5 px;
        display: inline-block;
      }
    }
    .content {
      font-size: 1em;
      line-height: 1.8;
      margin-top: 20px;
    }
    .readmore {
      cursor: pointer;
      margin-bottom: 4px;
      span {
        font-size: 14px;
        color: #444;
        margin: -10px 0;
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        float: right;
      }
    }
  }
}
</style>
