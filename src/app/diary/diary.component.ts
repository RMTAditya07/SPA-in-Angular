import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DiaryDataService } from '../shared/diary-data.component';
import { DiaryEntry } from '../shared/diary-entry.model';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent implements OnInit , OnDestroy{
  diaryEntries: DiaryEntry[];
  diarySubscription: Subscription = new Subscription();

  constructor(private diaryDataService: DiaryDataService, private router: Router){}

  ngOnInit(): void {
    this.diarySubscription = this.diaryDataService.diarySubject.subscribe(diaryEntries=>{
      this.diaryEntries = diaryEntries;
    });
    this.diaryEntries = this.diaryDataService.diaryEntries;
  }
  ngOnDestroy(): void {
    this.diarySubscription.unsubscribe();

  }

  onDelete(index:number){
    this.diaryDataService.onDelete(index);
  }

  onEdit(index: number){
    this.router.navigate(['/edit', index]);
  }
  getDiaryEntry(index:number){
    return {...this.diaryEntries[index]};
  }
}
