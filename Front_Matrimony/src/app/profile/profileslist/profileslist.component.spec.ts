import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileslistComponent } from './profileslist.component';

describe('ProfileslistComponent', () => {
  let component: ProfileslistComponent;
  let fixture: ComponentFixture<ProfileslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
