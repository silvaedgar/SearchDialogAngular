import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface DialogData {
  name:string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) private data:DialogData,
    public dialogmodal:MatDialogRef<SearchComponent>)   { }

  listdisplay: any=[];

  displayedColumns: string[] = ['name'];
  dataSource!: MatTableDataSource<DialogData>

  fruits = ['Apple','Pear','Mango','Lemon','Guavas','Soursop','Peach'  ]
  colors = ['Blue','Green','Yellow','White','Black','Red']
  nations = ['Venezuela','Brasil','Argentina','Ecuador','Colombia','Peru']



  CloseDialog(element:any) {
    this.dialogmodal.close(element)
  }


  ngOnInit(): void {
    switch (this.data.name) {
      case 'fruits': this.listdisplay = this.fruits
        break;
      case 'colors': this.listdisplay = this.colors
        break;
      default: this.listdisplay = this.nations
    }
    this.dataSource = new MatTableDataSource(this.listdisplay)
  }

}
