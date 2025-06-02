<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle class="text-h4">
            解説ページ
          </VCardTitle>
          <VCardSubtitle>
            ギャルが解説するよ！
          </VCardSubtitle>
          
          <VCardActions>
            <VBtn
              color="primary"
              variant="elevated"
            >
              いいね！
            </VBtn>
            <VBtn
              color="secondary"
              variant="outlined"
            >
              シェア！
            </VBtn>
          </VCardActions>

          <VCardText>
            <VImg
              src="https://via.placeholder.com/800x400"
              alt="説明画像"
              class="rounded-lg mb-4"
            />

            <div class="text-h5 mb-2">
              解説
            </div>
            <p class="text-body-1">
              今回の解説は...
            </p>

            <VRow class="mt-4">
              <VCol
                v-for="(point, index) in points"
                :key="index"
                cols="12"
                md="6"
              >
                <VCard variant="outlined">
                  <VCardTitle>
                    ポイント{{ index + 1 }}
                  </VCardTitle>
                  <VCardText>
                    {{ point.description }}
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
// ポイントのデータ
const points = [
  { description: '説明文1' },
  { description: '説明文2' },
  { description: '説明文3' },
  { description: '説明文4' },
]
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>