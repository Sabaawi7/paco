import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
    });
  }

  onOkClick() {
    if (this.acceptedPolicy) {
      this.dialogRef.close(this.token); // Close the dialog and return the token if policy is accepted
    } else {
      this.showHint = true; // Show a hint if the policy is not accepted
    }
  }
}
