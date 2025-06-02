<script setup>
import americanBank from '@images/logos/american-bank.png'
import aws from '@images/logos/aws.png'
import citiBank from '@images/logos/citi-bank.png'
import digitalOcean from '@images/logos/digital-ocean.png'
import github from '@images/logos/github.png'
import google from '@images/logos/google.png'
import gumroad from '@images/logos/gumroad.png'
import mastercardLabel from '@images/logos/mastercard-label.png'
import slack from '@images/logos/slack.png'
import stripe from '@images/logos/stripe.png'

const deposits = [
  {
    title: 'Gumroadアカウント',
    subtitle: 'UIキット販売',
    amount: '+$4,650',
    logo: gumroad,
  },
  {
    title: 'Mastercard',
    subtitle: 'ウォレット入金',
    amount: '+$92,705',
    logo: mastercardLabel,
  },
  {
    title: 'Stripeアカウント',
    subtitle: 'iOSアプリケーション',
    amount: '+$957',
    logo: stripe,
  },
  {
    title: 'アメリカン銀行',
    subtitle: 'アメリカン銀行',
    amount: '+$6,837',
    logo: americanBank,
  },
  {
    title: '銀行口座',
    subtitle: 'ウォレット入金',
    amount: '+$8,934',
    logo: citiBank,
  },
]

const withdraws = [
  {
    title: 'Google Adsense',
    subtitle: 'PayPal入金',
    amount: '-$145',
    logo: google,
  },
  {
    title: 'GitHub Enterprise',
    subtitle: 'セキュリティとコンプライアンス',
    amount: '-$1870',
    logo: github,
  },
  {
    title: 'Slackプランアップグレード',
    subtitle: 'デビットカード入金',
    amount: '-$450',
    logo: slack,
  },
  {
    title: 'DigitalOcean',
    subtitle: 'クラウドホスティング',
    amount: '-$540',
    logo: digitalOcean,
  },
  {
    title: 'AWSアカウント',
    subtitle: 'クラウドプラットフォーム選択',
    amount: '-$21',
    logo: aws,
  },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="6"
      >
        <VCardItem>
          <VCardTitle>入金</VCardTitle>

          <template #append>
            <h6 class="text-h6">
              <a
                href="javascript:void(0)"
                class="text-primary"
              >すべて表示</a>
            </h6>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="deposit in deposits"
              :key="deposit.logo"
            >
              <template #prepend>
                <div class="me-4">
                  <VImg
                    :height="30"
                    :width="30"
                    :src="deposit.logo"
                  />
                </div>
              </template>

              <VListItemTitle class="font-weight-medium mb-1">
                {{ deposit.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-body-1">
                {{ deposit.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction class="text-success font-weight-medium">
                  {{ deposit.amount }}
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>

      <VDivider :vertical="$vuetify.display.mdAndUp" />

      <VCol
        cols="12"
        md="6"
      >
        <VCardItem>
          <VCardTitle>出金</VCardTitle>

          <template #append>
            <h6 class="text-h6">
              <a
                href="javascript:void(0)"
                class="text-primary"
              >すべて表示</a>
            </h6>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="withdraw in withdraws"
              :key="withdraw.logo"
            >
              <template #prepend>
                <div class="me-4">
                  <VImg
                    :height="30"
                    :width="30"
                    :src="withdraw.logo"
                  />
                </div>
              </template>

              <VListItemTitle class="font-weight-medium mb-1">
                {{ withdraw.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-body-1">
                {{ withdraw.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction>
                  <span class="text-error font-weight-medium">
                    {{ withdraw.amount }}
                  </span>
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.25rem;
}
</style>
