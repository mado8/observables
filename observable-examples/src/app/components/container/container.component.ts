import { 
  Component,
  Input
 } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() title: string | undefined
  @Input() content: any | undefined
}