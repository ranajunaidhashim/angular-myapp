import { Component,computed,EventEmitter,Input,input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
const RandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
// avatar:string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
}) 
export class UserComponent {
// // signals method
// // avatar = input.required<string>()
// // name = input.required<string>()

// // imagePath = computed(()=>{
// //   return 'assets/users/' + this.avatar; 
// // })

// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;
// @Input({required:true}) id!:string;
@Input({required:true}) user!:User;
@Input({required:true}) selected!:boolean;


@Output() select = new EventEmitter<string>();
// // select = output<string>()


public get imagePath() : string {
  return 'assets/users/' + this.user.avatar;
}

onSelectUser(){
this.select.emit(this.user.id);
}

}
