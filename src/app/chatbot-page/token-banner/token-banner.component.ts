import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token-banner',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ClipboardModule, FormsModule],
  templateUrl: './token-banner.component.html',
  styleUrl: './token-banner.component.scss'
})
export class TokenBannerComponent implements OnInit{

  value='';
  token='';


  constructor(private tokenService: TokenService) { }

ngOnInit() {
  this.tokenService.currentToken.subscribe(token => {
    // Hier können Sie den Token-Wert verwenden
    this.token = token;
    this.value = token;
    console.log(token);
  });
 
}
}
