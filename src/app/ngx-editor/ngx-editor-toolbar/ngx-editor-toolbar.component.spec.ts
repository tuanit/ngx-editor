import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxEditorToolbarComponent } from './ngx-editor-toolbar.component';
import { ngxEditorConfig } from '../common/ngx-editor.defaults';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessengerService } from '../addons/messenger/services/messenger.service';

describe('NgxEditorToolbarComponent', () => {
  let component: NgxEditorToolbarComponent;
  let fixture: ComponentFixture<NgxEditorToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [NgxEditorToolbarComponent],
      providers: [CommandExecutorService, MessengerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEditorToolbarComponent);
    component = fixture.componentInstance;
    component.config = ngxEditorConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
