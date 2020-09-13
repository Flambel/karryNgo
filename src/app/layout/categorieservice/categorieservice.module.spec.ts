import { CategorieserviceModule } from './categorieservice.module';

describe('CategorieserviceModule', () => {
  let categorieserviceModule: CategorieserviceModule;

  beforeEach(() => {
    categorieserviceModule = new CategorieserviceModule();
  });

  it('should create an instance', () => {
    expect(categorieserviceModule).toBeTruthy();
  });
});
