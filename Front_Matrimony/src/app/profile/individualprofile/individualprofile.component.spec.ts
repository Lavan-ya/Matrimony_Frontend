import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualprofileComponent } from './individualprofile.component';

describe('IndividualprofileComponent', () => {
  let component: IndividualprofileComponent;
  let fixture: ComponentFixture<IndividualprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
