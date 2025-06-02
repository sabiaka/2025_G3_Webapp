<script setup>
const recentDevices = ref([
  {
    type: 'あなたへの新着情報',
    email: true,
    browser: true,
    app: true,
  },
  {
    type: 'アカウントアクティビティ',
    email: true,
    browser: true,
    app: true,
  },
  {
    type: '新しいブラウザでのサインイン',
    email: true,
    browser: true,
    app: false,
  },
  {
    type: '新しいデバイスのリンク',
    email: true,
    browser: false,
    app: false,
  },
])

const selectedNotification = ref('オンライン時のみ')
</script>

<template>
  <VCard title="最近のデバイス">
    <VCardText>
      通知を表示するには、ブラウザの許可が必要です。
      <a href="javascript:void(0)">許可をリクエスト</a>
    </VCardText>

    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th scope="col">
            種類
          </th>
          <th scope="col">
            メール
          </th>
          <th scope="col">
            ブラウザ
          </th>
          <th scope="col">
            アプリ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="device in recentDevices"
          :key="device.type"
        >
          <td>
            {{ device.type }}
          </td>
          <td>
            <VCheckbox v-model="device.email" />
          </td>
          <td>
            <VCheckbox v-model="device.browser" />
          </td>
          <td>
            <VCheckbox v-model="device.app" />
          </td>
        </tr>
      </tbody>
    </VTable>
    <VDivider />

    <VCardText>
      <VForm @submit.prevent="() => {}">
        <p class="text-base font-weight-medium">
          いつ通知を受け取りますか？
        </p>

        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="selectedNotification"
              mandatory
              :items="['オンライン時のみ', 'いつでも']"
            />
          </VCol>
        </VRow>

        <div class="d-flex flex-wrap gap-4 mt-4">
          <VBtn type="submit">
            変更を保存
          </VBtn>
          <VBtn
            color="secondary"
            variant="outlined"
            type="reset"
          >
            リセット
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
