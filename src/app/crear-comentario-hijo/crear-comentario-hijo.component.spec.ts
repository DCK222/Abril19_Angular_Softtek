import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComentarioHijoComponent } from './crear-comentario-hijo.component';

describe('CrearComentarioHijoComponent', () => {
  let component: CrearComentarioHijoComponent;
  let fixture: ComponentFixture<CrearComentarioHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearComentarioHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearComentarioHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
