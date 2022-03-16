<template>
  <div>
    <Breadcrumb :routes="breadcrumb"/>
    <div class="mt-14 flex flex-col">
      <NuxtLink v-for="outlet in outlets" :to="outlet.link" :key="outlet.link" class="w-3/6">
        <img :src="outlet.img" :alt="outlet.name"/>
        <span>{{ outlet.name }}</span>
      </NuxtLink>
    </div>
    <div class="mt-14">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores blanditiis iure magnam modi odit
      pariatur placeat voluptatibus! Ab, aut, autem commodi deleniti doloremque eaque eligendi, enim iste laboriosam non
      pariatur perspiciatis quam ratione rem rerum sequi vero voluptatum. Accusantium, aliquam aperiam asperiores
      consequuntur corporis cumque debitis dolorem doloremque ea, eaque enim esse eveniet exercitationem fuga fugiat
      fugit illo ipsa ipsum minus molestiae natus nesciunt non numquam officiis perspiciatis placeat possimus quo
      ratione reprehenderit sed soluta tempora, tempore velit vero vitae voluptatibus voluptatum? Deleniti deserunt eum
      minima. Ab aliquam asperiores aspernatur consequatur corporis, debitis dolore, doloribus eligendi eos error
      eveniet ex fuga illum laudantium, minus nobis odio officiis placeat quae quos repellat repellendus repudiandae
      saepe. Alias consequatur corporis, cupiditate ducimus enim ipsam, iste nisi placeat quo sit tempora veritatis!
      Aliquam architecto delectus dicta dignissimos ea eaque expedita facilis id illo iusto, laboriosam laborum
      laudantium magni maiores minima minus molestias nisi nulla numquam odio odit omnis perspiciatis qui quis quo
      ratione rem temporibus tenetur ut vero. Ad adipisci aliquam cupiditate delectus dolorem ducimus, ea, eligendi et
      expedita facere in iste, laboriosam laborum maiores minima minus molestiae nisi reiciendis saepe veritatis. A
      aliquid atque consequuntur culpa cupiditate dignissimos earum eius error et, ex expedita id impedit ipsam iste
      itaque laborum libero molestias natus odio odit omnis quas quasi quos sequi sint sunt unde voluptas! Cupiditate
      deleniti fugit illum neque officiis provident unde. Commodi cum ex neque nostrum nulla perferendis quis, tempore
      tenetur veniam voluptatem. Eos in quidem quis saepe ut? Amet beatae blanditiis dolore dolorem ea illum, impedit in
      magni neque veritatis. Alias, architecto aut dicta doloremque eius eum facere ipsam iste labore molestias nihil
      non numquam perspiciatis quod reprehenderit rerum sint! Accusantium blanditiis commodi consequuntur corporis dicta
      dolore, eos iste nam nisi non numquam optio perspiciatis quisquam recusandae sapiente velit vero?
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutletsPage',
  data: () => ({
    breadcrumb: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Точки продажи',
        link: '/outlets'
      },
    ],
    outlets: [
      {
        name: 'Точка 1',
        link: '/outlets/outlet1',
        img: require('~/assets/img/outlets/outlet1.png')
      },
      {
        name: 'Точка 2',
        link: '/outlets/outlet2',
        img: require('~/assets/img/outlets/outlet2.png')
      },
    ]
  }),
  head() {
    return {
      title: '«Югадар» - Точки продажи'
    }
  },
}
</script>
