<script setup>
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('12345678')
const newPassword = ref('87654321')
const confirmPassword = ref('87654321')

const passwordRequirements = [
  '最低8文字以上 - 長いほど安全です',
  '少なくとも1つの小文字',
  '少なくとも1つの数字、記号、または空白文字',
]

const serverKeys = [
  {
    name: 'サーバーキー1',
    key: '23eaf7f0-f4f7-495e-8b86-fad3261282ac',
    createdOn: '2021年4月28日 18:20 GTM+4:10',
    permission: 'フルアクセス',
  },
  {
    name: 'サーバーキー2',
    key: 'bb98e571-a2e2-4de8-90a9-2e231b5e99',
    createdOn: '2021年2月12日 10:30 GTM+2:30',
    permission: '読み取り専用',
  },
  {
    name: 'サーバーキー3',
    key: '2e915e59-3105-47f2-8838-6e46bf83b711',
    createdOn: '2020年12月28日 12:21 GTM+4:10',
    permission: 'フルアクセス',
  },
]

const recentDevicesHeaders = [
  {
    title: 'ブラウザ',
    key: 'browser',
  },
  {
    title: 'デバイス',
    key: 'device',
  },
  {
    title: '場所',
    key: 'location',
  },
  {
    title: '最近のアクティビティ',
    key: 'recentActivity',
  },
]

const recentDevices = [
  {
    browser: 'WindowsのChrome',
    device: 'HP Spectre 360',
    location: 'ニューヨーク、NY',
    recentActivity: '2022年4月28日 18:20',
    deviceIcon: {
      icon: 'ri-macbook-line',
      color: 'primary',
    },
  },
  {
    browser: 'iPhoneのChrome',
    device: 'iPhone 12x',
    location: 'ロサンゼルス、CA',
    recentActivity: '2022年4月20日 10:20',
    deviceIcon: {
      icon: 'ri-android-line',
      color: 'error',
    },
  },
  {
    browser: 'AndroidのChrome',
    device: 'Oneplus 9 Pro',
    location: 'サンフランシスコ、CA',
    recentActivity: '2022年4月16日 04:20',
    deviceIcon: {
      icon: 'ri-smartphone-line',
      color: 'success',
    },
  },
  {
    browser: 'macOSのChrome',
    device: 'Apple iMac',
    location: 'ニューヨーク、NY',
    recentActivity: '2022年4月28日 18:20',
    deviceIcon: {
      icon: 'ri-mac-line',
      color: 'secondary',
    },
  },
  {
    browser: 'WindowsのChrome',
    device: 'HP Spectre 360',
    location: 'ロサンゼルス、CA',
    recentActivity: '2022年4月20日 10:20',
    deviceIcon: {
      icon: 'ri-macbook-line',
      color: 'primary',
    },
  },
  {
    browser: 'AndroidのChrome',
    device: 'Oneplus 9 Pro',
    location: 'サンフランシスコ、CA',
    recentActivity: '2022年4月16日 04:20',
    deviceIcon: {
      icon: 'ri-android-line',
      color: 'success',
    },
  },
]
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="パスワードの変更">
        <VForm>
          <VCardText>
            <!-- 👉 Current Password -->
            <VRow class="mb-3">
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  autocomplete="on"
                  label="現在のパスワード"
                  placeholder="············"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <VTextField
                  v-model="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  label="新しいパスワード"
                  autocomplete="on"
                  placeholder="············"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  autocomplete="on"
                  label="新しいパスワードの確認"
                  placeholder="············"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <p class="text-base font-weight-medium mt-2">
              パスワードの要件：
            </p>

            <ul class="d-flex flex-column gap-y-3">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <VIcon
                    size="7"
                    icon="ri-checkbox-blank-circle-fill"
                    class="me-3"
                  />
                </div>
                <span class="font-weight-medium">{{ item }}</span>
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn>変更を保存</VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="outlined"
            >
              リセット
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Two-steps verification -->
    <VCol cols="12">
      <VCard title="二段階認証">
        <VCardText>
          <p class="font-weight-semibold">
            二段階認証はまだ有効になっていません。
          </p>
          <p>
            二段階認証は、パスワード以外の認証要素を追加することで、アカウントのセキュリティを強化します。
            <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >詳細を見る</a>
          </p>

          <VBtn>
            二段階認証を有効にする
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <VCol cols="12">
      <!-- SECTION: Create an API key -->
      <VCard title="APIキーの作成">
        <VRow>
          <!-- 👉 Choose API Key -->
          <VCol
            cols="12"
            md="5"
            order-md="0"
            order="1"
          >
            <VCardText>
              <VForm @submit.prevent="() => {}">
                <VRow>
                  <!-- 👉 Choose API Key -->
                  <VCol cols="12">
                    <VSelect
                      label="Choose the API key type you want to create"
                      placeholder="Select API key type"
                      :items="['Full Control', 'Modify', 'Read & Execute', 'List Folder Contents', 'Read Only', 'Read & Write']"
                    />
                  </VCol>

                  <!-- 👉 Name the API Key -->
                  <VCol cols="12">
                    <VTextField
                      label="Name the API key"
                      placeholder="Name the API key"
                    />
                  </VCol>

                  <!-- 👉 Create Key Button -->
                  <VCol cols="12">
                    <VBtn
                      type="submit"
                      block
                    >
                      Create Key
                    </VBtn>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- SECTION: API Keys List -->
      <VCard title="API Key List &amp; Access">
        <VCardText>
          An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
        </VCardText>

        <!-- 👉 Server Status -->
        <VCardText class="d-flex flex-column gap-y-4">
          <div
            v-for="serverKey in serverKeys"
            :key="serverKey.key"
            class="bg-var-theme-background pa-4"
          >
            <div class="d-flex align-center flex-wrap mb-3">
              <h6 class="text-h6 mb-0 me-3">
                {{ serverKey.name }}
              </h6>
              <VChip
                color="primary"
                size="small"
              >
                {{ serverKey.permission }}
              </VChip>
            </div>
            <p class="text-base font-weight-medium">
              <span class="me-3">{{ serverKey.key }}</span>
              <VIcon
                :size="18"
                icon="ri-file-copy-line"
                class="cursor-pointer"
              />
            </p>
            <span>Created on {{ serverKey.createdOn }}</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- SECTION Recent Devices -->
    <VCol cols="12">
      <!-- 👉 Table -->
      <VCard title="Recent Devices">
        <VDataTable
          :headers="recentDevicesHeaders"
          :items="recentDevices"
          hide-default-footer
          class="text-no-wrap"
        >
          <template #item.browser="{ item }">
            <div class="d-flex">
              <VIcon
                start
                :icon="item.deviceIcon.icon"
                :color="item.deviceIcon.color"
              />
              <span>
                {{ item.browser }}
              </span>
            </div>
          </template>
          <!-- TODO Refactor this after vuetify provides proper solution for removing default footer -->
          <template #bottom />
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
