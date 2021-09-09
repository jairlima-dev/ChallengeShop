<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class ProductImage extends Model
{
    protected $fillable = ['product_id', 'name'];

    public function products()
    {
        return $this->belongsTo(Product::class);
    }
}
