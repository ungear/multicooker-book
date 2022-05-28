import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatTypeSelectorComponent } from './meat-type-selector.component';

describe('MeatTypeSelectorComponent', () => {
  let component: MeatTypeSelectorComponent;
  let fixture: ComponentFixture<MeatTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
