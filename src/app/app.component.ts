import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LargeComponentComponent } from '@components/large-component/large-component.component';
import { InitialContentComponent } from '@components/initial-content/initial-content.component';
import { LoadingSpinnerComponent } from '@components/loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from '@components/error-message/error-message.component';

@Component({
  selector: 'df-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LargeComponentComponent,
    InitialContentComponent,
    LoadingSpinnerComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly title: string = 'Defer Angular';
}
