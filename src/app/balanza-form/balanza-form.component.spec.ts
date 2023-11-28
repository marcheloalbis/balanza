import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanzaFormComponent } from './balanza-form.component';

describe('BalanzaFormComponent', () => {
  let component: BalanzaFormComponent;
  let fixture: ComponentFixture<BalanzaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanzaFormComponent]
    });
    fixture = TestBed.createComponent(BalanzaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
