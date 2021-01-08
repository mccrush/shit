<template>
  <section class="section">
    <div class="row">
      <div class="col-sm-4">
        <a
          data-fancybox="gallery"
          href="img/shems/schet.png"
          class="card h-100"
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
          class="card h-100 mt-2 mt-sm-0"
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
  border: 1px solid #f8f9fa;
  transition: 0.3s ease-in-out;
}

a.card:hover {
  border-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card-img-top {
  max-height: 128px;
  margin-top: 16px;
}

.card-title {
  margin-bottom: 0;
  text-align: center;
}
</style>