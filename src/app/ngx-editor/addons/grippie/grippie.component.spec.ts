import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GrippieComponent } from './grippie.component';
import { NgxEditorComponent } from '../../ngx-editor.component';
import { MessengerService } from '../messenger/services/messenger.service';
import { CommandExecutorService } from '../../common/services/command-executor.service';

describe('GrippieComponent', () => {
  let component: GrippieComponent;
  let fixture: ComponentFixture<GrippieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GrippieComponent],
      providers: [
        NgxEditorComponent,
        MessengerService,
        CommandExecutorService,
        { provide: ElementRef, useValue: this.elementRef },
        { provide: Renderer2, useValue: this.renderer }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrippieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
