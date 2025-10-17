import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Software Engineer';
  name = 'Muhammad Hilman Bin Johari';
  description = 'Full-Stack Developer specializing in .NET, C#, and modern web technologies';
}