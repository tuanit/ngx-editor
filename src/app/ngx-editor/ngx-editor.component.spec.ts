import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxEditorComponent } from './ngx-editor.component';
import { NgxEditorToolbarComponent } from './ngx-editor-toolbar/ngx-editor-toolbar.component';
import { CommandExecutorService } from './common/services/command-executor.service';
import { MessengerComponent } from './addons/messenger/messenger.component';
import { GrippieComponent } from './addons/grippie/grippie.component';
import { MessengerService } from './addons/messenger/services/messenger.service';

describe('NgxEditorComponent', () => {
  let component: NgxEditorComponent;
  let fixture: ComponentFixture<NgxEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [MessengerService, CommandExecutorService],
      declarations: [NgxEditorComponent,
        GrippieComponent,
        NgxEditorToolbarComponent,
        MessengerComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
