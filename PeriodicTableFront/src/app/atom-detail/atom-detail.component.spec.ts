import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomDetailComponent } from './atom-detail.component';

describe('AtomDetailComponent', () => {
  let component: AtomDetailComponent;
  let fixture: ComponentFixture<AtomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
