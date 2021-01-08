<template>
  <div>
    <section class="section">
      <h4 class="margin-h4">Расчет сечения кабеля и мощности автомата</h4>

      <ul>
        <li>1 мм кабеля выдерживает до 9 А, или до 2 кВт</li>
        <li>Лучше медные, одножильные</li>
        <li>Все многожильные обжимать или залуживать</li>
        <li>Все скрутки обжимать или пропаивать, но лучше ч/з клеммы Вага</li>
        <li>
          УЗО на розетки (но можно и на свет и на ванную и на плиту и на климат)
        </li>
        <li>
          Автоматы (по комнатам, отдельно на свет, отдельно на розетки, отдельно
          на мощные эл. приборы)
        </li>
      </ul>

      <table class="table table-striped table-bordered table-hover">
        <tr>
          <th>Нагруз&shy;ка</th>
          <th>Мощн. кВт</th>
          <th>Кабель мм<sup>2</sup></th>
          <th>Авто&shy;мат А</th>
          <th>Ошиб&shy;ка</th>
        </tr>
        <tr>
          <td class="text-start">Свет</td>
          <td>0 - 2,8</td>
          <td>1,5</td>
          <td>10</td>
          <td class="td-error">16</td>
        </tr>
        <tr>
          <td class="text-start">Розетки</td>
          <td>2,9 - 4,5</td>
          <td>2,5</td>
          <td>16</td>
          <td class="td-error">25</td>
        </tr>
        <tr>
          <td class="text-start">Духовка</td>
          <td>4,6 - 5,8</td>
          <td>4</td>
          <td>20</td>
          <td class="td-error">32</td>
        </tr>
        <tr>
          <td class="text-start">Водо&shy;нагрев.,<br />конфор&shy;ки</td>
          <td>5,9 - 7,3</td>
          <td>6</td>
          <td>32</td>
          <td class="td-error">40</td>
        </tr>
      </table>
    </section>
    <hr />

    <section>
      <h4 class="margin-h4">Единицы измерения</h4>
      <ul>
        <li>
          Напряжение (U, вольт) - разность потенциалов (скорость электронов)
        </li>
        <li>
          Сила тока (I, ампер) - количество электронов за секунду ч-з
          поверхность
        </li>
        <li>
          Мощность (P, ватт) - произведение мгновенных значений напряжения и
          силы тока на участке цепи
        </li>
      </ul>

      <div class="row">
        <div class="col-sm-4">
          <a
            data-fancybox="gallery"
            href="img/sprav/zakon_oma.jpg"
            class="card h-100"
          >
            <img
              src="img/sprav/icons/formul.svg"
              class="card-img-top"
              alt="Формулы расчета"
            />
            <div class="card-body">
              <h5 class="card-title">Формулы расчета</h5>
            </div>
          </a>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <h4 class="margin-h4">Отличия ламп</h4>
      <div class="row">
        <div class="col-sm-4">
          <a
            data-fancybox="gallery"
            href="img/sprav/lampa_wat.jpg"
            class="card h-100"
          >
            <img
              src="img/sprav/icons/vidlamp.svg"
              class="card-img-top"
              alt="Виды ламп"
            />
            <div class="card-body">
              <h5 class="card-title">Виды&shy; ламп</h5>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            data-fancybox="gallery"
            href="img/sprav/lampa_temp2.png"
            class="card h-100 mt-2 mt-sm-0"
          >
            <img
              src="img/sprav/icons/lamp.svg"
              class="card-img-top"
              alt="Температуры ламп"
            />
            <div class="card-body">
              <h5 class="card-title">Темпе&shy;ратуры ламп</h5>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Sprav',
}
</script>

<style scoped>
table tr td,
table tr th {
  text-align: center;
}

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