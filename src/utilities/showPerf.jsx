import env from '@/constants/env'
import { Perf } from 'r3f-perf'

const showPerf = () => {
  if (process.env.NODE_ENV === env.DEVELOPMENT) {
    return <Perf position='bottom-left' />wdwd
  }
}

export default showPerf
