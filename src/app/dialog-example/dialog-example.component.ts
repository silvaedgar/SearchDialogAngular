import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';

export interface DialogData {
  name:string
}

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(private modaldialog:MatDialog) {}

  selection = "Here's Selection"

  OpenDialog(option:string) {

      const dialogref = this.modaldialog.open(SearchComponent, {
        width:"30%",
        disableClose: true,
        data:{name:option}
      })
      dialogref.afterClosed().subscribe(result => {
        this.selection = result
      })
  }

  ngOnInit(): void {
  }

}
