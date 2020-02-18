import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}
  search(searchTerm: string) {
    const results = this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: 1,
        srsearch: searchTerm,
        origin: '*'
      }
    });
    return results;
  }
}
