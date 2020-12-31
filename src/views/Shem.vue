<template>
  <section class="section">
    <div class="row">
      <div class="col-sm-4">
        <a
          data-fancybox="gallery"
          href="img/shems/schet.png"
          class="card border-0 h-100"
        >
          <img
            src="img/shems/icons/schet.svg"
            class="card-img-top"
            alt="Схема подключения электросчетчика"
          />
          <div class="card-body">
            <h5 class="card-title">Элетро&shy;счетчик</h5>
          </div>
        </a>
      </div>

      <div class="col-sm-4">
        <a
          data-fancybox="gallery"
          href="img/shems/prohod.png"
          class="card border-0 h-100"
        >
          <img
            src="img/shems/icons/prohod.svg"
            class="card-img-top"
            alt="Схема подключения проходного выключателя"
          />
          <div class="card-body">
            <h5 class="card-title">Проход&shy;ной<br />выклю&shy;чатель</h5>
          </div>
        </a>
      </div>
    </div>

    <!-- <div class="cards">
      <a data-fancybox="gallery" href="img/shems/schet.png" class="card">
        <img
          src="img/shems/icons/schet.svg"
          width="100%"
          alt="Схема подключения электросчетчика"
        />
        <h4 class="mt-8">Элетро&shy;счетчик</h4>
      </a>

      <a data-fancybox="gallery" href="img/shems/prohod.png" class="card">
        <img
          src="img/shems/icons/prohod.svg"
          width="100%"
          alt="Схема подключения проходного выключателя"
        />
        <h4 class="mt-8">Проход&shy;ной<br />выклю&shy;чатель</h4>
      </a>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'Shem',
}
</script>

<style scoped>
a.card {
  text-decoration: none;
  color: #212529;
  transition: 0.3s ease-in-out;
}

a.card:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>