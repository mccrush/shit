<template>
  <div>
    <section class="section">
      <h4 class="margin-h4">Расчет сечения кабеля и мощности автомата</h4>
      <p class="item-p">- 1 мм кабеля выдерживает до 9 А, или до 2 кВт<br>
        - Лучше медные, одножильные<br>
        - Все многожильные обжимать или залуживать<br>
        - Все скрутки обжимать или пропаивать, но лучше ч/з клеммы Вага<br>
        - УЗО на розетки (но можно и на свет и на ванную и на плиту и на климат)<br>
        - Автоматы (по комнатам, отдельно на свет, отдельно на розетки, отдельно на мощные эл. приборы)
      </p>
      <!-- <div class="image-cover">
      <a data-fancybox="gallery" href="img/sprav/tabl_raschet.png">
        <img src="img/sprav/tabl_raschet.png" width="320" height="110" alt="Расчет сечения кабеля" class="item-image">
      </a>
    </div> -->

      <table class="table-sparav">
        <tr>
          <th>Нагруз&shy;ка</th>
          <th>Мощн. кВт</th>
          <th>Кабель мм<sup>2</sup></th>
          <th>Авто&shy;мат А</th>
          <th>Ошиб&shy;ка</th>
        </tr>
        <tr>
          <td class="align-left td-head">Свет</td>
          <td>0 - 2,8</td>
          <td>1,5</td>
          <td>10</td>
          <td class="td-error">16</td>
        </tr>
        <tr>
          <td class="align-left td-head">Розетки</td>
          <td>2,9 - 4,5</td>
          <td>2,5</td>
          <td>16</td>
          <td class="td-error">25</td>
        </tr>
        <tr>
          <td class="align-left td-head">Духовка</td>
          <td>4,6 - 5,8</td>
          <td>4</td>
          <td>20</td>
          <td class="td-error">32</td>
        </tr>
        <tr>
          <td class="align-left td-head">Водо&shy;нагрев.,<br>конфор&shy;ки</td>
          <td>5,9 - 7,3</td>
          <td>6</td>
          <td>32</td>
          <td class="td-error">40</td>
        </tr>
      </table>
    </section>
    <hr>

    <section>
      <h4 class="margin-h4">Единицы измерения</h4>
      <p class="item-p">- Напряжение (U, вольт) - разность потенциалов (скорость электронов)
        <br>
        - Сила тока (I, ампер) - количество электронов за секунду ч-з поверхность<br>
        - Мощность (P, ватт) - произведение мгновенных значений напряжения и силы тока на участке цепи
      </p>
      <!-- <div class="image-cover">
      <a data-fancybox="gallery" href="img/sprav/zakon_oma.jpg">
        <img src="img/sprav/zakon_oma.jpg" width="90" height="128" alt="Формулы расчета" class="item-image">
      </a>
    </div> -->

      <div class="cards">
        <a data-fancybox="gallery" href="img/sprav/zakon_oma.jpg" class="card">
          <img src="img/sprav/icons/formul.svg" width="100%" alt="Формулы расчета">
          <h4 class="mt-8">Формулы&shy;расчета</h4>
        </a>
      </div>

    </section>
    <hr>
    <section>
      <h4 class="margin-h4">Отличия ламп</h4>
      <div class="cards">
        <a data-fancybox="gallery" href="img/sprav/lampa_wat.jpg" class="card">
          <img src="img/sprav/icons/vidlamp.svg" width="100%" alt="Виды ламп">
          <h4 class="mt-8">Виды&shy; ламп</h4>
        </a>

        <a data-fancybox="gallery" href="img/sprav/lampa_temp2.png" class="card">
          <img src="img/sprav/icons/lamp.svg" width="100%" alt="Температуры ламп">
          <h4 class="mt-8">Темпе&shy;ратуры<br>ламп</h4>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Sprav'
  }
</script>