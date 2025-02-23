const pageConfig = {
  title: "sunls24's Status Page",
  links: [
    { link: "https://github.com/sunls24", label: "GitHub" },
    { link: "https://www.sunls.de", label: "主页" },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 5,
  monitors: [
    {
      id: "vps-dmit",
      name: "VPS - DMIT",
      method: "TCP_PING",
      target: "dmit.sunls.de:24",
      timeout: 5000,
    },
    {
      id: "vps-orus",
      name: "VPS - Oracle - us",
      method: "TCP_PING",
      target: "orus.sunls.de:24",
      timeout: 5000,
    },
    {
      id: "vps-orsg",
      name: "VPS - Oracle - sg",
      method: "TCP_PING",
      target: "orsg.sunls.de:24",
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
      id: "x-mail",
      name: "AI 算卦",
      method: "GET",
      target: "https://divination.sunls.de",
      statusPageLink: "https://divination.sunls.de",
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

export { pageConfig, workerConfig }
