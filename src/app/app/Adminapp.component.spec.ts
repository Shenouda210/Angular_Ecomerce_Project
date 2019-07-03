import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAppComponent } from './Adminapp.component';

describe('AdminAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AdminAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'progectAngular'`, () => {
    const fixture = TestBed.createComponent(AdminAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('progectAngular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AdminAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to progectAngular!');
  });
});
