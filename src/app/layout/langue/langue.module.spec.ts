import { LangueModule } from './langue.module';

describe('LangueModule', () => {
  let langueModule: LangueModule;

  beforeEach(() => {
    langueModule = new LangueModule();
  });

  it('should create an instance', () => {
    expect(langueModule).toBeTruthy();
  });
});
