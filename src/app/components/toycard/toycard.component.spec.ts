import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToycardComponent } from './toycard.component';

describe('ToycardComponent', () => {
  let component: ToycardComponent;
  let fixture: ComponentFixture<ToycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToycardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
