<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import eCommerce2 from '@images/eCommerce/2.png'
import pages1 from '@images/pages/1.png'
import pages2 from '@images/pages/2.png'
import pages3 from '@images/pages/3.png'
import pages5 from '@images/pages/5.jpg'
import pages6 from '@images/pages/6.jpg'

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
]

const isCardDetailsVisible = ref(false)
</script>

<template>
  <VRow>
    <!-- 👉 Influencing The Influencer -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard>
        <VImg
          :src="pages1"
          cover
        />

        <VCardItem>
          <VCardTitle>インフルエンサーへの影響</VCardTitle>
        </VCardItem>

        <VCardText>
          カンクンが復活し、以前より良くなりました！100以上のメキシコリゾートが再開し、州観光大臣は2006年に2年前と同じ数の観光客がカンクンを訪れると予測しています。
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Robert Meyer -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard>
        <VImg :src="pages2" />

        <VCardText class="position-relative">
          <!-- User Avatar -->
          <VAvatar
            size="75"
            class="avatar-center"
            :image="avatar1"
          />

          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-8">
            <div class="me-2 mb-2">
              <VCardTitle class="pa-0">
                Robert Meyer
              </VCardTitle>
              <VCardSubtitle class="text-caption pa-0">
                ロンドン、イギリス
              </VCardSubtitle>
            </div>
            <VBtn>リクエストを送信</VBtn>
          </div>

          <!--  Mutual Friends -->
          <div class="d-flex justify-space-between align-center mt-8">
            <span class="font-weight-medium">共通の友達18人</span>

            <div class="v-avatar-group">
              <VAvatar
                v-for="avatar in avatars"
                :key="avatar"
                :image="avatar"
                size="40"
              />
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Popular Uses Of The Internet -->
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCard>
        <VImg :src="pages3" />

        <VCardItem>
          <VCardTitle>インターネットの人気な用途</VCardTitle>
        </VCardItem>

        <VCardText>
          カードは複数のアクション、UIコントロール、オーバーフローメニューをサポートできます。
        </VCardText>

        <VCardActions>
          <VBtn @click="isCardDetailsVisible = !isCardDetailsVisible">
            詳細
          </VBtn>

          <VSpacer />

          <VBtn
            icon
            size="small"
            @click="isCardDetailsVisible = !isCardDetailsVisible"
          >
            <VIcon :icon="isCardDetailsVisible ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" />
          </VBtn>
        </VCardActions>

        <VExpandTransition>
          <div v-show="isCardDetailsVisible">
            <VDivider />
            <VCardText>
              私は物です。しかし、ほとんどの政治家と同様に、彼は実現できる以上のことを約束しました。兵士よ、あなたは寝る時間がないでしょう、ベッドメイキングの作業で忙しいからです。それでは、そのデータファイルを使いましょう！ねえ、それに1と2つのゼロを追加するか、さもなければ私たちは去ります！あなたは彼の洗濯をするつもりですか？私は脱出する方法を見つけなければなりません。
            </VCardText>
          </div>
        </VExpandTransition>
      </VCard>
    </VCol>

    <!-- 👉 Apple iPhone 11 Pro -->
    <VCol
      sm="6"
      cols="12"
    >
      <VCard>
        <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
          <div class="ma-auto pa-5">
            <VImg
              width="137"
              height="176"
              :src="eCommerce2"
            />
          </div>

          <VDivider :vertical="$vuetify.display.mdAndUp" />

          <div>
            <VCardItem>
              <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
            </VCardItem>

            <VCardText>
              Apple iPhone 11 Proスマートフォン。2019年9月発表。5.8インチディスプレイ、Apple A13 Bionic搭載
            </VCardText>

            <VCardText class="text-subtitle-1">
              <span>価格：</span> <span class="font-weight-medium">$899</span>
            </VCardText>

            <VCardActions class="justify-space-between">
              <VBtn>
                <VIcon icon="ri-shopping-cart-line" />
                <span class="ms-2">カートに追加</span>
              </VBtn>

              <VBtn
                color="secondary"
                icon="ri-share-line"
              />
            </VCardActions>
          </div>
        </div>
      </VCard>
    </VCol>

    <!-- 👉 Stump town Roasters. -->
    <VCol
      sm="6"
      cols="12"
    >
      <VCard>
        <div class="d-flex flex-column-reverse flex-md-row">
          <div>
            <VCardItem>
              <VCardTitle>スタンプタウンロースターズ</VCardTitle>
            </VCardItem>

            <VCardText class="d-flex align-center flex-wrap text-body-1">
              <VRating
                :model-value="5"
                readonly
                class="me-3"
                density="compact"
              />
              <span>5つ星 | 98件のレビュー</span>
            </VCardText>

            <VCardText>
              アメリカ合衆国ができる前から、コーヒーハウスは存在していました。なぜなら、どのようにして国を建設するのでしょうか。
            </VCardText>

            <VCardActions>
              <VBtn>場所</VBtn>
              <VBtn>レビュー</VBtn>
            </VCardActions>
          </div>

          <div class="ma-auto pa-5">
            <VImg
              :width="176"
              :src="pages5"
              class="rounded"
            />
          </div>
        </div>
      </VCard>
    </VCol>

    <!-- 👉 Apple Watch card -->
    <VCol
      lg="4"
      sm="6"
      cols="12"
    >
      <VCard>
        <VImg :src="pages6" />

        <VCardItem>
          <VCardTitle>Apple Watch</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="font-weight-medium text-base">
            $249.40
          </p>

          <p class="mb-0">
            3.1GHz 6コア 第10世代Intel Core i5プロセッサー、最大4.5GHzまでターボブースト
          </p>
        </VCardText>

        <VBtn
          block
          class="rounded-t-0"
        >
          Add to cart
        </VBtn>
      </VCard>
    </VCol>

    <!-- 👉 Lifetime Membership -->
    <VCol
      md="6"
      lg="8"
      cols="12"
    >
      <VCard>
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="8"
            md="12"
            lg="7"
            order="2"
            order-lg="1"
          >
            <VCardItem>
              <VCardTitle>Lifetime Membership</VCardTitle>
            </VCardItem>

            <VCardText>
              Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.
            </VCardText>

            <VCardText>
              <VDivider />
            </VCardText>

            <VCardText class="d-flex justify-center">
              <div class="me-auto pe-4">
                <p class="d-flex align-center mb-6">
                  <VIcon
                    color="primary"
                    icon="ri-lock-unlock-line"
                  />
                  <span class="ms-3">Full Access</span>
                </p>

                <p class="d-flex align-center mb-0">
                  <VIcon
                    color="primary"

                    icon="ri-user-line"
                  />
                  <span class="ms-3">15 Members</span>
                </p>
              </div>

              <VDivider
                v-if="$vuetify.display.smAndUp"
                vertical
                inset
              />

              <div class="ms-auto ps-4">
                <p class="d-flex align-center mb-6">
                  <VIcon
                    color="primary"
                    icon="ri-star-line"
                  />
                  <span class="ms-3">Access all Features</span>
                </p>

                <p class="d-flex align-center mb-0">
                  <VIcon
                    color="primary"
                    icon="ri-pie-chart-2-line"
                  />
                  <span class="ms-3">Lifetime Free Update</span>
                </p>
              </div>
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            sm="4"
            md="12"
            lg="5"
            order="1"
            order-lg="2"
            class="member-pricing-bg text-center"
          >
            <div class="membership-pricing d-flex flex-column align-center py-14 h-100 justify-center">
              <p class="mb-5">
                <sub class="text-h5">$</sub>
                <sup class="text-h2 font-weight-medium">899</sup>
                <sub class="text-h5">USD</sub>
              </p>

              <p class="text-sm">
                5 Tips For Offshore <br> Software Development
              </p>

              <VBtn class="mt-8">
                Contact Now
              </VBtn>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- 👉 Influencing The Influencer -->
    <VCol
      cols="12"
      lg="4"
      md="6"
    >
      <VCard title="Influencing The Influencer">
        <VCardText>
          Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch.
        </VCardText>

        <VCardText>
          If you're in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here's a rundown of some of the best systems available.
        </VCardText>

        <VCardActions>
          <VBtn>Read More</VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <!-- 👉 The Best Answers -->
    <VCol
      cols="12"
      lg="4"
      md="6"
    >
      <VCard title="The Best Answers">
        <VCardText class="d-flex align-center flex-wrap">
          <VRating
            :model-value="5"
            readonly
            density="compact"
            class="me-3"
          />
          <span class="text-subtitle-2">5 Star | 98 reviews</span>
        </VCardText>

        <VCardText>
          If you are looking for a new way to promote your business that won't cost you more money, maybe printing is one of the options you won't resist.
        </VCardText>

        <VCardText>
          become fast, easy and simple. If you want your promotional material to be an eye-catching
        </VCardText>

        <VCardActions>
          <VBtn>Location</VBtn>
          <VBtn>Reviews</VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <!-- 👉 Support -->
    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <VCard class="text-center">
        <VCardText class="d-flex flex-column justify-center align-center">
          <VAvatar
            color="primary"
            variant="outlined"
            size="50"
            class="mb-4"
          >
            <VIcon
              size="2rem"
              icon="ri-question-line"
            />
          </VAvatar>

          <h6 class="text-h6">
            Support
          </h6>
        </VCardText>

        <VCardText>
          <p>
            According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle.
          </p>
        </VCardText>

        <VCardText class="justify-center">
          <VBtn variant="elevated">
            Contact Now
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
