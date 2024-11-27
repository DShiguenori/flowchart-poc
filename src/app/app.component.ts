import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowchartComponent } from './flowchart/flowchart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlowchartComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'flowchart-poc';
}
