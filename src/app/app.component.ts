import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .bottom-row {
      height: 1em;
    }

    .title {
      font-size: 0.85em;
      margin: auto;
    }

    .subtitle {
      font-size: 0.65em;
      margin: -1.3em auto auto auto;
      padding-left: 1.9em;
    }
  `]
})
export class AppComponent {
}
