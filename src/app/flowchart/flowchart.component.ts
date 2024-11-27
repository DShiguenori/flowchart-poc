import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VflowModule } from 'ngx-vflow';
import { Node, Edge } from 'ngx-vflow';

@Component({
  selector: 'app-flowchart',
  standalone: true,
  templateUrl: './flowchart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VflowModule],
})
export class FlowchartComponent {
  public nodes: Node[] = [
    {
      id: '1',
      point: { x: 10, y: 200 },
      type: 'default',
      text: 'Inscrições',
    },
    {
      id: '2',
      point: { x: 200, y: 100 },
      type: 'default',
      text: '2',
    },
    {
      id: '3',
      point: { x: 200, y: 300 },
      type: 'default',
      text: '3',
    },
  ];

  public edges: Edge[] = [
    {
      id: '1 -> 2',
      source: '1',
      target: '2',
    },
    {
      id: '1 -> 3',
      source: '1',
      target: '3',
    },
  ];
}
