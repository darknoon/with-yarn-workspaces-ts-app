import foo from 'foo'
import { bar } from 'bar'
import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, resp: NowResponse) => {
  resp.json({ foo, bar })
}
