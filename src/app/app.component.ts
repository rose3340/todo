import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from "./component/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SidebarComponent, HeaderComponent]
})
export class AppComponent {
  title = 'toodo-app';
}
