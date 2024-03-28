import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StaetService } from '../../services/staet.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
}
