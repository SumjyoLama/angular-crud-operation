import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';
import { ViewStudentComponent } from './components/student/view-student/view-student.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'edit-student',
    component:EditStudentComponent
  },
  {
    path:'view-student',
    component:ViewStudentComponent
  },
  {
    path:'add-student',
    component:AddStudentComponent
  },
  {
    path:'detail-student',
    component:StudentDetailComponent
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
