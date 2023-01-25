import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StekComponent } from './stek.component';

describe('StekComponent', () => {
  let component: StekComponent;
  let fixture: ComponentFixture<StekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
