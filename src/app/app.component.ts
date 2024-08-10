import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from "./components/nabvar/nabvar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NabvarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-WebII';
}
