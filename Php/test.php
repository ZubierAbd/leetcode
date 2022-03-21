<?php

class Triangle{

    public $height;
    public $length;

    function area(){
        return ($this->height * $this->weight)/2;
    }

    function set_height($height){
        $this->height = $height;
    }

    function set_length($length){
        $this->length = $length;
    }


}

$a = new Triangle();

$a->set_height(10);
$a->set_length(2);

$area = $a->area();

echo $area;