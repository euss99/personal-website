<template>
  <div class="container">
    <div class="skills">
      <div class="skills-tech">
        <p>Tech Stack Front</p>
        <div class="line"></div>
        <div class="img-container">
          <img class="rounded" src="../assets/img/JS.png" alt="Logo JS" />
          <img src="../assets/img/TS.png" alt="Logo TS" />
          <img class="img-vue" src="../assets/img/vue.png" alt="Logo Vue" />
          <img class="react" src="../assets/img/react.png" alt="Logo react" />
          <img src="../assets/img/next.webp" alt="Logo next" />
          <img src="../assets/img/sass.png" alt="Logo SASS" />
          <img
            class="tailwind"
            src="../assets/img/tailwind.png"
            alt="Logo tailwind"
          />
          <img src="../assets/img/bootstrap.png" alt="Logo BS" />
        </div>
      </div>

      <div class="skills-tech">
        <p>Tech Stack Back</p>
        <div class="line"></div>
        <div class="img-container">
          <img class="node-img" src="../assets/img/node.png" alt="Logo node" />
          <img class="express" src="../assets/img/express.png" alt="Logo express" />
          <img class="mongodb" src="../assets/img/mongodb.svg" alt="Logo mongo" />
          <img class="firebase" src="../assets/img/firebase.webp" alt="Logo firebase" />
          <img class="mongodb" src="../assets/img/postman.svg" alt="Logo postman" />
          <img class="mongodb" src="../assets/img/insomnia.png" alt="Logo insomnia" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 150px auto 0 auto !important;

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .skills-tech {
      display: flex;
      align-items: center;
      margin-top: 32px;

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

        .tailwind {
          width: 65px;
        }

        .react {
          width: 55px;
        }

        .img-vue {
          width: 60px;
        }

        .node-img {
          width: 75px;
        }

        .express, .firebase {
          width: 60px;
          height: 60px;
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
