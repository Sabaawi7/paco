import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../token.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-token-banner',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatCheckboxModule, ClipboardModule, FormsModule, NgIf],
  templateUrl: './token-banner.component.html',
  styleUrls: ['./token-banner.component.scss']
})
export class TokenBannerComponent implements OnInit {

  value = '';
  token = '';
  acceptedPolicy = false;
  showHint = false;

  constructor(
    private tokenService: TokenService,
    private dialogRef: MatDialogRef<TokenBannerComponent>
  ) { }

  ngOnInit() {
    this.tokenService.currentToken.subscribe(token => {
      this.token = token;
      this.value = token;
    });
  }

  onOkClick() {
    if (!this.acceptedPolicy) {
      this.showHint = true;
    } else {
      this.showHint = false;
      this.dialogRef.close(); // Close the dialog if policy is accepted
    }
  }
}
