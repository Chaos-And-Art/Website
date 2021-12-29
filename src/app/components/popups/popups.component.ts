import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupTypes } from 'src/app/models/popupTypes';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupTypes) { }

  ngOnInit(): void {
  }

}
