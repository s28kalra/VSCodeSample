import { Component, OnInit } from "@angular/core";

import { User } from "./user";
@Component({
    selector:'print-name',
    template:`
        <form (ngSubmit)='show()'>
            UserName: <input [(ngModel)]='user.username' name='uname'/>
            Your Address: <input  [(ngModel)]='user.useraddress' name='uadd'/>
            User Age: <input [(ngModel)]='user.userage' name='uage'/>
            <button type='submit'>Submit</button>
        </form>
        <!-- <img src='{{imagePath}}'/> -->
            <img [src]='imagePath' />   <!--  this is property binding-->
            <span [innerHTML]='title'></span>
    `,
    styles:[]
})
export class PrintName implements OnInit{
    imagePath='assets/Be-agile-237x300.png';
    title='Hello how are you';
    user=new User();

    constructor(){}
    show(){
        console.log('user details '+this.user.username+' '+this.user.userage+' '+this.user.useraddress);
    }

    ngOnInit(): void {
        console.log('OnInit called');
        console.log('user details '+this.user.username+' '+this.user.userage+' '+this.user.useraddress);
    }
}