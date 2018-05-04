import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxEditorComponent } from './ngx-editor.component';
import { GrippieComponent } from './addons/grippie/grippie.component';
import { NgxEditorToolbarComponent } from './ngx-editor-toolbar/ngx-editor-toolbar.component';
import { CommandExecutorService } from './common/services/command-executor.service';
import { MessengerComponent } from './addons/messenger/messenger.component';
import { MessengerService } from './addons/messenger/services/messenger.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [NgxEditorComponent, GrippieComponent, NgxEditorToolbarComponent, MessengerComponent],
  exports: [NgxEditorComponent],
  providers: [CommandExecutorService, MessengerService]
})

export class NgxEditorModule { }
