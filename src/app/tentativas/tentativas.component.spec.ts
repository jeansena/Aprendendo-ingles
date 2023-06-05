import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentativasComponent } from './tentativas.component';

describe('TentativasComponent', () => {
  let component: TentativasComponent;
  let fixture: ComponentFixture<TentativasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TentativasComponent]
    });
    fixture = TestBed.createComponent(TentativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
