import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {

  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: []
    });

    fixture = TestBed
      .overrideTemplate(AppComponent, '')
      .createComponent(AppComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
