import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = 'First title'
  toggle = true


  ngOnInit(): void {
  }

  hendlerChange(e: any) {
    const value = e.target.value
    this.title = value
  }

  toggleCardS(){
    this.toggle = !this.toggle
  }
}
