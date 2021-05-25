import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'altimetrik';
  documents = [
    {name: 'Terminal instructables', category: 'Techinical', color: 'rgb(237 156 223 / 35%)'},
    {name: 'Installation guides', category: 'Techinical', color: 'rgb(237 156 223 / 35%);'},
    {name: 'Career opportunities', category: 'Human resources', color: 'rgb(11 181 110 / 24%)'},
    {name: 'Customer onboarding', category: 'Financial', color: 'rgb(135 247 170 / 41%);'},
    {name: 'Outlet branding', category: 'Marketing', color: 'rgba(241, 156, 156, 0.5)'},
    {name: 'Accounting procedures', category: 'Financial', color: ''},
    {name: 'Training', category: 'Human resources', color: 'rgb(11 181 110 / 24%)'},
    {name: 'Printing guidance', category: 'Marketing', color: 'rgba(241, 156, 156, 0.5)'},
    {name: 'Technical support', category: 'Techinical', color: 'rgb(237 156 223 / 35%);'}
  ]
}
