import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestedadosComponent } from './testedados.component';

describe('TestedadosComponent', () => {
  let component: TestedadosComponent;
  let fixture: ComponentFixture<TestedadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestedadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestedadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
