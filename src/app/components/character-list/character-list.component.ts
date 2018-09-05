import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import { Router } from '@angular/router';

import {Character} from '../../models/character';
import {CharactersServiceService} from '../../services/characters-service.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Character>;

  constructor(private charsService: CharactersServiceService, private router: Router) { }

  ngOnInit() 
  {
    this.getChars();
  }

  getChars(): void
  {
  	this.charsService.getCharacters()
  		.subscribe(chars => 
  			{
  				this.dataSource=new MatTableDataSource(chars); 
  				this.dataSource.paginator = this.paginator;
  				this.dataSource.sort = this.sort;
  			}
  		);
  }

}
