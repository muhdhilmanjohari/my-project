import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'C#', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 85 },
        { name: 'VB.NET', level: 85 },
        { name: 'PHP', level: 70 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: [
        { name: 'ASP.NET MVC', level: 90 },
        { name: 'Blazor', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'jQuery', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'WordPress', level: 70 }
      ]
    },
    {
      title: 'Database & Backend',
      icon: '🗄️',
      skills: [
        { name: 'MS SQL Server', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Stored Procedures', level: 85 },
        { name: '.NET Framework', level: 90 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Unity', level: 75 },
        { name: 'Zabbix', level: 70 },
        { name: 'SAP', level: 75 },
        { name: 'DevExtreme', level: 80 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      skills: [
        { name: 'Team Collaboration', level: 90 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 85 },
        { name: 'Continuous Learning', level: 95 }
      ]
    }
  ];

  languages = [
    { name: 'Malay', proficiency: 'Native', level: 100 },
    { name: 'English', proficiency: 'Professional', level: 85 }
  ];
}