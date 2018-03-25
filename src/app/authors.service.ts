import { Injectable } from '@angular/core';

export class AuthorsService {

  constructor() { }

  getAuthors(){
    return ['John', 'Tom', 'Mary'];
  }
}
