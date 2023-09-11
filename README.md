# bun-plugin-proto

Adds support for .proto imports in Bun.

## Installation

```bash
bun add bun-plugin-proto -d
```

## Bundler usage

```ts
import proto from "bun-plugin-proto";

Bun.build({
  // other config
  plugins: [
    proto()
  ],
});
```

In your sources you can now import proto files

```ts
import packageDefinition from './file.proto'

console.log(packageDefinition)
```

The contents of the packageDefinition will be inlined into your bundle.

## Runtime usage

To use as a runtime plugin, create a file that registers the plugin:

```ts
// proto.ts
import proto from 'bun-plugin-proto'

Bun.plugin(proto({}));
```

Then preload it in your `bunfig.toml`:

```toml
preload = ['./proto.ts']
```

## License

MIT
