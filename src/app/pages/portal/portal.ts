import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-portal',
  imports: [RouterOutlet, Header, Footer],  
  templateUrl: './portal.html',
  styleUrl: './portal.scss',
})
export class Portal {}
