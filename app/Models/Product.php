<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductImage;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'price'];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}
