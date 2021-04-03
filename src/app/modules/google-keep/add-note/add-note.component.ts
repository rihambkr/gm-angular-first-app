import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {KeepService} from '../../../services/keep.service';
import {Keep} from '../../../models/keep';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  title = new FormControl();
  content = new FormControl();
  keeps: Keep[];

  constructor(private service: KeepService,
              private router: Router) {
    this.service.getKeep().subscribe(keeps => {
      this.keeps = keeps;
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

  addNote = () => {
    const keep = new Keep(this.title.value, this.content.value);
    this.keeps.push(keep);
    this.service.keep.next(this.keeps);
    this.router.navigate(['/keeps']);
  };

}
