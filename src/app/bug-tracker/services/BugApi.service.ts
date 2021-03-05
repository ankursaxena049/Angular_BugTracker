import { Bug } from "../models/Bug";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class BugServerStorageService {

    constructor(private httpClient: HttpClient) { }

    private currentBugId: number = 0;

    saveBug(bug: Bug): Observable<Bug> {
        if (bug.id === 0) {
            return this.httpClient.post<Bug>('http://localhost:3000/bugs', bug);
        } else {
            return this.httpClient.put<Bug>(`http://localhost:3000/bugs/${bug.id}`, bug);
        }
    }
    removeBug(bug: Bug): Observable<any> {
        return this.httpClient.delete<Bug>(`http://localhost:3000/bugs/${bug.id}`);

    }
    getAllBugs(): Observable<Bug[]> {
        return this.httpClient.get<Bug[]>('http://localhost:3000/bugs');
    }
}