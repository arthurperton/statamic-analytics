<?php

namespace ArthurPerton\Analytics\Console\Commands;

use ArthurPerton\Analytics\Facades\Database;
use Illuminate\Console\Command;

class CreateDatabase extends Command
{
    protected $signature = 'analytics:create-database
        {--overwrite : Overwrites the existing database, if any }
    ';

    protected $description = 'Create the SQLite database for the Analytics addon.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(): int
    {
        $this->info('Creating SQLite database...');
        
        Database::create((bool) $this->option('overwrite'));

        $this->line('Database created.');

        return 0;
    }
}
