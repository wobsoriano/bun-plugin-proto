import protobuf from 'protobufjs';
import { fromJSON } from '@grpc/proto-loader';
import type { Options } from '@grpc/proto-loader';

export default function protoPlugin(options?: Options): import('bun').BunPlugin {
  return {
    name: 'bun-plugin-proto',
    setup(build) {
      build.onLoad({ filter: /\.proto$/ }, async (args) => {
        const file = Bun.file(args.path)
        const text = await file.text()

        const parsed = protobuf.parse(text);
        const contents = fromJSON(parsed.root.toJSON(), options || {})

        return {
          contents: `export default ${JSON.stringify(contents)}`,
          loader: 'js'
        };
      });
    },
  };
}
