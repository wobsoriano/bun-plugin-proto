declare module '*.proto' {
  import { PackageDefinition } from '@grpc/proto-loader';
  const content: PackageDefinition;
  export default content;
}
