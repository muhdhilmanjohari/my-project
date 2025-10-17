import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experiences = [
    {
      company: 'Asolute Sdn Bhd',
      position: 'Software Engineer',
      location: 'Bayan Lepas, Penang',
      period: 'Current',
      responsibilities: [
        'Develop and maintain full-stack web applications using ASP.NET MVC, C#, VB.NET, jQuery, and DevExtreme',
        'Execute and integrate stored procedures from MS SQL Server',
        'Design and implement mobile-friendly views',
        'Generate logistics reports for cargo tracking'
      ]
    },
    {
      company: 'Aspiro Sdn Bhd',
      position: 'Junior Software Developer',
      location: 'Shah Alam, Selangor',
      period: '2023 – 2025',
      responsibilities: [
        'Develop efficient RPA bots for SAP automation using C#',
        'Design and implement company portal using Blazor and .NET',
        'Provide operational support and troubleshooting',
        'VM monitoring and maintenance using Zabbix'
      ]
    },
    {
      company: 'Cisly Technology',
      position: 'Website Development Intern',
      location: 'Bayan Lepas, Penang',
      period: 'March 2023 – August 2023',
      responsibilities: [
        'Convert static websites to e-commerce using WordPress',
        'Enhanced functionality with custom PHP features',
        'Managed site upkeep and content updates'
      ]
    }
  ];

  education = [
    {
      degree: 'Bachelor of Computer Science (HONS.)',
      institution: 'Universiti Teknologi MARA',
      location: 'Tapah, Perak',
      cgpa: '3.52',
      period: 'March 2021 – August 2023'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Universiti Teknologi MARA',
      location: 'Tapah, Perak',
      cgpa: '3.51',
      period: 'Graduated June 2021'
    }
  ];
}