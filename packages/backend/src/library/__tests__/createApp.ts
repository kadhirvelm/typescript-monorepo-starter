import type { DynamicModule, ForwardReference, Type } from "@nestjs/common";
import { Test } from "@nestjs/testing";

export async function createTestApp(
  modules: (
    | Type<unknown>
    | DynamicModule
    | Promise<DynamicModule>
    | ForwardReference<unknown>
  )[],
) {
  const moduleRef = await Test.createTestingModule({
    imports: modules,
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return app;
}
