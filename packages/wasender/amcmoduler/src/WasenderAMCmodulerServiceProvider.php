<?php

namespace Wasender\AMCmoduler;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
class WasenderAMCmodulerServiceProvider extends ServiceProvider
{


    public function register()
    {
       
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(\Illuminate\Routing\Router $router)
    {
      
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/views', 'modules');  

    }
}
