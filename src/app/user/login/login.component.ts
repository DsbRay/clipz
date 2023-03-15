import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }
  showAlert = false
  alertMsg = "Logging In!"
  alertColor = "blue"
  inSubmission = false

  constructor(
    private auth: AngularFireAuth
  ) { }
  ngOnInit(): void {

  }
  async login() {
    this.showAlert = true
    this.alertMsg = "Logging In!"
    this.alertColor = "blue"
    this.inSubmission = true
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (e) {
      this.alertMsg = "Failed, please try again"
      this.alertColor = "red"
      this.inSubmission = false
      return
    }
    this.alertMsg = "Login successful!"
    this.alertColor = "green"
  }
}
