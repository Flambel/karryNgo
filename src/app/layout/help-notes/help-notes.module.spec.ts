import { HelpNotesModule } from './help-notes.module';

describe('ListUserModule', () => {
    let helpNotesModule: HelpNotesModule;
    // let blankPageModule: ListUserModule;

    beforeEach(() => {
        helpNotesModule = new HelpNotesModule();
        // ListUserModule = new ListUserModule();
    });

    it('should create an instance', () => {
        expect(helpNotesModule).toBeTruthy();
        // expect(ListUserModule).toBeTruthy();
    });
});
