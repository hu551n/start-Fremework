import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoumeComponent } from './houme.component';

describe('HoumeComponent', () => {
  let component: HoumeComponent;
  let fixture: ComponentFixture<HoumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
