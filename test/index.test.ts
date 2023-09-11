import { expect, test } from 'bun:test'
import protoPlugin from '../src'

Bun.plugin(protoPlugin())

test('generate result given message proto file', async () => {
  const { default: proto } = await import('./user.proto')
  expect(proto).toMatchSnapshot()
})
