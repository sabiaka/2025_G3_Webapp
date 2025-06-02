<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'ダッシュボード',
      icon: 'ri-home-smile-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: '分析',
        to: '/dashboard',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 Front Pages -->
  <VerticalNavGroup
    :item="{
      title: 'フロントページ',
      icon: 'ri-file-copy-line',
      // badgeContent: 'Pro',
      // badgeClass: 'bg-light-primary text-primary',
    }"
  >
    
  </VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'アプリとページ',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'アカウント設定',
      icon: 'ri-user-settings-line',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'ログイン',
      icon: 'ri-login-box-line',
      to: '/login',
    }"
  />
  <VerticalNavLink
    :item="{
      title: '登録',
      icon: 'ri-user-add-line',
      to: '/register',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'エラー',
      icon: 'ri-information-line',
      to: '/no-existence',
    }"
  />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'ユーザーインターフェース',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'タイポグラフィ',
      icon: 'ri-text',
      to: '/typography',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'アイコン',
      icon: 'ri-remixicon-line',
      to: '/icons',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'カード',
      icon: 'ri-bar-chart-box-line',
      to: '/cards',
    }"
  />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'フォームとテーブル',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'フォームレイアウト',
      icon: 'ri-layout-4-line',
      to: '/form-layouts',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'テーブル',
      icon: 'ri-table-alt-line',
      to: '/tables',
    }"
  />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'その他',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'ドキュメント',
      icon: 'ri-article-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/',
      target: '_blank',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'サポート',
      href: 'https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/issues',
      icon: 'ri-lifebuoy-line',
      target: '_blank',
    }"
  />
</template>
