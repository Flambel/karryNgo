import { ListUserModule } from './list-users.module';

describe('ListUserModule', () => {
    let listUserModule: ListUserModule;
    // let blankPageModule: ListUserModule;

    beforeEach(() => {
        listUserModule = new ListUserModule();
        // ListUserModule = new ListUserModule();
    });

    it('should create an instance', () => {
        expect(listUserModule).toBeTruthy();
        // expect(ListUserModule).toBeTruthy();
    });
});
