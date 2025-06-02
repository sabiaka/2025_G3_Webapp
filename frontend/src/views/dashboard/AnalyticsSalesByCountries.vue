<script setup>
const salesByCountries = [
  {
    abbr: 'US',
    amount: '$8,656k',
    country: 'アメリカ合衆国',
    change: '+25.8%',
    sales: '894k',
    color: 'success',
  },
  {
    abbr: 'UK',
    amount: '$2,415k',
    country: 'イギリス',
    change: '-6.2%',
    sales: '645k',
    color: 'error',
  },
  {
    abbr: 'IN',
    amount: '$865k',
    country: 'インド',
    change: '+12.4%',
    sales: '148k',
    color: 'warning',
  },
  {
    abbr: 'JA',
    amount: '$745k',
    country: '日本',
    change: '-11.9%',
    sales: '86k',
    color: 'secondary',
  },
  {
    abbr: 'KO',
    amount: '$45k',
    country: '韓国',
    change: '+16.2%',
    sales: '42k',
    color: 'error',
  },
]

const moreList = [
  {
    title: '昨日',
    value: 'Yesterday',
  },
  {
    title: '先週',
    value: 'Last Week',
  },
  {
    title: '先月',
    value: 'Last Month',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>国別売上</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in salesByCountries"
          :key="data.country"
        >
          <template #prepend>
            <VAvatar
              :color="data.color"
              variant="tonal"
              size="40"
            >
              {{ data.abbr }}
            </VAvatar>
          </template>

          <VListItemTitle class="mb-1 d-flex align-center">
            <h6 class="text-h6">
              {{ data.amount }}
            </h6>
            <VIcon
              size="24"
              :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
              class="mx-1"
            >
              {{ data.change.charAt(0) === '+' ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line' }}
            </VIcon>
            <div
              :class="`${data.change.charAt(0) === '+' ? 'text-success' : 'text-error'}`"
              class="text-body-1"
            >
              {{ data.change.slice(1) }}
            </div>
          </VListItemTitle>

          <VListItemSubtitle class="text-body-1 me-2">
            {{ data.country }}
          </VListItemSubtitle>

          <template #append>
            <div>
              <h6 class="text-h6 mb-1">
                {{ data.sales }}
              </h6>
              <div class="text-body-2 text-disabled text-end">
                売上
              </div>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

  <style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: 0.875rem;
  }
  </style>
