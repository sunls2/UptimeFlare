// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "sunls24's Status Page",
  links: [
    { link: 'https://github.com/sunls24', label: 'GitHub' },
    { link: 'https://www.sunls.de', label: '主页' },
  ],
  group: {
    '🌐 WEB': ['x-mail', 'x-divination', 'x-images'],
    '🖥️ VPS': ['vps-la', 'vps-sj', 'vps-sg', 'vps-kr'],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 5,
  monitors: [
    {
      id: 'vps-la',
      name: 'VPS - LA',
      method: 'TCP_PING',
      target: 'la.sunls.de:80',
      timeout: 5000,
    },
    {
      id: 'vps-sj',
      name: 'VPS - SJ',
      method: 'TCP_PING',
      target: 'sj.sunls.de:80',
      timeout: 5000,
    },
    {
      id: 'vps-sg',
      name: 'VPS - SG',
      method: 'TCP_PING',
      target: 'sg.sunls.de:80',
      timeout: 5000,
    },
    {
      id: 'vps-kr',
      name: 'VPS - KR',
      method: 'TCP_PING',
      target: 'kr.sunls.de:80',
      timeout: 5000,
    },
    {
      id: 'x-mail',
      name: '临时邮箱',
      method: 'GET',
      target: 'https://mail.sunls.de',
      statusPageLink: 'https://mail.sunls.de',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'x-divination',
      name: '知命阁',
      method: 'GET',
      target: 'https://divination.sunls.de',
      statusPageLink: 'https://divination.sunls.de',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'x-images',
      name: 'SceneMint Pro (AI 生图)',
      method: 'GET',
      target: 'https://images.sunls.de/',
      statusPageLink: 'https://images.sunls.de/',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // DingTalk webhook relay.
    webhook: {
      url: 'https://dingtalk.sunls.workers.dev/',
      method: 'POST',
      tokenEnv: 'DINGTALK_TOKEN',
      payloadType: 'json',
      payload: {
        msgtype: 'text',
        text: {
          content: '$MSG',
        },
      },
      timeout: 5000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 1,
    skipErrorChangeNotification: false,
  },
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
