<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public  function project_image(){
        return $this->hasMany("App\Models\ProjectImage",'project_id') ;
    }



 public  function costs(){
        return $this->hasMany("App\Models\ProjectCost",'project_id') ;
    }





}
