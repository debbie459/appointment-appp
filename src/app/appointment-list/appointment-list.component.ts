import { Component, NgModule, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
 
  
  //interface with one-way data binding

  //appointment : Appointment = {
    //id: 1,
    //name: "See the dentist by 4pm",
    //date: new Date('2024-06-14')

  //}

  newAppointmentName : String = "";
  newAppointmentDate : Date = new Date();

  appointments : Appointment[] = []

  //angular works in this way
//one way data binding is when you take stuff from the ts file, then bind it in the html
// one way data binding delas with binding the component9the component ts file's data to a template (the component html file)

ngOnInit(): void {
  let savedAppointments = localStorage.getItem("appointments");
  this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
}

addAppointment(){
  if (this.newAppointmentName.trim().length && this.newAppointmentDate ){
    let newAppointment : Appointment= {
      id : Date.now(),
      name: this.newAppointmentName,
      date: this.newAppointmentDate
    }

    this.appointments.push(newAppointment);
    this.newAppointmentName = "";
    this.newAppointmentDate = new Date();

    localStorage.setItem("appointments", JSON.stringify(this.appointments));

   
  }

  else{
    alert("fill in the appropriate values");
  }
  
}

removeAppointment(index: number){
  this.appointments.splice(index,1);
  localStorage.setItem("appointments", JSON.stringify(this.appointments));
}

}

