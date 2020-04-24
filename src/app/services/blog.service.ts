import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BlogEntryModel } from '../models/blog.model';

@Injectable()
export class BlogService {

    private url = 'https://fir-fotos-692dd.firebaseio.com/blogEntry.json';

    constructor( private http: HttpClient ) {}

    getPosts() {
        return this.http.get(`${this.url}`)
        .pipe(
            map( resp => this.crearArray(resp))
        );
    }

    private crearArray( entriesObj: object) {
        const entries: BlogEntryModel[] = [];
        if (entriesObj === null) { return []; }
        Object.keys(entriesObj).forEach(key => {
            const entry: BlogEntryModel = entriesObj[key];
            entry.id = key;

            entries.push(entry);
        });
        return entries;
    }
}
