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
        $overwrite = (bool) $this->option('overwrite');

        if ($overwrite) {
            $this->info('Creating SQLite database, overwriting it when it already exists...');
        } else {
            $this->info('Creating SQLite database or updating it when it already exists...');
        }
        
        Database::create($overwrite);

        $this->line('Database created.');

        return 0;
    }
}
