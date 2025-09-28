import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "sunls24's Status Page",
  links: [
    { link: "https://github.com/sunls24", label: "GitHub" },
    { link: "https://www.sunls.de", label: "主页" },
  ],
  group: {
    "🌐 WEB": ['x-sunls24', 'x-mail', 'x-divination'],
    "🖥️ VPS": ['vps-dmit', 'vps-orus', 'vps-orsg'],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 5,
  monitors: [
    {
      id: "vps-dmit",
      name: "VPS - DMIT",
      method: "TCP_PING",
      target: "dmit.sunls.de:80",
      timeout: 5000,
    },
    {
      id: "vps-orus",
      name: "VPS - Oracle - US",
      method: "TCP_PING",
      target: "orus.sunls.de:80",
      timeout: 5000,
    },
    {
      id: "vps-orsg",
      name: "VPS - Oracle - SG",
      method: "TCP_PING",
      target: "orsg.sunls.de:80",
      timeout: 5000,
    },
    {
      id: "x-sunls24",
      name: "个人主页",
      method: "GET",
      target: "https://www.sunls.de",
      statusPageLink: "https://www.sunls.de",
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: "x-mail",
      name: "临时邮箱",
      method: "GET",
      target: "https://mail.sunls.de",
      statusPageLink: "https://mail.sunls.de",
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: "x-divination",
      name: "AI 算卦",
      method: "GET",
      target: "https://divination.sunls.de",
      statusPageLink: "https://divination.sunls.de",
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  notification: {
    appriseApiServer: "https://apprise-sunls.vercel.app/notify",
    recipientUrl: "dingtalk://SEC263d9d961565c76cd4327fed2a2edf03222a93098c07fdaec3a7e4c3daa0a53f@a345a11be142eec52d42e569357dab57d2a56d9bf261a74bdcab5fc73eec06a5/",
    timeZone: "Asia/Shanghai",
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }

