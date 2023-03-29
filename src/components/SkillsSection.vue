<template>
  <div class="container">
    <div class="skills">
      <div class="skills-tech">
        <p>Tech Stack Front</p>
        <div class="line"></div>
        <div class="img-container">
          <img src="../assets/img/TS.png" alt="Logo TS" />
          <img src="../assets/img/bootstrap.png" alt="Logo BS" />
          <img class="img-vue" src="../assets/img/vue.png" alt="Logo Vue" />
          <img src="../assets/img/sass.png" alt="Logo SASS" />
          <img src="../assets/img/figma.png" alt="Logo Figma" />
        </div>
      </div>

      <div class="mt-3 skills-tech">
        <p>Tech Stack Back</p>
        <div class="line"></div>
        <div class="img-container">
          <img class="rounded" src="../assets/img/JS.png" alt="Logo JS" />
          <img class="node-img" src="../assets/img/node.png" alt="Logo TS" />
          <img src="../assets/img/python.png" alt="Logo BS" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 125px !important;

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .skills-tech {
      display: flex;
      align-items: center;

      p {
        font-weight: 500;
        color: $colorPrimary;
      }
      .line {
        border-left: 2px solid $colorPrimary;
        height: 50px;
        margin-left: 40px;
        margin-right: 20px;
      }

      .img-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        img {
          width: 50px;
          height: 50px;
          margin: 15px 30px;
        }

        .img-vue {
          width: 60px;
        }

        .node-img {
          width: 70px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .skills-tech {
    flex-direction: column;

    .line {
      margin-bottom: 0 !important;
      border-bottom: 2px solid $colorPrimary;
      border-left: none !important;
      height: 0px !important;
      width: 100%;
      margin: 16px 0px 8px 0px;
    }
  }
}

@media (max-width: 425px) {
  .skills-tech {
    .line {
      width: 85% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
}
</style>
