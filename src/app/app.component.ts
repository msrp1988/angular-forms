import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  topics = ['angular','react','vue'];
  topicHasError = true;

  userModel = new User('', 'rob@test.com', 5556665566, 'default' , 'morning', true);

  
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    } else{
      this.topicHasError  = false;
    }
  }
  onSubmit(){
    console.log(this.userModel);
  }
}
