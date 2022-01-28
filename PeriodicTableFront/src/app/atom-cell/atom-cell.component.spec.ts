import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomCellComponent } from './atom-cell.component';

describe('AtomCellComponent', () => {
  let component: AtomCellComponent;
  let fixture: ComponentFixture<AtomCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
