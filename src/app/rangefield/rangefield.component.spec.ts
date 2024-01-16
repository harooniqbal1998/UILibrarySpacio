import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangefieldComponent } from './rangefield.component';

describe('RangefieldComponent', () => {
  let component: RangefieldComponent;
  let fixture: ComponentFixture<RangefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangefieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
