<script setup>
const desserts = [
  {
    dessert: 'フローズンヨーグルト',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'アイスクリームサンドイッチ',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'エクレア',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'カップケーキ',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'ジンジャーブレッド',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">
          デザート（100gあたり）
        </th>
        <th class="text-uppercase text-center">
          カロリー
        </th>
        <th class="text-uppercase text-center">
          脂質(g)
        </th>
        <th class="text-uppercase text-center">
          炭水化物(g)
        </th>
        <th class="text-uppercase text-center">
          タンパク質(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
