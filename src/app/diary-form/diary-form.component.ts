import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryDataService } from './../shared/diary-data.component';
import { DiaryEntry } from './../shared/diary-entry.model';

@Component({
  selector: 'app-diary-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './diary-form.component.html',
  styleUrl: './diary-form.component.css'
})
export class DiaryFormComponent implements OnInit {
  diaryForm: FormGroup;
  editMode = false;
  diaryEntry: DiaryEntry;
  paramId:number;

  constructor(private diaryDataService: DiaryDataService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.editMode = true;
        this.paramId = +params.get('id')!;
        this.diaryEntry = this.diaryDataService.getDiaryEntry(this.paramId);
      }else{
        this.editMode = false;
      }
    })
    this.diaryForm = new FormGroup({
      date: new FormControl(this.editMode ? this.diaryEntry.date : null, [Validators.required]),
      entry: new FormControl(this.editMode ? this.diaryEntry.entry : null, [Validators.required])
    });
  }

  onSubmit() {
    const newEntry = new DiaryEntry(this.diaryForm.value.date, this.diaryForm.value.entry);
    if(this.editMode){
      this.diaryDataService.onUpdateEntry(this.paramId, newEntry);
    }else{
      this.diaryDataService.onAddDiaryEntry(newEntry);
    }
    this.router.navigateByUrl("");
  }
}
