import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSnapshotComponent } from './recipe-snapshot.component';

describe('RecipeSnapshotComponent', () => {
  let component: RecipeSnapshotComponent;
  let fixture: ComponentFixture<RecipeSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
