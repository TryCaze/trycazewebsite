import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGridComponentComponent } from './icon-grid-component.component';

describe('IconGridComponentComponent', () => {
  let component: IconGridComponentComponent;
  let fixture: ComponentFixture<IconGridComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconGridComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
