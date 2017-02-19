import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRollComponent } from './photo-roll.component';

describe('PhotoRollComponent', () => {
  let component: PhotoRollComponent;
  let fixture: ComponentFixture<PhotoRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
