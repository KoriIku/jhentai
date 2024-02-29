import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';
import icon from "./assert/icon.svg"

const config: DocsThemeConfig = {
  logo: (<><Image src={icon} alt='' height={16}/><span style={{ marginLeft: '0.4rem' }}>Jhentai Wiki</span></>),
  project: {
    link: 'https://github.com/jiangtian616/JHenTai',
  },
  chat: {
    link: 'https://t.me/+PindoE9yvIpmOWI9',
  },
  docsRepositoryBase: 'https://github.com/KoriIku/jhentai/tree/main',
  footer: {
    text: '最好用的跨平台 e-hentai 客户端',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Jhentai Wiki'
    }
  }
}

export default config
