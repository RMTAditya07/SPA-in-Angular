import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{

  diarySubject = new Subject<DiaryEntry[]>();

  diaryEntries: DiaryEntry[] = [
    new DiaryEntry("Jan 1st","Entry 1"),
    new DiaryEntry("Jan 2nd","Entry 2"),
    new DiaryEntry("Jan 3rd","Entry 3"),
  ];

  onDelete(index:number){
    this.diaryEntries.splice(index,1);
    this.diarySubject.next(this.diaryEntries);
  }

  onAddDiaryEntry(entry:DiaryEntry){
    this.diaryEntries.push(entry);
    this.diarySubject.next(this.diaryEntries);
  }
  getDiaryEntry(index: number): DiaryEntry {
    return { ...this.diaryEntries[index] }; // Return a copy to prevent mutation.
  }

  onUpdateEntry(paramId:number, newEntry:DiaryEntry){
    this.diaryEntries[paramId] = newEntry;
    this.diarySubject.next(this.diaryEntries);
  }
}
