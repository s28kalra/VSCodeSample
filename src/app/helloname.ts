import {Component} from "@angular/core";
@Component({
    selector:'hello-name',
    template:`
        <form (submit)='show()'>
            Enter your name:<input [(ngModel)]=username name='nm'>
            <button type='submit'>Submit</button>
        </form>
        <p id='hello'>Hello {{username}} </p>
    `,
    styles:['p{display:none}']
})
export class HelloName{
    username:string="";
    show(){
        document.getElementById('hello').style.display='block';
    }
}