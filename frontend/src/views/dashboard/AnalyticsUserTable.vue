<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const headers = [
  {
    title: 'ユーザー',
    key: 'username',
  },
  {
    title: 'メールアドレス',
    key: 'email',
  },
  {
    title: '役割',
    key: 'role',
  },
  {
    title: 'ステータス',
    key: 'status',
  },
]

const userData = [
  {
    id: 1,
    fullName: 'Galasasen Slixby',
    company: 'Yotz PVT LTD',
    role: '編集者',
    username: 'gslixby0',
    country: 'エルサルバドル',
    contact: '(479) 232-9151',
    email: 'gslixby0@abc.net.au',
    currentPlan: 'エンタープライズ',
    status: '非アクティブ',
    avatar: avatar1,
  },
  {
    id: 2,
    fullName: 'Halsey Redmore',
    company: 'Skinder PVT LTD',
    role: '作成者',
    username: 'hredmore1',
    country: 'アルバニア',
    contact: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    currentPlan: 'チーム',
    status: '保留中',
    avatar: avatar2,
  },
  {
    id: 3,
    fullName: 'Marjory Sicely',
    company: 'Oozz PVT LTD',
    role: '管理者',
    username: 'msicely2',
    country: 'ロシア',
    contact: '(321) 264-4599',
    email: 'msicely2@who.int',
    currentPlan: 'エンタープライズ',
    status: 'アクティブ',
    avatar: avatar3,
  },
  {
    id: 4,
    fullName: 'Cyrill Risby',
    company: 'Oozz PVT LTD',
    role: '管理者',
    username: 'crisby3',
    country: '中国',
    contact: '(923) 690-6806',
    email: 'crisby3@wordpress.com',
    currentPlan: 'チーム',
    status: '非アクティブ',
    avatar: avatar4,
  },
  {
    id: 5,
    fullName: 'Maggy Hurran',
    company: 'Aimbo PVT LTD',
    role: '購読者',
    username: 'mhurran4',
    country: 'パキスタン',
    contact: '(669) 914-1078',
    email: 'mhurran4@yahoo.co.jp',
    currentPlan: 'エンタープライズ',
    status: '保留中',
    avatar: avatar5,
  },
  {
    id: 6,
    fullName: 'Silvain Halstead',
    company: 'Jaxbean PVT LTD',
    role: '作成者',
    username: 'shalstead5',
    country: '中国',
    contact: '(958) 973-3093',
    email: 'shalstead5@shinystat.com',
    currentPlan: '会社',
    status: 'アクティブ',
    avatar: avatar6,
  },
  {
    id: 7,
    fullName: 'Breena Gallemore',
    company: 'Jazzy PVT LTD',
    role: '購読者',
    username: 'bgallemore6',
    country: 'カナダ',
    contact: '(825) 977-8152',
    email: 'bgallemore6@boston.com',
    currentPlan: '会社',
    status: '保留中',
    avatar: avatar7,
  },
  {
    id: 8,
    fullName: 'Kathryne Liger',
    company: 'Pixoboo PVT LTD',
    role: '作成者',
    username: 'kliger7',
    country: 'フランス',
    contact: '(187) 440-0934',
    email: 'kliger7@vinaora.com',
    currentPlan: 'エンタープライズ',
    status: '保留中',
    avatar: avatar8,
  },
]

const resolveUserRoleVariant = role => {
  const roleLowerCase = role.toLowerCase()
  if (roleLowerCase === '購読者')
    return {
      color: 'success',
      icon: 'ri-user-line',
    }
  if (roleLowerCase === '作成者')
    return {
      color: 'error',
      icon: 'ri-computer-line',
    }
  if (roleLowerCase === '管理者')
    return {
      color: 'info',
      icon: 'ri-pie-chart-line',
    }
  if (roleLowerCase === '編集者')
    return {
      color: 'warning',
      icon: 'ri-edit-box-line',
    }
  if (roleLowerCase === '管理者')
    return {
      color: 'primary',
      icon: 'ri-vip-crown-line',
    }
  
  return {
    color: 'success',
    icon: 'ri-user-line',
  }
}

const resolveUserStatusVariant = stat => {
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === '保留中')
    return 'warning'
  if (statLowerCase === 'アクティブ')
    return 'success'
  if (statLowerCase === '非アクティブ')
    return 'secondary'
  
  return 'primary'
}
</script>

<template>
  <VCard>
    <VDataTable
      :headers="headers"
      :items="userData"
      item-value="id"
      class="text-no-wrap"
    >
      <!-- User -->
      <template #item.username="{ item }">
        <div class="d-flex align-center gap-x-4">
          <VAvatar
            size="34"
            :variant="!item.avatar ? 'tonal' : undefined"
            :color="!item.avatar ? resolveUserRoleVariant(item.role).color : undefined"
          >
            <VImg
              v-if="item.avatar"
              :src="item.avatar"
            />
          </VAvatar>

          <div class="d-flex flex-column">
            <h6 class="text-h6 font-weight-medium user-list-name">
              {{ item.fullName }}
            </h6>

            <span class="text-sm text-medium-emphasis">@{{ item.username }}</span>
          </div>
        </div>
      </template>
      <!-- Role -->
      <template #item.role="{ item }">
        <div class="d-flex gap-4">
          <VIcon
            :icon="resolveUserRoleVariant(item.role).icon"
            :color="resolveUserRoleVariant(item.role).color"
            size="22"
          />
          <div class="text-capitalize text-high-emphasis">
            {{ item.role }}
          </div>
        </div>
      </template>
      <!-- Plan -->
      <template #item.plan="{ item }">
        <span class="text-capitalize text-high-emphasis">{{ item.currentPlan }}</span>
      </template>
      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveUserStatusVariant(item.status)"
          size="small"
          class="text-capitalize"
        >
          {{ item.status }}
        </VChip>
      </template>

      <template #bottom />
    </VDataTable>
  </VCard>
</template>
