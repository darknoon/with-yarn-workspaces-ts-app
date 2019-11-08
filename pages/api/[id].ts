import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, resp: NowResponse) => {
  const { id } = req.query
  resp.json({ id })
}
