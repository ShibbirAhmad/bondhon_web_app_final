<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions=[

            'dashboard' => [

                'view dashboard'
            ],
            
            'order' => [
               'create order',
               'manage order',
               'manage pending order',
               'manage approved order',
               'manage shipment order',
               'manage delivered order',
               'manage return order',
               'manage cancel order',
            ],

            'wholesale' => [
                'create wholesale',
                'manage wholesale',
            ],

            'officesale' => [
                'create officesale',
                'manage officesale',
            ],
            'companysale' => [
                'create companysale',
                'manage companysale',
            ],
            'product purchase' => [
                'create product purchase',
                'manage product purchase',
            ],
            'Fabrics purchase' => [
                'create Fabrics purchase',
                'manage Fabrics purchase',
            ],
            'Account' => [
                'manage accounts',
            ],
            'Credit' => [
                'manage credit',
                'create credit',
                'edit credit',
                'delete credit'
            ],
            'Debit' => [
                'manage debit',
                'create debit',
                'edit debit',
                'delete debit'
            ],
            'Debit' => [
                'manage debit',
                'create debit',
                'edit debit',
                'delete debit'
            ],

            'Fund Transfer' => [
                'manage Fund Transfer',
               
            ],

            'Product' => [

                'manage Product',
                'create Product',
                'edit Product',
            ],

            'Product' => [
                 'manage Product',
                'create Product',
                'edit Product',
            ],

            'Category' => [
                'manage Category',
                'create Category',
            ],
            'Sub Category' => [
                'manage Sub Category',
                'create Sub Category',
            ],
            'Sub Sub Category' => [
                'manage Sub Sub Category',
                'create Sub Sub Category',
            ],
            'Attribute & variant' => [
                'manage attribute & variant',
                'create attribute & variant',
            ],
            'Attribute & variant' => [
                'manage attribute & variant',
                'create attribute & variant',
            ],
            'Slider' => [
                'manage slider',
                'create create',
            ],
            'Supplier' => [
                'manage supplier',
                'create supplier',
            ],

            'Admin' => [
                'manage admin',
                'create admin',
            ],

            'Team' => [
                'manage team',
                'create team',
            ],

            'Reseller' => [
                'manage resller',
                'create resller',
            ],

            'User' => [
                'manage user',
            ],
            'Customer' => [
                'manage customer',
            ],
            'Report' => [
                'manage eport',
            ],
            'Basic Setup' => [
                'manage set up',
            ],


        ];

        foreach($permissions as $k=> $permission){
            foreach($permission as $item){
                Permission::create([
                    'name'=>$item,
                    'guard_name'=>'admin',
                    'group_name'=>$k
                ]);
            }
        }
    }
}
