import preactRefresh from '@prefresh/vite'
import { resolve } from 'path'
// eslint-disable-next-line sort-imports
import type { UserConfig } from 'vite'

const config: UserConfig = {
  alias: {
    '/@/': resolve(__dirname, 'src'),
  },
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  plugins: [preactRefresh()],
  port: 8000,
}

export default config
