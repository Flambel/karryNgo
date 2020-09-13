import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpNotesComponent } from './help-notes.component';


describe('HelpNotesComponent', () => {
    let component: HelpNotesComponent;
    let fixture: ComponentFixture<HelpNotesComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [HelpNotesComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HelpNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
