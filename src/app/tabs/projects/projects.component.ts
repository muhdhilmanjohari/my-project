import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Tour Guide UiTM Tapah using AR',
      type: 'Final Year Project',
      period: 'March 2022 – Feb 2023',
      description: 'Comprehensive augmented reality project developed on the Unity platform with Vuforia AR SDK, optimized for Android mobile devices.',
      technologies: ['Unity', 'C#', 'Vuforia AR SDK', 'Android'],
      highlights: [
        'Researched and implemented Augmented Reality technology',
        'Developed interactive AR experience for campus tour',
        'Optimized for mobile performance',
        'Enhanced user experience through C# coding'
      ]
    },
    {
      title: 'Full-Stack Logistics Web Application',
      type: 'Professional Project',
      period: 'Current',
      description: 'Comprehensive web application for cargo tracking and logistics management using ASP.NET MVC with mobile-responsive design.',
      technologies: ['ASP.NET MVC', 'C#', 'VB.NET', 'MS SQL Server', 'jQuery', 'DevExtreme'],
      highlights: [
        'Developed full-stack web applications',
        'Integrated stored procedures for backend logic',
        'Created mobile-friendly responsive views',
        'Generated logistics reports for business insights'
      ]
    },
    {
      title: 'RPA SAP Automation System',
      type: 'Professional Project',
      period: '2023 – 2025',
      description: 'Efficient RPA bots for SAP automation with comprehensive database management and process optimization.',
      technologies: ['C#', 'SQL', 'SAP', 'Windows Service', 'Task Scheduler'],
      highlights: [
        'Developed automated RPA bots for SAP',
        'Implemented CRUD operations and stored procedures',
        'Optimized task execution with Windows Service',
        'Provided operational support and troubleshooting'
      ]
    },
    {
      title: 'Company Portal using Blazor',
      type: 'Professional Project',
      period: '2023 – 2025',
      description: 'User-friendly company portal built with modern Blazor framework and .NET technologies for internal operations.',
      technologies: ['Blazor', '.NET', 'C#', 'SQL'],
      highlights: [
        'Designed and implemented company portal',
        'Created intuitive user interface',
        'Integrated with backend systems',
        'Enhanced operational efficiency'
      ]
    },
    {
      title: 'E-Commerce WordPress Conversion',
      type: 'Internship Project',
      period: 'March 2023 – August 2023',
      description: 'Converted static websites to fully functional e-commerce platforms using WordPress with custom features.',
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      highlights: [
        'Converted static sites to e-commerce',
        'Enhanced functionality with custom PHP',
        'Implemented unique CSS design',
        'Managed site maintenance and updates'
      ]
    },
    {
      title: 'Enterprise Programming for E-Commerce',
      type: 'Academic Project',
      period: '2021 – 2023',
      description: 'Developed e-commerce platform with focus on enterprise-level programming practices and business logic.',
      technologies: ['Java', 'SQL', 'HTML', 'CSS'],
      highlights: [
        'Implemented business logic and workflows',
        'Database design and management',
        'User authentication and authorization',
        'Shopping cart and payment integration'
      ]
    },
    {
      title: 'Python Data Analysis & Prediction',
      type: 'Academic Project',
      period: '2021 – 2023',
      description: 'Data analysis and machine learning project using Python for predictive modeling and insights.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      highlights: [
        'Data preprocessing and cleaning',
        'Exploratory data analysis',
        'Machine learning model development',
        'Predictive analytics implementation'
      ]
    }
  ];
}