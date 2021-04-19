import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  phoneArray: Array<IPhone> = [{
    firstname: 'Oleg',
    secondname: 'Barylko',
    phonenumber: '0931262051'
  },
  {
    firstname: 'Yaroslav',
    secondname: 'Ryvko',
    phonenumber: '0931178951'
  },
  {
    firstname: 'Ostap',
    secondname: 'Phylypets',
    phonenumber: '0973214101'
  }];
  
  editstatus: boolean;
  indexEdit: number;
  enter: any;
  sortFnamestatus: boolean = true;
  sortSnamestatus: boolean = true;
  sortNumberstatus: boolean = true;
  arrowUpname: boolean = false;
  arrowDownname: boolean = false;
  arrowUpsname: boolean = false;
  arrowDownsname: boolean = false;
  arrowUpnumber: boolean = false;
  arrowDownnumber: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const User: IPhone = {
      firstname: this.firstName,
      secondname: this.secondName,
      phonenumber: this.phoneNumber
    }
    this.phoneArray.push(User);
    this.firstName = '';
    this.secondName = '';
    this.phoneNumber = null;
  }

  deleteUser(index: number): void {
    this.phoneArray.splice(index, 1);
  }

  editUser(index: number): void {
    this.editstatus = true;
    this.indexEdit = index;
    this.firstName = this.phoneArray[index].firstname;
    this.secondName = this.phoneArray[index].secondname;
    this.phoneNumber = this.phoneArray[index].phonenumber;
  }

  saveEditUser(): void {
    const editUser: IPhone = {
      firstname: this.firstName,
      secondname: this.secondName,
      phonenumber: this.phoneNumber
    }
    this.phoneArray.splice(this.indexEdit, 1, editUser);
    this.firstName = '';
    this.secondName = '';
    this.phoneNumber = null;
  }

  addBtn(): void {
    this.editstatus = false
  }

  sortFirstname(): void {
    if (this.sortFnamestatus) {
      this.phoneArray.sort((a, b) => a.firstname.localeCompare(b.firstname));
      this.sortFnamestatus = false;
      this.arrowUpname = true;
      this.arrowDownname = false;
      this.arrowUpnumber = false;
      this.arrowDownnumber = false;
      this.arrowUpsname = false;
      this.arrowDownsname = false;
    }
    else {
      this.phoneArray.sort((b, a) => a.firstname.localeCompare(b.firstname));
      this.sortFnamestatus = true;
      this.arrowUpname = false;
      this.arrowDownname = true;
      this.arrowUpnumber = false;
      this.arrowDownnumber = false;
      this.arrowUpsname = false;
      this.arrowDownsname = false;
    }
  }

  sortSecondname(): void {
    if (this.sortSnamestatus) {
      this.phoneArray.sort((a, b) => a.secondname.localeCompare(b.secondname));
      this.sortSnamestatus = false;
      this.arrowUpsname = true;
      this.arrowDownsname = false;
      this.arrowUpnumber = false;
      this.arrowDownnumber = false;
      this.arrowUpname = false;
      this.arrowDownname = false;
    }
    else {
      this.phoneArray.sort((b, a) => a.secondname.localeCompare(b.secondname));
      this.sortSnamestatus = true;
      this.arrowUpsname = false;
      this.arrowDownsname = true;
      this.arrowUpnumber = false;
      this.arrowDownnumber = false;
      this.arrowUpname = false;
      this.arrowDownname = false;
    }
  }

  sortNumber(): void {
    if (this.sortNumberstatus) {
      this.phoneArray.sort((a, b) => a.phonenumber.localeCompare(b.phonenumber));
      this.sortNumberstatus = false;
      this.arrowUpnumber = true;
      this.arrowDownnumber = false;
      this.arrowUpname = false;
      this.arrowDownname = false;
      this.arrowUpsname = false;
      this.arrowDownsname = false;
    }
    else {
      this.phoneArray.sort((b, a) => a.phonenumber.localeCompare(b.phonenumber));
      this.sortNumberstatus = true;
      this.arrowUpnumber = false;
      this.arrowDownnumber = true;
      this.arrowUpname = false;
      this.arrowDownname = false;
      this.arrowUpsname = false;
      this.arrowDownsname = false;
    }
  }
}

export interface IPhone {
  firstname: string;
  secondname: string;
  phonenumber: string;
}