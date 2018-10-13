import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()

export class ContactService {

  constructor(private http: Http) { }

//retrieve

getContacts(userid)
{
  var params = new HttpParams();
  var user = {
    userid: userid
  }
  return this.http.get('http://104.248.51.139:3000/api/contacts', {params:user}).pipe(
  map(res => res.json()));
}
addContact(newContact)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://104.248.51.139:3000/api/contact',newContact,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteContact(id)
{
  return this.http.delete('http://104.248.51.139:3000/api/contact/'+id).pipe(map(res => res.json()));
}


}
